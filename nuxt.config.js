export default defineNuxtConfig({
  css: ['~/styles/main.css'],
  modules: [
    '@nuxtjs/sanity',
    // '@pinia/nuxt',
  ],
  buildModules: ['@nuxtjs/sanity/module'],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
