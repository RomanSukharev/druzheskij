<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

import type { ISwipeArg } from '@/plugins/swipe'

interface ICardGalleryImg {
  src: string
  title: string
}

export interface ICardGalleryProps {
  img_list: ICardGalleryImg[]
  notSwipe?: boolean
}

interface _ICardGallery {
  src: string
  alt: string
  srcset: string
  is_active: boolean
  is_loaded: boolean
}

var emit = defineEmits(['clickImg'])
var props = defineProps<ICardGalleryProps>()
var imgs = ref<_ICardGallery[]>([])

var setImgs = () => {
  imgs.value = props.img_list.map((i, idx) => ({
    src: i.src,
    alt: i.title,
    srcset:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=',
    is_active: idx === 0,
    is_loaded: false,
  }))
}

setImgs()

var node_CardGallery = ref()
var is_loader_show = computed(() => !!imgs.value.find((i) => i.is_active && !i.is_loaded))

var label_active_img = computed(() => imgs.value.find((i) => i.is_active)?.alt || '')

var setImg = (idx: number) => {
  //уже отображается эта картинка
  if (!imgs.value?.[idx] || (imgs.value[idx].is_active && imgs.value[idx].is_loaded)) {
    return
  }

  imgs.value.forEach((i) => (i.is_active = false))
  imgs.value[idx].is_active = true

  if (!imgs.value[idx].is_loaded) {
    var img = document.createElement('img')
    img.src = imgs.value[idx].src
    img.onload = () => {
      imgs.value[idx].is_loaded = true
      imgs.value[idx].srcset = imgs.value[idx].src
    }

    return
  }

  imgs.value[idx].is_active = true
}

var setLeftImg = () => {
  var img_active_idx = imgs.value.findIndex((i) => i.is_active)
  var next_img_idx = img_active_idx === 0 ? imgs.value.length - 1 : img_active_idx - 1
  setImg(next_img_idx)
}

var setRightImg = () => {
  var img_active_idx = imgs.value.findIndex((i) => i.is_active)
  var next_img_idx = img_active_idx === imgs.value.length - 1 ? 0 : img_active_idx + 1
  setImg(next_img_idx)
}

var swipe_cb: ISwipeArg = {
  right: setLeftImg,
  left: setRightImg,
  notSwipe: props.notSwipe,
}

var handlerClickImg = () => {
  var img_idx_active = imgs.value.findIndex((i) => i.is_active)
  emit('clickImg', img_idx_active)
}

var timer_download: NodeJS.Timeout | null = null

var setObservers = () => {
  var observer_settings = {
    threshold: 0,
    rootMargin: '800px 0px 800px 0px',
  }

  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entri) => {
      if (entri.isIntersecting) {
        timer_download = setTimeout(() => {
          setImg(0)
          observer.unobserve(entri.target)
        }, 300)
      } else {
        clearTimeout(timer_download as NodeJS.Timeout)
        timer_download = null
      }
    })
  }, observer_settings)

  observer.observe(node_CardGallery.value)
}

watch(
  () => props.img_list,
  () => {
    setImgs()
    setObservers()
  }
)

onMounted(setObservers)
</script>

<template>
  <div class="CardGallery" ref="node_CardGallery">
    <div class="CardGallery__imgsBox" @click="handlerClickImg">
      <img
        itemprop="image"
        class="CardGallery__img"
        :class="{ CardGallery__img_show: img.is_active && img.is_loaded }"
        v-for="img of imgs"
        :src="img.src"
        :alt="img.alt"
        height="300"
        :srcset="img.srcset"
      />

      <div class="CardGallery__loaderBox" v-if="is_loader_show">
        <h4>Загрузка...</h4>
      </div>

      <div class="CardGallery__hoverToggleBox">
        <div
          @pointerenter="!notSwipe && setImg(idx)"
          class="CardGallery__hoverToggleItem"
          v-for="(img, idx) in imgs"
        ></div>
      </div>

      <div class="CardGallery__swiper" v-swipe="swipe_cb"></div>
    </div>

    <div class="CardGallery__toggleBox" v-if="imgs.length > 1 && !notSwipe">
      <div
        class="CardGallery__toggleItem"
        :class="{ CardGallery__toggleItem_active: img.is_active }"
        v-for="img in imgs"
      ></div>
    </div>

    <div class="CardGallery__labelActiveImg">{{ label_active_img }}</div>
  </div>
</template>

<style lang="scss">
.CardGallery {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  gap: 20px;
  flex-direction: column;
}

.CardGallery__imgsBox {
  position: relative;
  height: 100%;
  cursor: zoom-in;
}

.CardGallery__img {
  position: absolute;
  width: 100%;
  height: 100%;

  object-fit: scale-down;
  transition: opacity 400ms;
  opacity: 0;
  z-index: 1;
}

.CardGallery__img_show {
  opacity: 1;
}

.CardGallery__loaderBox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: CardGallery__loaderBox 400ms;
}

@keyframes CardGallery__loaderBox {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.CardGallery__toggleBox {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.CardGallery__toggleItem {
  width: 100%;
  height: 1px;
  border-radius: 2px;
  background: $c_border_light;
  transition: background 300ms ease-in-out;
}

.CardGallery__toggleItem_active {
  background: $c_primary;
  height: 2px;
}

.CardGallery__hoverToggleBox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
}

.CardGallery__hoverToggleItem {
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
}

.CardGallery__swiper {
  display: none;
}

.CardGallery__labelActiveImg {
  @include setFontStyle9();
  text-align: center;
  color: #586267;
}

@media screen and (max-width: 1170px) {
  .CardGallery__hoverToggleBox {
    display: none;
  }

  .CardGallery__swiper {
    position: absolute;
    inset: 0;
    display: block;
    z-index: 1;
  }
}
</style>
