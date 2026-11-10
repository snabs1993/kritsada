# English class app (ห้องเรียนอังกฤษส่วนตัว)

A personal English course for Thai speakers. The UI and all explanations are in Thai.
The same lesson file runs in two places:

- **Web**: `language-school/index.html` is published as a claude.ai artifact.
- **Android app**: `language-school-app/` (Capacitor) wraps the same file. It is sideloaded
  as a release APK and receives lesson updates over the air (OTA).

Every content change must reach both, in the same round:

- **App:** push to GitHub; CI publishes the OTA update.
- **Web:** republish `language-school/index.html` to the existing artifact
  https://claude.ai/artifact/Q8KWFzvaNBNUWKDA5pVtXS. Pass that link as `url` so the same link is
  updated rather than a new one created. If the Artifact tool isn't available, say so, and the web
  copy will be updated next time.

## Layout

| Path | What it is |
|---|---|
| `language-school/index.html` | The whole app: vanilla JS in one IIFE plus all content (~10k lines). It has no doctype/html/head/body and starts with `<title>`. |
| `language-school/README.md` | Thai README with feature list and content counts. Update the counts every round. |
| `language-school/tests/` | Playwright browser tests (see Testing). |
| `language-school-app/` | Capacitor project. `scripts/build-www.mjs` copies `index.html` into the app shell. |
| `language-school-app/android/app/release.keystore` | Release signing key (alias `englishclass`, password `englishclass`). Committed on purpose for family sideloading only; a Play Store build would need a private key. |
| `.github/workflows/english-class-android.yml` | CI: builds debug and release APKs and publishes release `lessons-latest` with `english-class.apk`, `english-class-debug.apk` and `lessons.json` (the OTA payload). |

## How updates reach the app

1. Push a commit that touches `language-school/**` (any branch; keep using `claude/keen-volta-6ibcuu`).
2. CI runs (~3 min) and replaces the assets on release `lessons-latest`.
3. The installed app checks `lessons.json` on start and offers the update. No new APK is
   needed unless native code (`language-school-app/android`, plugins) changed.
4. To verify, download `https://github.com/snabs1993/kritsada/releases/download/lessons-latest/lessons.json`
   and search its `html` field for a new title.

The APK version is `1.0.<1 + GITHUB_RUN_NUMBER>`. When sending an APK to the user, name the file with the version.

## App architecture (index.html)

