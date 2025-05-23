<script setup lang="ts">
import { reactive } from 'vue'
import Plug from '@/utils/Plug'
import { useOutSide } from '@/composables/useOutSide'
import { IPopupGalleryProps } from '@/components/PopupGallery.vue'

var popup_gallery_props = useState<IPopupGalleryProps | null>('popup_gallery_props', () => null)

var plug = reactive<InstanceType<typeof Plug>>(new Plug())
var node_BlockStartQuarter = useOutSide(() => plug.clear())

var openPopupGallery = () => {
  popup_gallery_props.value = {
    imgs: [{ src: '/img/BlockStartQuarter/KOT.webp', title: '' }],
    current_img_idx: 0,
  }
}
</script>

<template>
  <section class="BlockStartQuarter" id="start_quarter">
    <div class="BlockStartQuarter__content">
      <picture class="BlockStartQuarter_picture">
        <source
          class="BlockStartQuarter__img"
          srcset="/img/BlockStartQuarter/desktop.png"
          width="703"
          height="696"
          media="(min-width: 741px)"
        />
        <img class="BlockStartQuarter__img" src="/img/BlockStartQuarter/mobile.png" width="360" height="406" />
      </picture>

      <h2 class="BlockStartQuarter__h2">
        НАЧАЛО <br /><span class="BlockStartQuarter__h2Span">нового</span> КВАРТАЛА НА&nbsp;МОСКОВСКОМ
        <div class="BlockStartQuarter__squareWrap">
          <span class="BlockStartQuarter__70000m">70&nbsp;000&nbsp;м²</span>
          <span class="BlockStartQuarter__square">примерная площадь территории</span>
        </div>
      </h2>
    </div>

    <div ref="node_BlockStartQuarter" class="BlockStartQuarter-map">
      <div
        @touchstart="plug.touchStart($event)"
        @touchmove="plug.touchMove($event)"
        @touchend="plug.handleEnd"
        @mousedown="plug.mouseDown($event)"
        @mousemove="plug.mouseMove($event)"
        @mouseup="plug.handleEnd"
        class="BlockStartQuarter-map__plug"
        :class="{ anim: plug.IS_HIDDEN_PLUG }"
      >
        <img width="48" height="48" src="/img/blind.png" alt="заглушка" />
        <span class="BlockStartQuarter-map__plug-content">
          Проведите пальцем <br />
          для перемещения по карте
        </span>
      </div>

      <div class="BlockStartQuarter-map__img" v-grabscroll>
        <UIImgLazyLoad
          alt="Map"
          height="1520"
          width="856"
          @click="openPopupGallery"
          class_root="BlockStartQuarter-map__picture"
          src="/img/BlockStartQuarter/KOT.webp"
          srcset="/img/BlockStartQuarter/KOT.webp"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockStartQuarter {
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  @include setPaddingSides(var(--global_padding_content));
  position: relative;
}

.BlockStartQuarter__squareWrap {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.BlockStartQuarter__70000m {
  color: $c_primary;
  font-family: Inter;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.BlockStartQuarter__square {
  color: #586267;
  leading-trim: both;
  text-edge: cap;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

.BlockStartQuarter__content {
  display: flex;
  gap: 75px;
}

.BlockStartQuarter_picture {
  max-width: 703px;
}

.BlockStartQuarter__img {
  display: block;
  width: 100%;
  height: auto;
}

.BlockStartQuarter__h2 {
  @include setFontStyle11();
  color: $c_text;

  max-width: 500px;
  margin: 66px 0 0 0;
}

.BlockStartQuarter__h2Span {
  font-family: PlayfairDisplay;
  font-size: 75px;
  font-style: italic;
  font-weight: 500;
  line-height: 20%;

  color: $c_primary;
}

.BlockStartQuarter-map {
  overflow: hidden;
  position: relative;
  max-height: 1096px;
  grid-column: span 4;
  margin-top: 120px;
}

.BlockStartQuarter-map__img {
  display: flex;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  @include hideScroll();
}

.BlockStartQuarter-map__picture {
  display: flex;
  cursor: url('data:image/svg+xml;utf8,' + "<svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>  <rect x='0.5' y='0.5' width='35' height='35' rx='17.5' fill='white'/>  <rect x='0.5' y='0.5' width='35' height='35' rx='17.5' stroke='%23FF7060'/>  <path d='M14.5625 17.0628H19.5625M17.0625 14.5628V19.5628M21.7026 21.7032L25.4995 25.5001M23.625 17.0625C23.625 20.6869 20.6869 23.625 17.0625 23.625C13.4381 23.625 10.5 20.6869 10.5 17.0625C10.5 13.4381 13.4381 10.5 17.0625 10.5C20.6869 10.5 23.625 13.4381 23.625 17.0625Z' stroke='%23586267' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>  </svg> ")
      18 18,
    pointer;

  img {
    width: 100%;
    height: 100%;
  }
}

.BlockStartQuarter-map__plug {
  display: none;
  position: absolute;
  z-index: 10;
  @include stretch();
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  gap: 20px;
  flex-direction: column;
  cursor: grab;
  will-change: transition;
  transition: transform 0.5s linear;

  &.anim {
    will-change: transform;
    transform: translateX(-100%);
  }
}

.BlockStartQuarter-map__plug-content {
  color: $c_body;
  @include setFontStyle3();
  user-select: none;
}

@media screen and (max-width: 1500px) {
  .BlockStartQuarter__content {
    align-items: center;
  }

  .BlockStartQuarter__h2 {
    margin: 0;
  }
}

@media screen and (max-width: 1170px) {
  .BlockStartQuarter {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .BlockStartQuarter__content {
    gap: 54px;
    flex-direction: column;
    align-items: flex-start;
  }

  .BlockStartQuarter_picture {
    max-width: 650px;
    align-self: center;
    position: relative;
    left: -20px;
  }

  .BlockStartQuarter__img {
    margin: 0 auto;
  }

  .BlockStartQuarter__h2 {
    max-width: 390px;
  }

  .BlockStartQuarter__h2Span {
    font-size: 60px;
  }
}

@media screen and (max-width: 900px) {
  .BlockStartQuarter-map {
    margin-top: 80px;
    grid-column: span 2;
    max-height: 707px;
  }

  .BlockStartQuarter-map {
    height: 600px;

    .BlockStartQuarter-map__picture img {
      width: auto;
      height: 600px;
    }
  }
  .BlockStartQuarter-map__plug {
    @include setFlexCenter();
  }
}

@media screen and (max-width: 740px) {
  .BlockStartQuarter__h2 {
    max-width: 290px;
  }

  .BlockStartQuarter__squareWrap {
    margin-top: 20px;
  }

  .BlockStartQuarter {
    padding-top: 54px;
    padding-bottom: 70px;
  }

  .BlockStartQuarter__content {
    gap: 50px;
  }

  .BlockStartQuarter_picture {
    width: 100%;
    max-width: 100%;
    left: 0px;
  }

  .BlockStartQuarter__img {
    @include setFullWidthInLCWP();
  }

  .BlockStartQuarter__h2Span {
    font-size: 49.007px;
    position: relative;
    left: 2px;
  }
}

@media screen and (max-width: 475px) {
  .BlockStartQuarter-map {
    margin-top: 60px;
    height: 375px;

    .BlockStartQuarter-map__picture img {
      height: 375px;
    }
  }
}
</style>
