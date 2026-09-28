// Native bridge for the English class app. Bundled by esbuild into www/native.js and
// loaded before the app script. The shared index.html checks for
// window.EnglishClassNative and falls back to browser APIs when it is absent.
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Preferences } from '@capacitor/preferences';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { SpeechRecognition } from '@capgo/capacitor-speech-recognition';

const STORE_KEY = 'eng-class-v1';

// ----- lesson updates -----
// The app shell (this file and the native plugins) has an API version. A lesson bundle
// says which shell version it needs; bundles that need a newer shell are skipped until
// the app itself is reinstalled. Bump SHELL when index.html starts using a new API here,
// and REQUIRES_SHELL in scripts/build-www.mjs at the same time.
const SHELL = 1;
const UPDATE_URL = 'https://github.com/snabs1993/kritsada/releases/download/lessons-latest/lessons.json';
const BUNDLE_KEY = 'ota-bundle';
const BAD_KEY = 'ota-bad';
const TRYING_KEY = 'ota-trying'; // localStorage: set by the loader, cleared once the app boots
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

async function storedBundle() {
  try {
    const { value } = await Preferences.get({ key: BUNDLE_KEY });
    const b = value ? JSON.parse(value) : null;
    return b && typeof b.version === 'number' && typeof b.html === 'string' ? b : null;
  } catch (e) {
    return null;
  }
}

async function badVersions() {
  try {
    const { value } = await Preferences.get({ key: BAD_KEY });
    return value ? JSON.parse(value) : [];
  } catch (e) {
    return [];
  }
}

// Called by the loader when a downloaded bundle never finished booting last time.
async function discardBundle(version) {
  const bad = await badVersions();
  if (!bad.includes(version)) bad.push(version);
  await Preferences.set({ key: BAD_KEY, value: JSON.stringify(bad.slice(-20)) });
  await Preferences.remove({ key: BUNDLE_KEY });
}

function bootOk() {
  try {
    localStorage.removeItem(TRYING_KEY);
  } catch (e) {}
}

function running() {
  return window.__OTA_RUNNING || { version: 0, source: 'builtin' };
}

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

function parseManifest(data) {
  if (data && typeof data === 'object') return data;
  if (typeof data !== 'string') return null;
  try {
    return JSON.parse(data);
  } catch (e) {}
  try {
    // some platforms hand back binary downloads as base64
    const bin = atob(data);
    return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))));
  } catch (e) {
    return null;
  }
}

// Downloads a newer lesson bundle if there is one. It takes effect on the next launch
// (or right away through applyUpdate). Status: latest | downloaded | offline | error | needs-app
async function checkUpdate() {
  let res;
  try {
    res = await CapacitorHttp.get({
      url: UPDATE_URL + '?t=' + Date.now(),
      responseType: 'text',
      connectTimeout: 10000,
      readTimeout: 30000,
    });
  } catch (e) {
    return { status: 'offline' };
  }
  if (res.status !== 200) return { status: res.status === 404 ? 'latest' : 'error' };
  const m = parseManifest(res.data);
  if (!m || typeof m.version !== 'number' || typeof m.html !== 'string') return { status: 'error' };
  const stored = await storedBundle();
  const have = Math.max(running().version || 0, stored ? stored.version : 0);
  if (m.version <= have) return { status: 'latest', version: have };
  if ((m.requiresShell || 1) > SHELL) return { status: 'needs-app', version: m.version };
  if ((await badVersions()).includes(m.version)) return { status: 'latest', version: have };
  if (m.sha256 && crypto.subtle && (await sha256(m.html)) !== m.sha256) return { status: 'error' };
  await Preferences.set({ key: BUNDLE_KEY, value: JSON.stringify({ version: m.version, html: m.html }) });
  return { status: 'downloaded', version: m.version };
}

async function pendingVersion() {
  const b = await storedBundle();
  return b && b.version > (running().version || 0) ? b.version : 0;
}

function applyUpdate() {
  location.reload();
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
    shell: SHELL,
    running,
    storedBundle,
    discardBundle,
    bootOk,
    checkUpdate,
    pendingVersion,
    applyUpdate,
  };
}
