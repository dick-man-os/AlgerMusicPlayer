import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.algermusic.standalone',
  appName: 'Alger Standalone',
  webDir: 'out/renderer',

  server: {
    androidScheme: 'http',
    cleartext: true
  },

  android: {
    allowMixedContent: true
  },

  plugins: {
    SystemBars: {
      insetsHandling: 'disable',
      style: 'DARK',
      hidden: false
    },

    StatusBar: {
      backgroundColor: '#00000000',
      style: 'dark',
      overlaysWebView: true,
      androidOverlaysWebView: true
    },

    SplashScreen: {
      launchAutoHide: false,
      showSpinner: false
    },

    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: '#00000000',
      statusBarContent: 'light',
      navigationBarColor: '#00000000',
      navigationBarContent: 'light',
      offset: 0
    },

    Keyboard: {
      resize: 'body',
      style: 'DARK'
    },

    BackgroundRunner: {
      label: 'com.algermusic.standalone.background.task',
      event: 'myCustomEvent',
      repeat: true,
      interval: 15,
      autoStart: true
    }
  }
};

export default config;
