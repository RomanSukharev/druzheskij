<script setup lang="ts">
import gsap from 'gsap'

import type { ISwipeArg } from '~/plugins/swipe'

interface IContentImg {
  title: string
  description: string
}

var BlockPreFinishing_node = ref<HTMLElement>()

var img_src: Record<string, string> = {
  '0': '/img/BlockPreFinishing/13.webp',
  '1': '/img/BlockPreFinishing/11.webp',
  '2': '/img/BlockPreFinishing/4.webp',
  '3': '/img/BlockPreFinishing/1.webp',
  '4': '/img/BlockPreFinishing/10.webp',
  '5': '/img/BlockPreFinishing/14.webp',
}
var img_src_list = Object.values(img_src)
var img_list = [
  { src: '/img/BlockPreFinishing/mini_1.png', id: 0 },
  { src: '/img/BlockPreFinishing/mini_2.png', id: 1 },
  { src: '/img/BlockPreFinishing/mini_3.png', id: 2 },
  { src: '/img/BlockPreFinishing/mini_4.png', id: 3 },
  { src: '/img/BlockPreFinishing/mini_5.png', id: 4 },
  { src: '/img/BlockPreFinishing/mini_6.png', id: 5 },
]

var content_list: IContentImg[] = [
  {
    title: 'стены',
    description:
      'Стены выровняли по общему уровню и оштукатурили. Если будете клеить обои, то стены стоит загрунтовать.',
  },
  {
    title: 'отопление',
    description:
      'Провели горизонтальную систему отопления и поставили радиаторы с терморегуляторами. Счётчики на тепло тоже установлены.',
  },
  {
    title: 'окна',
    description:
      'Поставили двухкамерные окна с энергосберегающим стеклопакетом и родительским контролем. Установили подоконники панели на откосы. Под окнами клапан инфильтрации воздуха для дополнительной вентиляции.',
  },
  {
    title: 'электричество',
    description:
      'Сделали разводку и установили розетки с выключателями. Для домофона и ТВ-кабеля подготовили выводы. На электричество уже предустановлены счётчики.',
  },
  {
    title: 'пол',
    description:
      'На полу проложили слой звукоизоляции и цементно-песчаную стяжку. Это не финишное покрытие, но пыльных работ будет меньше.',
  },
  {
    title: 'сейф-двери',
    description: 'Во всех квартирах предустановлены сейф-двери в общей концепции подъездов.',
  },
]

var content_titles = content_list.map((i) => i.title)
var content_descriptions = content_list.map((i) => i.description)

var content_img: Record<string, IContentImg> = content_list.reduce(
  (acc, i, idx) => ({
    ...acc,
    [img_src[`${idx}`]]: i,
  }),
  {}
)

var selected_id = ref<number>(0)
var selected_img = ref<{ src: string; id: number }>(img_list[selected_id.value])
var selected_content_img = computed<IContentImg>(() => content_img[img_src[`${selected_id.value}`]])

var setSelectedImg = (value: { src: string; id: number }) => (selected_img.value = value)
var setSelectedId = (value: number) => (selected_id.value = value)
var getValueRange = (n: number) => Math.min(Math.max(n, 0), img_list.length - 1)

var swipe_cb: ISwipeArg = {
  right: () => setSelectedImg(img_list[setSelectedId(getValueRange(selected_id.value - 1))]),
  left: () => setSelectedImg(img_list[setSelectedId(getValueRange(selected_id.value + 1))]),
}

var getMarkStart = () => (window.innerWidth <= 1170 ? '50%' : 'center')

onMounted(() => {
  gsap.to(BlockPreFinishing_node.value!.querySelector('.BlockPreFinishing__contentWrapper'), {
    scrollTrigger: {
      trigger: BlockPreFinishing_node.value,
      start: `bottom ${getMarkStart()}`,
      end: 'bottom top',
      scrub: 1,
    },
    scale: 0.8,
    borderRadius: '80px',
  })
})
</script>

<template>
  <section class="BlockPreFinishing" ref="BlockPreFinishing_node">
    <div class="BlockPreFinishing__contentWrapper" id="pre_finishing">
      <div class="BlockPreFinishing__hWrap">
        <h1 class="BlockPreFinishing__h">Предчистовая отделка</h1>
      </div>

      <div class="BlockPreFinishing__preview" v-swipe="swipe_cb">
        <img
          v-for="(src, i) of img_src_list"
          :key="src"
          :class="{ show: selected_id === i }"
          class="BlockPreFinishing__previewImg"
          height="1000"
          width="700"
          alt="картинка"
          :src="src"
        />
      </div>

      <div class="BlockPreFinishing__content">
        <div class="BlockPreFinishing__h2Wrap BlockPreFinishing__content_item">
          <h2
            v-for="(title, i) of content_titles"
            :key="title"
            class="BlockPreFinishing__h2"
            :class="{ show: i === selected_id }"
            v-html="title"
          ></h2>
        </div>
        <div class="BlockPreFinishing__pWrap BlockPreFinishing__content_item">
          <p
            v-for="(description, i) of content_descriptions"
            :key="description"
            class="BlockPreFinishing__p"
            :class="{ show: i === selected_id }"
            v-html="description"
          ></p>
        </div>
      </div>

      <div class="BlockPreFinishing__pMobileWrap">
        <p
          class="BlockPreFinishing__pMobile"
          :class="{ show: selected_img.id === selected_id }"
          v-html="selected_content_img.description"
        ></p>
      </div>

      <div class="BlockPreFinishing__imgList" v-grabscroll>
        <div
          v-for="img of img_list"
          :key="img.id"
          :class="{ is_active: selected_img.id === img.id }"
          class="BlockPreFinishing__imgItem"
          @click="selected_id = (selected_img = img).id"
        >
          <img :src="img.src" alt="картинка" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockPreFinishing__contentWrapper {
  position: relative;
  will-change: transform;
  @include setGridLayout();
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  @include setFontStyle10();
  @include setPaddingSides(var(--global_padding_content));
  background-color: $c_body_hover;
}

