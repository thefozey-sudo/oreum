@echo off
rem ---------------------------------------------------------------------
rem  Oreum 1.4.0 - update the installed Windows app
rem
rem  Swaps the app's code for the 1.4.0 build, which asks sentence questions
rem  in a Practice session rather than only word ones.
rem
rem  Your progress is not touched. It lives in a database of its own under
rem  %APPDATA%\korean-vocab-narrator, which this does not open, move or read;
rem  only the program's own code is replaced, and the copy it replaces is
rem  kept beside it so you can put it back.
rem ---------------------------------------------------------------------

setlocal EnableExtensions
title Oreum 1.4.0 update

set "SOURCE=%~dp0oreum-1.4.0-app.asar"
set "PF86=%ProgramFiles(x86)%"
set "TARGET="

echo.
echo   Oreum 1.4.0
echo   -----------
echo.

if not exist "%SOURCE%" (
  echo   oreum-1.4.0-app.asar is missing.
  echo.
  echo   It has to sit in the same folder as this file. Download both from
  echo   the same place and put them together, then run this again.
  goto :done
)

tasklist /FI "IMAGENAME eq korean-vocab-narrator.exe" 2>nul | find /I "korean-vocab-narrator.exe" >nul
if not errorlevel 1 (
  echo   Oreum is running. Close it first, then run this again.
  goto :done
)

call :find "%LOCALAPPDATA%\Programs"
if not defined TARGET call :find "%ProgramFiles%"
if not defined TARGET call :find "%PF86%"
if not defined TARGET call :find "%LOCALAPPDATA%"

if not defined TARGET (
  echo   Could not find Oreum on this PC.
  echo.
  echo   It looks for korean-vocab-narrator.exe under Program Files and under
  echo   %%LOCALAPPDATA%%\Programs. If you installed it somewhere else, copy
  echo   oreum-1.4.0-app.asar into that folder's "resources" folder by hand,
  echo   over the file called app.asar, keeping a copy of the old one.
  goto :done
)

echo   Found: %TARGET%
echo.

if not exist "%TARGET%\resources\app.asar.1.3.0-backup" (
  copy /Y "%TARGET%\resources\app.asar" "%TARGET%\resources\app.asar.1.3.0-backup" >nul
  if errorlevel 1 (
    echo   Could not write to the install folder.
    echo   Right-click this file and choose "Run as administrator", then try again.
    goto :done
  )
  echo   Kept the 1.3.0 app as app.asar.1.3.0-backup
) else (
  echo   A 1.3.0 backup is already there, leaving it alone
)

copy /Y "%SOURCE%" "%TARGET%\resources\app.asar" >nul
if errorlevel 1 (
  echo   Could not replace the app. Nothing has changed.
  echo   Right-click this file and choose "Run as administrator", then try again.
  goto :done
)

echo   Updated to 1.4.0.
echo.
echo   Open Oreum and go to Practice. In a session of 16 questions, three or
echo   four of them are now sentences: put the words in order, which particle
echo   fits, what does this mean. Everything you had learned is still there.
echo.
echo   To go back: delete app.asar in the resources folder and rename
echo   app.asar.1.3.0-backup to app.asar.
goto :done

:find
if not exist "%~1" exit /b
for /d %%D in ("%~1\*") do (
  if not defined TARGET if exist "%%~fD\korean-vocab-narrator.exe" if exist "%%~fD\resources\app.asar" set "TARGET=%%~fD"
)
exit /b

:done
echo.
pause
endlocal
