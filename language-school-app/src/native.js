// Native bridge for the English class app. Bundled by esbuild into www/native.js and
// loaded before the app script. The shared index.html checks for
// window.EnglishClassNative and falls back to browser APIs when it is absent.
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Preferences } from '@capacitor/preferences';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { SpeechRecognition } from '@capgo/capacitor-speech-recognition';

const STORE_KEY = 'eng-class-v1';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let session = null; // the recognition session in progress, if any

async function load() {
  const { value } = await Preferences.get({ key: STORE_KEY });
  return value || null;
}

function save(json) {
  return Preferences.set({ key: STORE_KEY, value: json });
}

async function speak(text, { rate = 0.95, pitch = 1 } = {}) {
  try {
    await TextToSpeech.stop();
  } catch (e) {}
  // "playback" keeps the voice audible with the iPhone/iPad silent switch on,
  // and resets the audio session after the microphone was used.
  await TextToSpeech.speak({ text, lang: 'en-US', rate, pitch, volume: 1, category: 'playback' });
}

function stopSpeak() {
  return TextToSpeech.stop().catch(() => {});
}

async function sttAvailable() {
  try {
    const { available } = await SpeechRecognition.available();
    return available;
  } catch (e) {
    return false;
  }
}

async function sttPermission() {
  let st = await SpeechRecognition.checkPermissions();
  if (st.speechRecognition !== 'granted') st = await SpeechRecognition.requestPermissions();
  return st.speechRecognition === 'granted';
}

// Listen once in English. Resolves with the best transcript heard ("" if nothing).
// onPartial(text) streams live text; done(text) lets the caller end early once the
// target sentence has been heard in full.
async function listen({ onPartial, done, maxMs = 8000, hints = [] } = {}) {
  if (session) await stopListening();
  let heard = '';
  let finish;
  const ended = new Promise((r) => (finish = r));
  const me = { stop: () => SpeechRecognition.stop().catch(() => {}) };
  session = me;
  const subs = [
    await SpeechRecognition.addListener('partialResults', (e) => {
      const text = (e.matches && e.matches[0]) || e.accumulatedText || '';
      if (!text) return;
      heard = text;
      if (onPartial) onPartial(text);
      if (done && done(text)) setTimeout(() => me.stop(), 350);
    }),
    await SpeechRecognition.addListener('listeningState', (e) => {
      if (e.status === 'stopped' || e.state === 'stopped') finish();
    }),
    await SpeechRecognition.addListener('error', () => finish()),
  ];
  const timer = setTimeout(() => me.stop(), maxMs);
  try {
    await SpeechRecognition.start({
      language: 'en-US',
      maxResults: 3,
      partialResults: true,
      popup: false,
      addPunctuation: false,
      contextualStrings: hints,
    });
    await Promise.race([ended, sleep(maxMs + 2000)]);
    try {
      const last = await SpeechRecognition.getLastPartialResult();
      if (last && last.available && last.text && last.text.length > heard.length) heard = last.text;
    } catch (e) {}
  } finally {
    clearTimeout(timer);
    subs.forEach((s) => s.remove());
    if (session === me) session = null;
  }
  return heard;
}

async function stopListening() {
  const s = session;
  session = null;
  if (s) await s.stop();
}

function onBack(handler) {
  App.addListener('backButton', handler);
}

if (Capacitor.isNativePlatform()) {
  window.EnglishClassNative = {
    platform: Capacitor.getPlatform(),
    load,
    save,
    speak,
    stopSpeak,
    sttAvailable,
    sttPermission,
    listen,
    stopListening,
    isListening: () => !!session,
    onBack,
    exit: () => App.exitApp(),
  };
}
