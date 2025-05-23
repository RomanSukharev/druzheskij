<script setup lang="ts">
import type { ISwipeArg } from '~/plugins/swipe'

interface IPopupGalleryImg {
  src: string
  title: string
}

export interface IPopupGalleryProps {
  imgs: IPopupGalleryImg[]
  current_img_idx?: number
}

var props = defineProps<IPopupGalleryProps>()

var img_list = ref(
  props.imgs.map((i) => ({
    src: i.src,
    alt: i.title,
    srcset:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=',
    is_active: false,
    is_loaded: false,
  }))
)

var is_loader_show = computed(() => !!img_list.value.find((i) => i.is_active && !i.is_loaded))

var setImg = (idx: number) => {
  //уже отображается эта картинка
  if (!img_list.value?.[idx] || img_list.value[idx].is_active) {
    return
  }

  img_list.value.forEach((i) => (i.is_active = false))
  img_list.value[idx].is_active = true

  if (!img_list.value[idx].is_loaded) {
    var img = document.createElement('img')
    img.src = img_list.value[idx].src
    img.onload = () => {
      img_list.value[idx].is_loaded = true
      img_list.value[idx].srcset = img_list.value[idx].src
    }

    return
  }

  img_list.value[idx].is_active = true
}

var setLeftImg = () => {
  var img_active_idx = img_list.value.findIndex((i) => i.is_active)
  var next_img_idx = img_active_idx === 0 ? img_list.value.length - 1 : img_active_idx - 1
  setImg(next_img_idx)
}

var setRightImg = () => {
  var img_active_idx = img_list.value.findIndex((i) => i.is_active)
  var next_img_idx = img_active_idx === img_list.value.length - 1 ? 0 : img_active_idx + 1
  setImg(next_img_idx)
}

var swipe_cb: ISwipeArg = {
  right: setLeftImg,
  left: setRightImg,
}

var keyHandler = (evt: KeyboardEvent) => {
  if (evt.key === 'ArrowRight') setRightImg()
  if (evt.key === 'ArrowLeft') setLeftImg()
}

onMounted(() => {
  setImg(props.current_img_idx || 0)
  document.addEventListener('keyup', keyHandler)
})
onUnmounted(() => {
  document.removeEventListener('keyup', keyHandler)
})
</script>

