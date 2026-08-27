import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.algermusic.app',
  appName: 'AlgerMusicPlayer',
  webDir: 'src/renderer/dist',
  android: {
    allowMixedContent: true
  }
};

export default config;
