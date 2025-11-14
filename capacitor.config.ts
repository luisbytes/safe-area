import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.luisbytes.safearea',
  appName: 'safe-area',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resizeOnFullScreen: false
    }
  }
};

export default config;
