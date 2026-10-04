@echo off
rem ---------------------------------------------------------------------
rem  Oreum 1.4.0 - desktop launcher
rem
rem  Opens Oreum in a window of its own, using a browser profile kept only
rem  for Oreum, so what you learn is stored on this PC and nothing you do
rem  in your normal browsing can clear it.
rem
rem  This is the web app running on the desktop. It has the sentence
rem  questions that 1.3.0 does not; it does not have gaming mode, which
rem  belongs to the Windows build. It installs nothing and does not touch
rem  the copy of Oreum you already have - see README.md for how to carry
rem  your progress across.
rem ---------------------------------------------------------------------

setlocal
title Oreum

set "OREUM_URL=https://thefozey-sudo.github.io/oreum/app/"
set "OREUM_DATA=%LOCALAPPDATA%\Oreum\browser"

rem Chrome if it is installed, otherwise Edge, which is on every Windows
rem 10 and 11. Both are Chromium, so the app behaves the same in either.
set "BROWSER="
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" set "BROWSER=%LocalAppData%\Google\Chrome\Application\chrome.exe"
if not defined BROWSER if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "BROWSER=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not defined BROWSER if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "BROWSER=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not defined BROWSER if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "BROWSER=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not defined BROWSER if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "BROWSER=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"

if not defined BROWSER (
  echo Could not find Chrome or Edge on this PC, so Oreum will open in your
  echo default browser instead. It still works and still saves what you learn,
  echo but in that browser's own storage rather than in a profile of its own.
  echo.
  start "" "%OREUM_URL%"
  timeout /t 6 >nul
  exit /b 0
)

if not exist "%OREUM_DATA%" mkdir "%OREUM_DATA%" >nul 2>&1

start "" "%BROWSER%" --app="%OREUM_URL%" --user-data-dir="%OREUM_DATA%" --window-size=430,940 --no-first-run --no-default-browser-check
exit /b 0
