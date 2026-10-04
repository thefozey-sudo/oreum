# Oreum on the PC, 1.4.0

`Oreum-1.4.0.bat` opens Oreum in a window of its own on Windows, with the
sentence questions the 1.3.0 installer does not have.

Save it anywhere you like and double-click it. To keep it to hand, right-click
it and choose **Send to -> Desktop (create shortcut)**. Windows may warn about
a downloaded script the first time: choose **More info -> Run anyway**, the
same warning the unsigned installer gets.

## What it is, and what it is not

It runs the same app your phone runs, in a desktop window, out of a browser
profile kept only for Oreum under `%LOCALAPPDATA%\Oreum\browser`. It installs
nothing, it changes nothing, and it leaves the Oreum you already have exactly
where it is - both can sit on the PC at once.

It is not the Windows build. **Gaming mode** - the always-on-top overlay that
keeps narrating while you play - lives in that build and is not here. Bringing
the sentence questions to it needs a rebuild from the app source, which this
repository does not carry.

## Keeping the progress you already have

The two apps keep their own progress, so carry it across once. Nothing below
deletes anything: an import merges, and a word you have on both sides keeps
whichever version was studied most recently.

1. **In the Oreum you have now**, open Settings and export your learning data.
   Keep that file somewhere safe - it is your backup as well as the thing you
   are about to import.
2. **Run `Oreum-1.4.0.bat`.**
3. In it, go to **More -> Transfer data -> Import**, and pick the file you
   just exported.

The home screen should then show the words you have already started.

If you use an Oreum account, signing in on both sides does the same job
without a file: **More -> Account -> Sign in**, then **Sync now**.

## Where your progress lives

In the profile folder, `%LOCALAPPDATA%\Oreum\browser`. Copy that folder
somewhere to back it up wholesale. Deleting it resets this copy of Oreum back
to a fresh start, so export from **More -> Transfer data** first.

The app caches itself on first run, so it opens and works without a
connection after that.