.BlockPreFinishing__hWrap {
  margin-top: -12px;
  grid-column-start: 9;
  grid-column-end: 13;
}

.BlockPreFinishing__h {
  @include setFontStyle1();
  color: $c_text;
}

.BlockPreFinishing__previewImg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: opacity;
  transition: opacity 400ms;
  opacity: 0;
  z-index: 1;

  &.show {
    opacity: 1;
  }
}

.BlockPreFinishing__preview {
  will-change: transform, opacity;
  transition: background-image 0.5s ease-in-out;
  align-self: stretch;
  grid-column: span 8;
  grid-row-start: 1;
  grid-row-end: 4;
  min-height: 700px;
}

.BlockPreFinishing__content {
  grid-column-start: 9;
  grid-column-end: 13;
  will-change: opacity;
  min-height: 200px;
}

.BlockPreFinishing__content_item {
  justify-self: stretch;
  position: relative;
}

.BlockPreFinishing__pMobileWrap {
  display: none;
}

.BlockPreFinishing__p {
  position: absolute;
  top: 90px;
  left: 0;
  @include setFontStyle3();
  color: $c_text;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;

  &.show {
    z-index: 0;
    opacity: 1;
  }
}

.BlockPreFinishing__h2Wrap {
  margin-bottom: 40px;
}

.BlockPreFinishing__h2 {
  position: absolute;
  top: 0;
  left: 0;
  color: $c_primary;
  font-family: 'PlayfairDisplay';
  font-size: 60px;
  font-style: italic;
  font-weight: 500;
  line-height: 100%; /* 60px */
  opacity: 0;
  z-index: -1;
  transition: opacity 0.4s ease-in-out;

  &.show {
    z-index: 0;
    opacity: 1;
  }
}

.BlockPreFinishing__imgList {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: max-content;
  overflow-x: auto;
  @include hideScroll();
  align-self: end;
  display: flex;
  gap: 8px;
  grid-column-start: 9;
  grid-column-end: 13;
}

.BlockPreFinishing__imgItem {
  flex-shrink: 0;
  width: 73px;
  height: 73px;
  border: 2px solid transparent;
  cursor: pointer;
}

@media (hover: hover) {
  .BlockPreFinishing__imgItem:hover {
    border: 2px solid #e86937;
  }
}

.BlockPreFinishing__imgItem.is_active,
.BlockPreFinishing__imgItem:active {
  border: 2px solid #e86937;
}
.BlockPreFinishing__imgItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1275px) {
  .BlockPreFinishing__h {
    font-size: 45px;
  }
  .BlockPreFinishing__preview {
    grid-column: span 7;
  }
  .BlockPreFinishing__hWrap,
  .BlockPreFinishing__imgList,
  .BlockPreFinishing__content {
    grid-column-start: 8;
    grid-column-end: 13;
  }
  .BlockPreFinishing__h2 {
    font-size: 40px;
  }
  .BlockPreFinishing__p {
    top: 70px;
    font-size: 16px;
  }
}

@media (max-width: 1170px) {
  .BlockPreFinishing__hWrap,
  .BlockPreFinishing__imgList,
  .BlockPreFinishing__content {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .BlockPreFinishing__contentWrapper {
    height: max-content;
    overflow: hidden;
  }

  .BlockPreFinishing__preview {
    grid-column: span 4;
  }
}

@media (max-width: 825px) {
  .BlockPreFinishing__h {
    font-size: 35px;
  }
}

@media (max-width: 740px) {
  .BlockPreFinishing__hWrap,
  .BlockPreFinishing__imgList,
  .BlockPreFinishing__content,
  .BlockPreFinishing__pMobileWrap,
  .BlockPreFinishing__h2Wrap {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .BlockPreFinishing__content {
    display: contents;
  }

  .BlockPreFinishing__hWrap {
    grid-row-start: 1;
    grid-row-end: 2;
    margin-bottom: 30px;
  }

  .BlockPreFinishing__h2Wrap {
    height: 30px;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .BlockPreFinishing__h2 {
    top: 0;
    font-size: 27.794px;
    font-style: italic;
    font-weight: 500;
    line-height: 100%;
  }

  .BlockPreFinishing__preview {
    grid-row-start: 3;
    grid-row-end: 4;
    min-height: inherit;
    height: 290px;
    margin-bottom: 12px;
    margin-left: calc(var(--global_padding_content) * -1);
    margin-right: calc(var(--global_padding_content) * -1);
  }

  .BlockPreFinishing__pWrap {
    display: none;
  }

  .BlockPreFinishing__pMobileWrap {
    display: flex;
    margin-bottom: 30px;
    @include setFontStyle3();
  }

  .BlockPreFinishing__p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .BlockPreFinishing__pMobile {
    font-size: 14px;
    color: $c_text;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .BlockPreFinishing__imgList {
    grid-row-start: 5;
    grid-row-end: 6;
    gap: 3px;
  }

  .BlockPreFinishing__imgItem {
    width: 50px;
    height: 50px;
  }
}
</style>
