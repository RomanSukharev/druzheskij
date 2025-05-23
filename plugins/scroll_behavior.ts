export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.$nuxt.$router.options.scrollBehavior = () => undefined

  nuxtApp.vueApp.$nuxt.hook('app:mounted', () => {
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
  })
})
