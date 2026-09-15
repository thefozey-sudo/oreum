import{b as p,I as h,A as c,a as v,R as u}from"./version-CHjqmQxk.js";const t={version:v,name:c,installer:h,sizeNote:"about 110 MB",published:!u.includes("YOUR-GITHUB-USERNAME"),downloadUrl:null,releasesUrl:null,releasedAt:"",webAppUrl:"./app/"},m=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,g=()=>/Android/.test(navigator.userAgent),w=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;function s(e){return e.replace(/[&<>"']/g,a=>a==="&"?"&amp;":a==="<"?"&lt;":a===">"?"&gt;":a==='"'?"&quot;":"&#39;")}function r(e){const a=m(),o=g();document.body.classList.toggle("is-phone",a||o);const i=location.protocol==="file:"?null:e.webAppUrl,l=e.published?'<a class="btn primary" href="'+s(e.downloadUrl??"#")+'" download>Download for Windows</a><p class="btn-note">'+s(e.installer)+" · "+s(e.sizeNote)+" · Windows 10 and 11, 64-bit</p>":'<span class="btn disabled">Download for Windows</span><p class="btn-note">Not published yet. Build the installer, upload it to a GitHub release, then set <code>RELEASE_REPO</code> in <code>src/shared/version.ts</code>.</p>';document.getElementById("site").innerHTML=`
    <header class="top">
      <div class="wrap top-inner">
        <div class="brand">
          <img src="./icons/icon-192.png" alt="" />
          <span>${s(e.name)}</span>
        </div>
        <div class="top-spacer"></div>
        <a class="top-link" href="#windows">Windows</a>
        <a class="top-link" href="#phone">Phone</a>
        <a class="top-link" href="#faq">FAQ</a>
      </div>
    </header>

    <div class="wrap">
      <div class="hero">
        <img class="hero-icon" src="./icons/icon-512.png" alt="" />
        <h1>Learn Korean while you play</h1>
        <p class="lede">${s(p)}</p>
        <div class="hangul-strip ko">
          <span>먹다</span><span>학교</span><span>친구</span><span>물</span><span>감사합니다</span>
        </div>
        <p class="version-line">
          Version ${s(e.version)}${e.releasedAt?" · "+s(e.releasedAt):""}
        </p>
      </div>

      ${w()?'<div class="standalone-note">You already have the app installed. Tap “Open the app” below to carry on.</div>':""}

      <div class="platforms">
        <div class="platform win" id="windows">
          <span class="badge">Windows PC</span>
          <h2>The full desktop app</h2>
          <p class="sub">Everything, plus the second-monitor Gaming Mode.</p>
          <ul>
            <li>Real Korean text-to-speech through your Windows voices</li>
            <li>Gaming Mode narrates on a second monitor without stealing focus from your game</li>
            <li>Flashcards, listening, sentences, Hangul and grammar</li>
            <li>Progress stored in your user profile, so updates never erase it</li>
          </ul>
          <div class="grow"></div>
          ${l}
        </div>

        <div class="platform ios" id="phone">
          <span class="badge">iPhone &amp; Android</span>
          <h2>The same app on your phone</h2>
          <p class="sub">Add it to your Home Screen. No app store, no account.</p>
          <ul>
            <li>Opens full screen with its own icon, like a normal app</li>
            <li>Works offline once it has loaded</li>
            <li>Bottom tabs and big tap targets, built for one hand</li>
            <li>Move your progress across with a single backup file</li>
          </ul>
          <div class="grow"></div>
          ${i?'<a class="btn primary" href="'+s(i)+'">Open the app</a><p class="btn-note">'+(a?"Then follow the three steps below to install it.":o?"Then tap the ⋮ menu and choose Install app.":"Open this page on your phone to install it there.")+"</p>":'<span class="btn disabled">Open the app</span><p class="btn-note">The phone app needs this page to be hosted online. This copy is a local download folder, so only the Windows install works from here.</p>'}
        </div>
      </div>
    </div>

    <section>
      <div class="wrap">
        <h2 class="title">Add it to your phone’s Home Screen</h2>
        <p class="title-sub">
          The browser installs it, so there is nothing to download. On iPhone use Safari — Chrome
          on iPhone cannot add to the Home Screen.
        </p>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Open the app in Safari</h3>
            <p>Tap “Open the app” above. The address bar should still say this site.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Tap the Share button</h3>
            <p>The square with an arrow pointing up, in the bar at the bottom of Safari.</p>
            <span class="ios-icon">${b()} Share</span>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Choose “Add to Home Screen”</h3>
            <p>Scroll down the share sheet, tap it, then tap Add. The icon appears on your Home Screen.</p>
            <span class="ios-icon">${y()} Add to Home Screen</span>
          </div>
        </div>
        <p class="android-note">
          <strong>On Android:</strong> open the app in Chrome, tap the ⋮ menu and choose
          <em>Install app</em>, or <em>Add to Home screen</em> on older versions. It works the same
          way there, with less testing behind it.
        </p>
      </div>
    </section>

    <section>
      <div class="wrap showcase">
        <div>
          <h2 class="title">One set of words, five ways to learn them</h2>
          <p class="title-sub">
            A word you add appears in flashcards, listening questions, sentence practice and the
            gaming narration. Reading it, hearing it and using it in a sentence are tracked
            separately, so “I know it” means you can actually do all three.
          </p>
          <div class="window">
            <div class="window-bar">
              <i></i><i></i><i></i>
              <span class="name">${s(e.name)} — Gaming Mode</span>
            </div>
            <div class="window-body">
              <div class="big ko">감사합니다</div>
              <div class="big-pron">[gam-sa-ham-ni-da]</div>
              <div class="big-mean">thank you</div>
              <div class="window-controls">
                <span>◀ Previous</span><span>❚❚ Pause</span><span>Next ▶</span>
              </div>
            </div>
          </div>
        </div>

        <div class="phone">
          <div class="phone-notch"><span></span></div>
          <div class="phone-screen">
            <h4>Learn</h4>
            <p class="sub">4 / 12</p>
            <div class="mock-card">
              <div class="word ko">학교</div>
              <div class="pron">[hak-kkyo]</div>
              <div class="mean">What does this mean?</div>
            </div>
            <div class="mock-choice right">school</div>
            <div class="mock-choice">friend</div>
            <div class="mock-choice">water</div>
            <div class="mock-choice">teacher</div>
            <div class="mock-tabs">
              <span>Home</span><span class="on">Learn</span><span>Review</span><span>Words</span><span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <h2 class="title">What is in it</h2>
        <p class="title-sub">Built around one vocabulary list that everything else draws on.</p>
        <div class="features">
          ${n("🎧","Gaming Mode","A second-monitor window that reads Korean, then English, then Korean again, at whatever pace you set. It never takes keyboard focus, so your game keeps every key press.")}
          ${n("🗣️","A real Korean voice","Korean is spoken by a Korean voice and English by an English one. The bracketed reading is a visual aid only and is never sent to the speech engine.")}
          ${n("🧠","Per-skill progress","Reading, listening and sentence use are tracked separately. Hearing a word while gaming counts as exposure, never as knowing it.")}
          ${n("📝","Sentences that are real Korean","Curated sentences with particle-by-particle explanations, not machine-assembled strings that happen to parse.")}
          ${n("가","Hangul from scratch","Letter groups, syllable building and reading practice, with the alphabet quizzed by the letters you keep missing.")}
          ${n("📚","Grammar lessons","Short lessons on topic, subject and object marking, location, politeness levels and more, each linked to sentences that use them.")}
          ${n("📥","Import your own lists","Paste from anywhere. Arrows, dashes, tabs, commas and Quizlet exports are all detected, and a reading in brackets is picked up on its own.")}
          ${n("💾","Your data stays yours","Everything is stored on your own machine. One JSON file exports the lot and imports it on the other device.")}
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="wrap">
        <h2 class="title">Questions</h2>
        <div class="faq-item">
          <h3>Will installing an update wipe my progress?</h3>
          <p>
            No. Your vocabulary and progress live in your Windows user profile, not in the
            installation folder, so installing a new version over the old one leaves them alone.
          </p>
        </div>
        <div class="faq-item">
          <h3>Does my iPhone progress sync with my PC?</h3>
          <p>
            Not automatically yet. Each device keeps its own copy, and you move progress between
            them by exporting a backup file on one and importing it on the other. Importing merges
            rather than overwrites, and it never deletes anything.
          </p>
        </div>
        <div class="faq-item">
          <h3>Does the iPhone version speak Korean?</h3>
          <p>
            It uses the voices already on your phone. If you have never used Korean on the device
            there may be no Korean voice installed, and the app says so plainly rather than failing
            silently. Adding a Korean keyboard under Settings, General, Keyboard usually brings the
            voice with it.
          </p>
        </div>
        <div class="faq-item">
          <h3>Is Gaming Mode on the phone?</h3>
          <p>
            No. It is a Windows feature, because it depends on a second monitor and on speaking in
            the background while another application holds focus. Phone browsers stop a web app
            speaking once it is not on screen.
          </p>
        </div>
        <div class="faq-item">
          <h3>Why does Windows warn me about the installer?</h3>
          <p>
            The build is not code-signed, so SmartScreen shows a warning for any new publisher.
            Choose More info, then Run anyway. Signing needs a paid certificate.
          </p>
        </div>
        <div class="faq-item">
          <h3>Is there an Android version?</h3>
          <p>
            The same web app installs from Chrome on Android, through the ⋮ menu. There is no
            separate Android build, and the phone app has been tested far more on iPhone, so treat
            Android as working but less travelled.
          </p>
        </div>
      </div>
    </section>

    <div class="wrap">
      <footer>
        <span>${s(e.name)} · version ${s(e.version)}</span>
        <span class="top-spacer"></span>
        ${e.releasesUrl?'<a href="'+s(e.releasesUrl)+'">All releases</a>':""}
        ${i?'<a href="'+s(i)+'">Open the web app</a>':""}
      </footer>
    </div>
  `}function n(e,a,o){return'<div class="feature"><span class="glyph ko">'+e+"</span><h3>"+s(a)+"</h3><p>"+s(o)+"</p></div>"}function b(){return'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3.5"/><path d="M8.5 7 12 3.5 15.5 7"/><path d="M6 11.5H4.5v9h15v-9H18"/></svg>'}function y(){return'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8.5v7M8.5 12h7"/></svg>'}const d=window.__VERSION_INFO__;d?r({...t,...d}):(r(t),fetch("./version.json",{cache:"no-cache"}).then(e=>e.ok?e.json():null).then(e=>{e&&e.version&&r({...t,...e})}).catch(()=>{}));
