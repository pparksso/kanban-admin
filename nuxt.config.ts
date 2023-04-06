// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  app: {
    head: {
      charset: 'utf-8',
      title: 'kanbanList-admin',
      htmlAttrs: {
        lang: 'ko',
      },
    },
  },
  css: ['@/assets/styles/reset.css', '@/assets/styles/global.css'],
  piniaPersistedstate: {
    storage: 'localStorage',
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.firebaseKey,
      FB_PROJECT_ID: process.env.projectId,
      FB_AUTH_DOMAIN: process.env.authDomain,
      FB_STORAGE_BUCKET: process.env.storageBucket,
      FB_MESSAGING_SENDER_ID: process.env.messagingSenderId,
      FB_APP_ID: process.env.appId,
      // FB_MEASUREMENT_ID:
    },
  },
});
