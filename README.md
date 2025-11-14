# Minimal reproduction — Issue: capacitor-community/safe-area#77

This repository contains a minimal reproduction for the issue https://github.com/capacitor-community/safe-area/issues/77.

Quick summary
- The Android `MainActivity` was configured to enable edge-to-edge mode following the plugin documentation.

Environment used for testing
- macOS (development)
- Ionic / Capacitor (this project)
- Android Emulator 14 (API 34) in Android Studio
- Android WebView version > 140

Steps to reproduce
1. Install project dependencies (this repo uses pnpm; if you use npm or yarn adapt the commands):

```bash
pnpm install
```

2. Run the app on the emulator:

```bash
ionic cap run android
```