<template>
  <PopupCloseHOC :timeout="400">
    <template #default="{ is_popup_hidden, closePopup }">
      <div class="PopupGallery">
        <div
          class="PopupGallery__content"
          @click.self="closePopup"
          :class="{ PopupGallery__content_hidden: is_popup_hidden }"
        >
          <button class="PopupGallery__btnClose" @click="closePopup"></button>

          <button class="PopupGallery__btnSwitchLeft" @click="setLeftImg" v-if="img_list.length > 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <g clip-path="url(#clip0_3389_1428)">
                <path
                  d="M35.7851 20.2149L24 32L35.7851 43.7851"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="32" cy="32" r="31.5" transform="rotate(-180 32 32)" stroke="white" />
              </g>
              <defs>
                <clipPath id="clip0_3389_1428">
                  <rect width="64" height="64" fill="white" transform="matrix(-1 0 0 -1 64 64)" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button class="PopupGallery__btnSwitchRight" @click="setRightImg" v-if="img_list.length > 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <g clip-path="url(#clip0_3389_1249)">
                <path
                  d="M28.2149 43.7851L40 32L28.2149 20.2149"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="32" cy="32" r="31.5" stroke="white" />
              </g>
              <defs>
                <clipPath id="clip0_3389_1249">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <div class="PopupGallery__imgsBox">
            <img
              class="PopupGallery__img"
              :class="{ PopupGallery__img_show: img.is_active && img.is_loaded }"
              v-for="img of img_list"
              :src="img.src"
              :alt="img.alt"
              :srcset="img.srcset"
            />

            <div class="PopupGallery__loaderBox" v-if="is_loader_show">
              <h4>Загрузка...</h4>
            </div>
          </div>

          <div class="PopupGallery__toggleBox" v-if="img_list.length > 1">
            <div
              class="PopupGallery__toggleItem"
              :class="{ PopupGallery__toggleItem_active: img.is_active }"
              v-for="(img, idx) in img_list"
              @click="setImg(idx)"
            ></div>
          </div>

          <div class="PopupGallery__swiper" v-swipe="swipe_cb" v-if="img_list.length > 1"></div>
        </div>
      </div>
    </template>
  </PopupCloseHOC>
</template>

<style lang="scss">
.PopupGallery {
  position: fixed;
  inset: 0;
  z-index: 5000;
}

.PopupGallery__content {
  position: relative;
  height: 100%;
  animation: PopupGallery__content 400ms;
  // background-color: rgba(0,0,0,.8);
  // background-color: #b7b7b7;
}

@keyframes PopupGallery__content {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

.PopupGallery__content_hidden {
  animation: PopupGallery__content_hidden 400ms;
  transform: translateX(100%);
}

@keyframes PopupGallery__content_hidden {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

.PopupGallery__btnClose {
  @include setBtnClose_primary();
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  cursor: pointer;
}

@mixin setCommonStylesPopupGallery__btnSwitch() {
  width: 60px;
  height: 60px;

  z-index: 1;
  position: absolute;
  top: calc(50vh - 20px);

  border-radius: 50%;
  background: none;
  border: none;

  cursor: pointer;

  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}


.PopupGallery__btnSwitchLeft {
  @include setCommonStylesPopupGallery__btnSwitch();
  left: calc(50% - 870px);
}

.PopupGallery__btnSwitchRight {
  @include setCommonStylesPopupGallery__btnSwitch();
  right: calc(50% - 870px);
}


.PopupGallery__imgsBox {
  position: relative;
  height: 100%;
  max-width: 1600px;
  left: calc(50% - 800px);
}

.PopupGallery__img {
  position: absolute;
  width: 100%;
  height: 100%;

  object-fit: scale-down;
  transition: opacity 400ms ease-in-out;
  opacity: 0;
  padding-top: 60px;
  padding-bottom: 60px;
}

.PopupGallery__img_show {
  opacity: 1;
}

.PopupGallery__loaderBox {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.PopupGallery__toggleBox {
  position: absolute;
  bottom: 0;
  max-width: 1600px;
  left: calc(50% - 400px);
  max-width: 800px;
  width: 100%;
  height: 4px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 1;
}

.PopupGallery__toggleItem {
  height: 4px;
  width: 100%;
  cursor: pointer;
  background: #eeefef;
  border-radius: 5px;

  transition: background 200ms ease-in-out;

  &:hover {
    background: $c_primary_hover;
    // background-color: red;
  }
}

.PopupGallery__toggleItem_active {
  background: $c_primary;

  &:hover {
    background: $c_primary;
  }
}

.PopupGallery__swiper {
  display: none;
}

@media screen and (max-width: 1850px) {
  .PopupGallery__imgsBox {
    max-width: none;
    left: 100px;
    width: calc(100% - 200px);
  }

  .PopupGallery__btnSwitchLeft {
    left: 20px;
  }

  .PopupGallery__btnSwitchRight {
    right: 20px;
  }
}

@media screen and (max-width: 1170px) {
  .PopupGallery__swiper {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .PopupGallery__toggleBox {
    max-width: 568px;
    left: calc(50% - 284px);
  }
}

@media screen and (max-width: 740px) {
  .PopupGallery__imgsBox {
    width: 100%;
    left: 0;
  }
  .PopupGallery__btnSwitchLeft {
    display: none;
  }

  .PopupGallery__btnSwitchRight {
    display: none;
  }

  .PopupGallery__toggleBox {
    left: 0;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    max-width: 100%;
  }
}
</style>
