export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.$nuxt.hook('app:mounted', () => {
    document.addEventListener('click', () => null)
  })
})
