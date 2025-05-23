<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import type { IPopupFormProps } from '@/components/PopupForm.vue'
import type { IPopupPromoProps } from '@/components/PopupPromo.vue'
import type { IPopupBlockProps } from '@/components/PopupBlock.vue'
import type { IPopupNotifyProps } from '@/components/PopupNotify.vue'
import type { IPopupNotifyPromoProps } from '@/components/PopupNotifyPromo.vue'
import type { IPopupGalleryProps } from '@/components/PopupGallery.vue'
import type { IPopupVideoPlayerProps } from '@/components/Popup/VideoPlayer/PopupVideoPlayer.vue'
import type { IPopupCalcProps } from '@/components/Popup/PopupCalc.vue'

var config = useRuntimeConfig()
useHead({
  meta: [
    {
      name: 'yandex-verification',
      content: '4f276899de220211',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
    },
    {
      name: 'description',
      content:
        'Продажа новых квартир в жилом комплексе на Московском тракте по ценам застройщика. Узнайте на сайте о планировках в новостройке.',
    },
    {
      name: 'keywords',
      content: 'Застройщик, официальный сайт, новостройки, продажа квартир, Дружеский',
    },
    {
      property: 'og:url',
      content: 'https://xn--d1accjfe3bkp.xn--p1ai',
    },
    {
      property: 'og:title',
      content: 'ЖК «Дружеский» — старт продаж новых квартир от ПСК Дом девелопмент в Тюмени',
    },
    {
      property: 'og:description',
      content:
        'Дружеский — новый жилой комплекс на Московском тракте в Тюмени. Официальный сайт застройщика ПСК Дом девелопмент с информацией о планировках и квартирах.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/img/og_img.png',
    },
    {
      property: 'og:site_name',
      content: 'ЖК Дружеский - Тюмень',
    },
  ],

  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: 'favicons/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: 'favicons/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: 'favicons/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: 'favicons/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: 'favicons/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: 'favicons/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: 'favicons/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: 'favicons/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: 'favicons/apple-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: 'favicons/android-icon-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: 'favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: 'favicons/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: 'favicons/favicon-16x16.png',
    },
    {
      rel: 'canonical',
      href: 'https://xn--d1accjfe3bkp.xn--p1ai',
    },
  ],
  script: [
    // ----------------------------------- Google reCAPTCHA (start) -----------------------------------
    {
      tagPosition: 'head',
      src: `https://www.google.com/recaptcha/api.js?render=${config.public.RECAPTCHA_SITE_KEY}`,
    },
    // ----------------------------------- Google reCAPTCHA  (end) -----------------------------------
    // ----------------------------------- Yandex Metrika (start) -----------------------------------
    {
      tagPosition: 'head',
      innerHTML: `
        (function (m, e, t, r, i, k, a) {
          m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
          m[i].l = 1 * new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) {
              return;
            }
          }
          (k = e.createElement(t)),
            (a = e.getElementsByTagName(t)[0]),
            (k.async = 1),
            (k.src = r),
            a.parentNode.insertBefore(k, a);
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${config.public.YM_COUNTER_ID}, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor:true
        });
      `,
    },
    // ------------------------------------ Yandex Metrika (end) ------------------------------------

    // -------------------------------- Varioqub experiments (start) ---------------------------------
    {
      tagPosition: 'head',
      innerHTML: `
        (function(e, x, pe, r, i, me, nt){
        e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
        me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],nt.parentNode.insertBefore(me,nt)})
        (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
        ymab('metrika.94643182', 'init'/*, {clientFeatures}, {callback}*/);
      `,
    },
    // ---------------------------------- Varioqub experiments (end) ---------------------------------

    // -------------------------------- Top.Mail.Ru counter (start) ---------------------------------
    {
      tagPosition: 'head',
      innerHTML: `
        var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({id: "3385102", type: "pageView", start: (new Date()).getTime()});
        (function (d, w, id) {
          if (d.getElementById(id)) return;
          var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
          ts.src = "https://top-fwz1.mail.ru/js/code.js";
          var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
          if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
        })(document, window, "tmr-code");
      `,
    },
    // ---------------------------------- Top.Mail.Ru counter (end) ---------------------------------

    // -------------------------------- Pixel (start) ---------------------------------
    {
      tagPosition: 'head',
      innerHTML: `
      (function (d, w) {
        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://qoopler.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
            n.parentNode.insertBefore(s, n);
      })(document, window);
      `,
    },
    // ---------------------------------- Pixel (end) ---------------------------------

    // -------------------------------------- CoMagic (start) ---------------------------------------
    {
      src: 'https://app.comagic.ru/static/cs.min.js?k=gg_GmTbv3xKT941NyGRV8nFLqPG700z_',
      async: true,
    },
    // --------------------------------------- CoMagic (end) ----------------------------------------
    // ------------------------------------ Carrot Quest (start) ------------------------------------
    // {
    //   tagPosition: 'bodyClose',
    //   innerHTML: `
    //     !function(){
    //         function t(t,e){
    //             return function(){
    //                 window.carrotquestasync.push(t,arguments)
    //             }
    //         }
    //         if("undefined"==typeof carrotquest){
    //             var e=document.createElement("script");
    //             e.type="text/javascript",
    //             e.async=!0,
    //             e.src="//cdn.carrotquest.app/api.min.js",
    //             document.getElementsByTagName("head")[0].appendChild(e),
    //             window.carrotquest={},
    //             window.carrotquestasync=[],
    //             carrotquest.settings={messenger_collapsed_color : "FF7060"};
    //             for(var n=["connect","track","identify","auth","oth","onReady","addCallback","removeCallback","trackMessageInteraction"],a=0;a<n.length;a++)carrotquest[n[a]]=t(n[a])
    //         }
    //     }();
    //     var config = {
    //         settings: {
    //                 messenger_collapsed_color : "FF7060"
    //         }
    //     }
    //     carrotquest.connect("31018-288e46fceffb08d84210598d7f",config);
    //   `,
    // },
    // {
    //   tagPosition: 'bodyClose',
    //   innerHTML: `
    //     carrotquest.addCallback('messenger_opened', function(data) {
    //       yaCounter63008167.reachGoal('ChatOpened');
    //     });
    //     // начал диалог
    //     carrotquest.addCallback('conversation_started', function(data) {
    //         yaCounter63008167.reachGoal('ConversationStarted');
    //     });
    //   `,
    // },
    // ------------------------------------- Carrot Quest (end) -------------------------------------
    // -------------------------------------- От Ботов (start) --------------------------------------
    {
      tagPosition: 'head',
      type: 'text/javascript',
      innerHTML: `(function ab(){ var request = new XMLHttpRequest(); request.open('GET', "https://scripts.botfaqtor.ru/one/42361", false); request.send(); if(request.status == 200) eval(request.responseText); })()`,
    },
    // --------------------------------------- От Ботов (end) ---------------------------------------
    // ------------------------------ Programmatic.ru counter (start) -------------------------------
    // {
    //   tagPosition: "bodyClose",
    //   src: "https://counter.programmatic.ru/generator/дружеский_рф.js",
    //   async: true,
    // },
    // ------------------------------- Programmatic.ru counter (end) --------------------------------
    // ------------------------------------- VK Player (start) --------------------------------------
    {
      tagPosition: 'head',
      src: `https://vk.com/js/api/videoplayer.js`,
    },

    // -------------------------------------- VK Player (end) ---------------------------------------
    // -------------------------------------- IDACHAT (start) ---------------------------------------
    {
      tagPosition: 'head',
      defer: true,
      type: 'module',
      innerHTML: `
        import {init} from 'https://app.idachat.ru/widget-idachat.js';

        try {
          init('9822018b-5059-41d5-bd5b-0c97551b8eba');
        } catch (error) {
          console.error("Error initializing idachat: ", error);
      }
      `,
    },
    // --------------------------------------- IDACHAT (end) ----------------------------------------
  ],
})

