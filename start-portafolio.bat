@echo off
title Portafolio Julio - servidor local
cd /d "%~dp0"

echo ============================================
echo   Iniciando el portafolio en local...
echo ============================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo No se encontro Node.js / npm.
  echo Instala Node.js desde https://nodejs.org y vuelve a intentar.
  echo.
  pause
  exit /b
)

if not exist "node_modules" (
  echo Primera vez: instalando dependencias, esto puede tardar un par de minutos...
  echo.
  call npm install
  echo.
)

echo Abriendo el navegador en http://localhost:4321 ...
start "" cmd /c "timeout /t 4 >nul & start "" http://localhost:4321"

echo.
echo El servidor esta corriendo. Para cerrarlo, cierra esta ventana.
echo.
call npm run dev

pause