- `render()` draws the current view; `go(name,id)` routes, and the hash is `#name-id` (e.g. `#lesson-u5`, `#practice-pod.p12`, `#exam-toeic-reading-3`).
- Clicks use `data-act` delegation through `ACT` (`Object.assign(ACT,XACT,PACT,...)`).
- Practice sub-pages: `route.name==="practice"` with `route.id` like `gram.cond`, `story.a1a`, `scene.job`.
- Native bridge `NB` (`window.EnglishClassNative`): speech, speech recognition, storage, OTA.
- Progress lives in localStorage key `eng-class-v1` (and cloud sync on the web).
- Song mode (`#practice-songs`, `song.<id>`, block "song mode" before routing): public Spotify playlist → its embed page via `NB.fetchText`; timed lyrics from LRCLIB (`fetch`, CORS open); video from YouTube search results via `NB.fetchText`, picked by length; Thai lines from `NB.translate` (ML Kit on the phone, Thai model downloads over Wi-Fi only). Per-song cache in localStorage `eng-class-songs`. Apps still on shell 1 use `window.Capacitor.Plugins.CapacitorHttp` (always registered) for pages and Google's web translator (`translate.googleapis.com ... client=gtx`, online, sometimes refuses with "automated queries") — `sgFetchText` / `sgTranslate` pick the path. Never write lyrics into the app or this repo; they are fetched at runtime. Test: `tests/songs.test.js` (all services faked).
- Business English (`#practice-biz`, `biz.b<n>`, theme reviews `biz.r<theme>`): data `BIZ` (6 `BIZ_THEMES` × 5 lessons) between "business English" and "business English content end", UI in "business English UI". Topics follow a common syllabus the owner showed from a commercial textbook; all text is original — never copy from that book. Validate new lessons with the same rules as `tests/biz.test.js` checks.
- Website (for the owner's iPad): https://snabs1993.github.io/kritsada/ built by `language-school-web/build.mjs` (adds the document head, manifest and icon) and deployed by `.github/workflows/english-class-web.yml` on every push that changes `language-school/index.html`. No `window.claude` there, so the page adds class `no-ai` and hides `.ai-only` items. Progress is per browser. The claude.ai artifact still exists too.
- Guided speaking "พาพูด" (`#practice-speak`, `speak.<id>`, `speak.review`; block "guided speaking"): for learners who cannot find the words. Each item is a Thai instruction; hints open one step at a time (key words → frame → model answer, read aloud); a mic checks the answer with `gradePron` against `en` and `alts` (`free:true` items, i.e. personal answers, only check the frame's fixed words, pass 50% instead of 70%). Items not said unaided return at the end of the round and stay in `stat("spkHard")` for the review session. Speech recognition goes through `STT`: the app's `NB.listen`, or the browser's `SpeechRecognition` on the website (Safari on iPad). Recognisers end at the first pause, so speaking checks use `STT.listenLong`, which restarts after each pause and joins the pieces until the learner taps stop, the answer is complete, or they stay quiet; answers are matched with `wordClose` (one letter off, US/UK spelling, -s/-ed) because phone recognisers mishear a Thai accent, and the learner can always grade themselves after a try. The lesson mic (`pronounce`) uses the same. `STT` is off when `navigator.webdriver` is set unless `window.EC_FAKE_STT` (tests). Test: `tests/speak.test.js`.
- Account and sync (top-bar account menu `#acct`, page `#account`; block "account and sync between devices"): email + password sign-in through Firebase Auth's REST API, progress in one Firestore document `progress/<uid>` stored in the backup-code format. The project's public web config goes in `FB` (`apiKey`, `projectId`); until it is filled in the sign-in form says the account system is being prepared. Rules are in `language-school/firebase/firestore.rules` (each user reads and writes only their own document). Sync is a three-way merge against the last agreed copy so deletions are not brought back; add a rule to `GS_RULE` when a new part of `S` needs more than "newer device wins". Writes carry the read's `updateTime` as a precondition, and a lost race syncs again. The sign-in (`eng-class-acct` in localStorage) is kept outside `S`, so backups never carry it. Backup codes `EC1:`/`EC0:` (block "back up / move progress") are on the account page. Tests: `tests/sync.test.js` (Firebase faked; `window.EC_FIREBASE` overrides the config) and `tests/backup.test.js`. Google sign-in is not usable: Google blocks sign-in inside the app's web view. There is no study-day (streak) counter on screen on purpose: the owner finds it stressful.
- App shell API version is `SHELL` in `language-school-app/src/native.js` (2 = translate + fetchText). Features that need a newer shell must check for their API and offer the APK download, so `REQUIRES_SHELL` can stay 1 and lesson updates keep reaching older installs. Native changes reach phones only through a new APK.
- Units: 24 core units `u1`–`u24`, and bonus units `x<level><letter>` with `extra:true` (e.g. `xa1a`, `xc2j`).
  - Bonus units sort after the core units of their level and show as "4.1", "4.2", ….
  - They never block progress: `coreOf`, `prevCore`, `nextIdx`, the level tests and certificates count core units only.
  - `lv` numbering is 1=A1, 2=A2, 3=B1, 4=B2, 5=C1, 6=C2.

## Adding content

Content is plain data. Always add new content with `.push(...)` blocks, never by editing old entries. Insert them at these points:

| What | Insert before this exact text |
|---|---|
| Course units (bonus units) | `\n];\n\nconst PLACEMENT=[` (append `,\n<units>` inside the COURSE array) |
| TOEIC / IELTS sets | `const XS={};   // attempts by section id` (`TOEIC_MORE.push({...})`, `IELTS_MORE.push({...})`) |
| Everything else | `\n/* ---------- routing ---------- */` (add a `/* ---------- round N content ---------- */` comment) |

Data shapes (copy an existing entry of the same kind before writing a new one):

- **Course units**: `{id,lv,extra:true,en,th,vocab,grammar,dialogue,practice,quiz,shadow,...}`.
  - Helpers: `v(en,th,pos,ex,exTh)`, `mc(q,options,answerIndex,why)`, `fill(q,"ans|alt",why,hint)` and `ord(sentence,thai,hint)`.
  - A word-order item with a second valid order: `Object.assign({alts:["other order"]},ord(...))`. The check ignores case and punctuation.
- **Podcasts**: `PODS.push({id:"p65",lv,title,th,cast:{A,B},lines:[["A",en,th]],qs:[{q,o,a,why}]})`.
- **Stories**: `STORIES.push({id,lv,title,th,paras,gloss,qs})`.
- **Grammar and vocabulary**:
  - `GRAM_X.push({id,title,th,g:{title,intro,head,rows,ex,mist},quiz})`, with 3 ex, 3 mist and 5 quiz items.
  - `DECKS.push({id,title,th,words:[[en,th,pos,ex,exTh]]})`, 20 words per deck.
- **Situations and phrases**:
  - `PHRASEBOOK.push({id,title,items:[[en,th]]})`.
  - `SCENES.push({id,title,th,role,student,opener})`.
  - `PHRASES.push([en,th,ex])`.
  - `DICT.find(d=>d.lv==="A1").items.push(...)`.
- **Error and word-form practice**:
  - `THAIGLISH.push({cat,wrong,right,why})`, where `cat` is one of ไวยากรณ์, คำศัพท์ที่ใช้ผิด, สำนวนแปลตรงจากไทย, คำถาม-คำตอบ, การออกเสียงและการสะกด.
  - `WFQ.push({q:"... ___ ...",o:[4],a,why})`.
- **Guided speaking**: `SPEAK.push({id:"sp25",lv,cat:"life"|"work"|"talk",title,en,th,items:[{th,q?,kw:[[en,th]],frame,en,alts?,free?,tip?}]})`, 10 items per topic. `th` says in Thai what to say (never the English); `frame` is `en` with the key words replaced by `___`; no digits in English fields; `en` at most 10 words (A1/A2), 14 (B1), 18 (B2). The learner works in BIM/drafting in Singapore, so work topics use that setting.
- **Other lists**: `STRESS`, `WFAM`, `IRREG`, `EMAILS` and `BADGES`. Grep the definition first.

Rules that past rounds enforced:

- IDs must be new. Grep `id:"<id>"` first.
- Vocabulary headwords must not already exist, whether in `v("word",` or in deck `["word","` entries.
- Multiple-choice items need exactly one defensible answer. Keep options unique and spread the answer positions evenly.
- Explanations (`why`, `w`) are in natural Thai.
- Podcast English lines contain no digits (TTS reads them oddly). Story glossed words must appear in the story text.
- IELTS fill answers must obey the word limit and appear verbatim in the transcript or passage. Put the verbatim form first and use `show` for digits.
- Hard-coded counts in UI text go stale. Prefer `X.length`, and check the Thai strings after adding emails and similar content.
- Do not put AI model names in content, code or commits.

Large rounds were done by parallel sub-agents, each writing one file (for example units, one exam set, or podcasts), validating it with a small node script, then merging with a Python script that uses the insertion points above.

## Testing

```bash
cd language-school/tests
npm install                        # installs playwright
npx playwright install chromium    # first time only
node run-all.js                    # prints ALL TESTS PASSED or the failures
```

- `exams.test.js` runs every objective exam section at full marks. Add the new section ids (`toeic-listening-N`, `toeic-reading-N`, `ielts-listening-N`, `ielts-reading-N`) to its `sections` list when you add a set.
- `new_pages.test.js` opens a list of recently added pages at 360px width. Edit its id lists to cover the round you add.
- Each test prints `errors: []` when there are no page errors. Screenshots go to `tests/out/`, which is git-ignored.

## Git

- Work on branch `claude/keen-volta-6ibcuu`.
- Commit messages describe the content added. Update `language-school/README.md` counts in the same commit.
