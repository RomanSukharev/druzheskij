// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    BASE_URL: process.env.BASE_URL,
    COMPLEX_UID: process.env.COMPLEX_UID,
    RESOURCE_UID: process.env.RESOURCE_UID,
    SCOPES: process.env.SCOPES,
    REDIS_KEY: process.env.REDIS_KEY,
    REDIS_TTL: process.env.REDIS_TTL,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    public: {
      YM_COUNTER_ID: process.env.YM_COUNTER_ID,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  },

  css: ['@/assets/scss/index.scss', '@/assets/scss/variables.css', '@/assets/styles/main.css'],

  imports: {
    dirs: ['./helpers'],
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: () => 'common',
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                          @use "@/assets/scss/font_styles.scss" as *;
                          @use "@/assets/scss/variables.scss" as *; 
                          @use "@/assets/scss/btns_icon.scss" as *;
                          @use "@/assets/scss/btns.scss" as *;
                          @use "@/assets/scss/links.scss" as *;
                          @use "@/assets/scss/icons_svg.scss" as *;
                          @use "@/assets/styles/main.scss" as *;
                          `,
        },
      },
    },
  },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        /* redis connector options */
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
      },
    },
  },
})
