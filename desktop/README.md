# Oreum on the PC, 1.4.0

Two separate things live here. The **updater** is the one you want if Oreum is
already installed on this PC.

## Update Oreum to 1.4.0 (the installed Windows app)

`Update Oreum to 1.4.0.bat`, with `oreum-1.4.0-app.asar` beside it in the same
folder. Close Oreum, then double-click the .bat.

It finds the installed app, keeps its 1.3.0 code as `app.asar.1.3.0-backup`,
and puts 1.4.0 in its place. **Your progress is not touched** — it lives in a
database of its own under `%APPDATA%\korean-vocab-narrator`, which the updater
never opens. Nothing is exported, imported or moved; the same app keeps
reading the same database.

Windows may warn about a downloaded script the first time: choose **More
info -> Run anyway**. If it says it cannot write to the install folder,
right-click it and choose **Run as administrator**.

What changes, in two places.

**Practice** now asks sentence questions as well as word ones — one question
in five, chosen from the words that session is already working on. Put the
words in order, which particle fits, what does this mean. Answering one
credits every word in it, so sentences move the same progress words do.

**Smart Session** now reaches its sentence and grammar questions straight
away. It had them built all along, but every route to them waited until
Hangul reading passed 45%, and below that a session quietly contained no
sentence at all — the planner recorded "Hangul first" as the reason, where
only the developer log would show it. That wait is gone. On the same
progress, a session that asked 0 sentence questions now asks 13 and
introduces a grammar point, with the Hangul drills still in the mix.

The trade is the one the wait was there for: a sentence can now come up while
the alphabet is still new. Hangul drills carry on either way, so it closes on
its own.

Gaming mode, the vocabulary, the stages and everything else are untouched.

To undo it: delete `app.asar` in the install folder's `resources` folder and
rename `app.asar.1.3.0-backup` back to `app.asar`.

## Oreum 1.4.0 in a window (no install)

`Oreum-1.4.0.bat` opens the web app — the same one the phone runs — in a
window of its own through Chrome or Edge, out of a browser profile kept only
for Oreum under `%LOCALAPPDATA%\Oreum\browser`. It installs nothing and leaves
an existing Oreum install alone.

It is not the Windows build: **gaming mode** and the Smart Session belong
there and are not in it. Its progress is its own, separate from the installed
app's. To carry progress into it, export your learning data from the installed
app's Settings and import it under **More -> Transfer data**; that import
merges, and a word you have on both sides keeps whichever version was studied
most recently. An Oreum account signed in on both sides does the same job
without a file.

Save either .bat anywhere; right-click and choose **Send to -> Desktop (create
shortcut)** to keep it to hand.