var titleText = {
  visible: 'ЖК «Дружеский» в Тюмени, купить новые квартиры от ПСК Дом девелопмент',
  hidden: 'Мы соскучились 😭',
}

var is_loading = useState<boolean>("is_loading", () => false); //prettier-ignore
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore
var popup_calc_props = useState<IPopupCalcProps | null>("popup_calc_props", () => null); //prettier-ignore
var popup_block_props = useState<IPopupBlockProps | null>("popup_block_props", () => null) //prettier-ignore
var popup_notify_props = useState<IPopupNotifyProps | null>("popup_notify_props", () => null); //prettier-ignore
var popup_notify_promo_props = useState<IPopupNotifyPromoProps | null>("popup_notify_promo_props", () => null); //prettier-ignore
var popup_gallery_props = useState<IPopupGalleryProps | null>("popup_gallery_props", () => null); //prettier-ignore
var popup_promo_props = useState<IPopupPromoProps | null>("popup_promo_props", () => null); //prettier-ignore
var popup_video_player_props = useState<IPopupVideoPlayerProps | null>("popup_video_player_props", () => null); //prettier-ignore

var title = ref<string>(titleText.visible)
var text = computed<string>(() => title.value)

var visibilityChange = () => {
  title.value = titleText[document.visibilityState]
}

onBeforeMount(() => {
  gsap.registerPlugin(ScrollTrigger)
})

onMounted(() => {
  window.addEventListener('visibilitychange', visibilityChange)
  useUtm()
  setCookies()
  setTimeout(() => {
    ymReachGoal('more-than-30-second')
  }, 30000)

  new ResizeObserver(
    debounce(() => {
      ScrollTrigger.refresh()
    }, 500)
  ).observe(document.body)

  setEventOpenFormGetCall(popup_form_props)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', visibilityChange)
})
</script>

<template>
  <Head>
    <Title>{{ text }}</Title>
  </Head>
  <div class="default">
    <div class="default__upContent">
      <PskHeader />
      <main id="main">
        <slot />
      </main>
    </div>
    <div class="default__downContent">
      <PskFooter />
    </div>
  </div>

  <PskLoader v-if="is_loading" />
  <PopupForm v-if="popup_form_props" v-bind="popup_form_props" @close="popup_form_props = null" />
  <PopupCalc v-if="popup_calc_props" @close="popup_calc_props = null" v-bind="popup_calc_props" />
  <PopupBlock v-if="popup_block_props" v-bind="popup_block_props" @close="popup_block_props = null" />
  <PopupPromo v-if="popup_promo_props" v-bind="popup_promo_props" @close="popup_promo_props = null" />
  <PopupNotify v-if="popup_notify_props" v-bind="popup_notify_props" @close="popup_notify_props = null" />
  <PopupGallery v-if="popup_gallery_props" v-bind="popup_gallery_props" @close="popup_gallery_props = null" />

  <PopupNotifyPromo
    v-if="popup_notify_promo_props"
    v-bind="popup_notify_promo_props"
    @close="popup_notify_promo_props = null"
  />

  <PopupVideoPlayer
    v-if="popup_video_player_props"
    v-bind="popup_video_player_props"
    @close="popup_video_player_props = null"
  />

  <DevOnly>
    <DevGrid />
  </DevOnly>
</template>

<style lang="scss">
.default {
  min-height: calc(100vh - var(--header_height));
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  top: var(--header_height);
}

.grecaptcha-badge {
  display: none;
}
</style>
