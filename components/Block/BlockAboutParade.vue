<script setup lang="ts">
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/all'

var slides = [
  '/img/BlockAboutParade/slide_1.png',
  '/img/BlockAboutParade/slide_2.png',
  '/img/BlockAboutParade/slide_4.png',
  '/img/BlockAboutParade/slide_3.png',
]
var active_idx = ref<number>(0)
var gallery_ref = ref()
var gallery_close_ref = ref()
var blind_ref = ref()
var pagination_ref = ref()
var mask_mobile = ref()
var BlockAboutParade_node = ref<HTMLElement>()

var setCurrentIdx = (n: number) => (active_idx.value = n % slides.length)

var gallery = {
  nextSlide: () => setCurrentIdx(active_idx.value + 1),
  prevSlide: () => setCurrentIdx(active_idx.value + slides.length - 1),
  open: () => {
    if (window.innerWidth <= 1170) {
      scrollTo({ top: window.scrollY + gallery_ref.value.getBoundingClientRect().top - 100, behavior: 'smooth' })
    }
    gsap.to(blind_ref.value, {
      x: '-470%',
      y: '-300%',
      scale: 8,
      duration: 1,
      ease: 'power1.inOut',
    })
    gsap.to(gallery_ref.value, {
      pointerEvents: 'all',
      background: '#FF7060FF',
      delay: 1,
    })
    gsap.to(gallery_close_ref.value, { display: 'flex', delay: 1 })
    gsap.to(pagination_ref.value, { display: 'flex', delay: 1 })
  },
  close: () => {
    gsap.to(blind_ref.value, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
    })
    gsap.to(gallery_ref.value, { pointerEvents: 'none', background: 'none' })
    gsap.to(gallery_close_ref.value, { display: 'none' })
    gsap.to(pagination_ref.value, { display: 'none' })
  },
}

var swipe_cb = { left: gallery.nextSlide, right: gallery.prevSlide }

var handleResize = () => {
  if (!mask_mobile.value || window.innerWidth > 1170) return

  mask_mobile.value.forEach((item: any) => {
    if (window.innerWidth < 1170 && window.innerWidth > 510) {
      item.preserveAspectRatio.baseVal.meetOrSlice = 1
    } else {
      item.preserveAspectRatio.baseVal.meetOrSlice = 2
    }
  })
}

onMounted(() => {
  handleResize(), window.addEventListener('resize', handleResize)

  gsap.fromTo(
    BlockAboutParade_node.value!.querySelector('.BlockAboutParade__content'),
    {
      scale: 0.8,
      borderRadius: '80px',
    },
    {
      scrollTrigger: {
        trigger: BlockAboutParade_node.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },

      scale: 1,
      borderRadius: '0px',
      ease: CustomEase.create('custom', 'M0,0 C0,0 0,1 0.3,1 0.407,1 0.399,1 0.7,1 0.831,1 1,0 1,0 '),
    }
  )
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <section class="BlockAboutParade" ref="BlockAboutParade_node">
    <div id="paradnie" class="BlockAboutParade__content">
      <div class="BlockAboutParade__innerWrap">
        <h2 class="BlockAboutParade__h2">ПОРА РАССКАЗАТЬ ПРО ПАРАДНЫЕ</h2>

        <p class="BlockAboutParade__p1">
          Входы в&nbsp;них с&nbsp;витражным остеклением &mdash; это когда окна большие и&nbsp;их&nbsp;много. <br />
          Так светлее и&nbsp;дверь открывать безопаснее.
        </p>

        <p class="BlockAboutParade__p2">
          Внутри&nbsp;&mdash; колясочная, дизайнерская почтовая зона и&nbsp;навигация для гостей. Всё это
          с&nbsp;разноуровневым освещением.
        </p>

        <button class="BlockAboutParade__galleryBtn" @click="gallery.open">Смотреть галерею</button>

        <div class="BlockAboutParade__info">
          <div class="BlockAboutParade__item">
            <h5 class="BlockAboutParade__itemH">3,3<span class="BlockAboutParade__itemHSpan">м</span></h5>
            <p class="BlockAboutParade__itemP1">высота потолков в&nbsp;парадных</p>
          </div>

          <div class="BlockAboutParade__item">
            <h5 class="BlockAboutParade__itemH">17</h5>
            <p class="BlockAboutParade__itemP2">
              лифтов <br />
              в&nbsp;двух домах
            </p>
          </div>

          <div class="BlockAboutParade__item">
            <h5 class="BlockAboutParade__itemH">>30<span class="BlockAboutParade__itemHSpan">м²</span></h5>
            <p class="BlockAboutParade__itemP3">средняя площадь колясочных</p>
          </div>
        </div>
      </div>
      <div id="about_parade_gallery" ref="gallery_ref" class="BlockAboutParade__gallery">
        <div class="BlockAboutParade__gallerySlideList">
          <div class="BlockAboutParade__galleryMove" v-swipe="swipe_cb">
            <div @click="gallery.prevSlide"></div>
            <div @click="gallery.nextSlide"></div>
          </div>
          <div ref="gallery_close_ref" class="BlockAboutParade__galleryClose" @click="gallery.close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_201_11)">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="#586267"
                />
              </g>
              <defs>
                <clipPath id="clip0_201_11">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            v-for="(slide, idx) of slides"
            :key="slide"
            class="BlockAboutParade__gallerySlideItem"
            :class="{ is_active: active_idx === idx }"
          >
            <svg
              id="slide_item_mask"
              class="slide slide_desktop"
              :class="{ is_active: active_idx === idx }"
              width="1920"
              role="img"
              preserveAspectRatio="xMidYMin slice"
              height="1215"
              viewBox="0 0 1920 1215"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="mask-2" x="0" y="0">
                  <g>
                    <path
                      ref="blind_ref"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1706.63 679.287C1627.11 649.398 1549.39 652.836 1478.51 673.327C1489.64 661.168 1500.74 649.34 1511.71 637.902C1555.37 592.405 1595.69 554.387 1625.06 527.786C1639.72 514.503 1651.6 504.111 1659.74 497.105C1663.81 493.603 1666.94 490.95 1669.01 489.208C1670.04 488.337 1670.81 487.694 1671.3 487.287C1671.43 487.181 1671.53 487.091 1671.62 487.017L1671.82 486.854L1671.91 486.781L1671.92 486.772L1671.92 486.771C1671.92 486.771 1671.92 486.772 1671.87 486.71L1602.96 363.854L1626.33 431.547C1602.96 363.854 1602.95 363.857 1602.94 363.861L1602.92 363.87L1602.84 363.898L1602.59 363.984L1602.26 364.097C1602.11 364.151 1601.93 364.213 1601.73 364.283C1601 364.538 1599.95 364.906 1598.6 365.384C1595.91 366.339 1592 367.736 1586.98 369.564C1576.93 373.22 1562.43 378.6 1544.28 385.613C1509.59 399.012 1461.45 418.412 1405.47 443.172L1494.86 349.82L1428.03 230.29C1337.75 249.778 1269.28 265.29 1201.64 290.66C1133.13 316.359 1067.88 351.189 980.776 407.12L1058.16 527.638C1118.53 488.876 1164.62 462.885 1206.78 443.567L980 680.372L1072.88 788.504C1149.22 734.885 1232.63 687.006 1311.97 646.286C1247.7 723.55 1185.16 812.08 1144.67 902.207L1259.41 983.388C1317.57 927.95 1385.11 871.073 1456.25 835.558C1526.65 800.412 1593.16 789.647 1656.24 813.354L1706.63 679.287Z"
                      fill="#FFF"
                    />
                  </g>
                </mask>
              </defs>
              <image x="0" y="0" width="100%" height="100%" v-bind="{ 'xlink:href': slide }" mask="url(#mask-2)" />
            </svg>
            <svg
              role="img"
              ref="mask_mobile"
              class="slide slide_mobile"
              preserveAspectRatio="xMidYMin meet"
              xmlns="http://www.w3.org/2000/svg"
              width="728"
              height="754"
              viewBox="0 0 728 754"
              fill="none"
            >
              <defs>
                <mask id="mask-3" x="0" y="0">
                  <g>
                    <path
                      ref="blind_ref"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M727.312 449.471C647.791 419.582 570.078 423.02 499.192 443.511C510.322 431.351 521.426 419.524 532.4 408.086C576.056 362.589 616.378 324.571 645.744 297.97C660.407 284.687 672.289 274.295 680.427 267.289C684.495 263.786 687.624 261.134 689.692 259.392C690.726 258.521 691.495 257.878 691.983 257.471C692.228 257.267 692.402 257.123 692.504 257.038L692.592 256.965L692.603 256.956L692.605 256.954C692.604 256.955 692.604 256.955 692.552 256.894L623.649 134.038L647.013 201.731C623.649 134.038 623.64 134.041 623.629 134.045L623.601 134.054L623.522 134.082L623.274 134.168C623.067 134.239 622.781 134.339 622.415 134.467C621.685 134.722 620.639 135.09 619.29 135.567C616.593 136.523 612.683 137.92 607.661 139.748C597.619 143.403 583.12 148.784 564.963 155.797C530.275 169.196 482.133 188.596 426.151 213.356L515.55 120.004L448.719 0.473877C358.44 19.9622 289.97 35.474 222.33 60.8435C153.811 86.5424 88.5661 121.373 1.46111 177.304L78.8465 297.822C139.213 259.06 185.302 233.069 227.465 213.751L0.685547 450.556L93.5665 558.687C169.903 505.069 253.312 457.19 332.651 416.469C268.386 493.733 205.846 582.264 165.359 672.391L280.091 753.572C338.252 698.134 405.791 641.257 476.932 605.742C547.331 570.596 613.848 559.831 676.922 583.538L727.312 449.471Z"
                      fill="#FFF"
                    />
                  </g>
                </mask>
              </defs>
              <image x="0" y="0" width="100%" height="100%" v-bind="{ 'xlink:href': slide }" mask="url(#mask-3)" />
            </svg>
          </div>
          <div ref="pagination_ref" class="BlockAboutParade__galleryPagination">
            <div
              v-for="(item, idx) of slides"
              :key="item"
              class="BlockAboutParade__galleryPaginationItem"
              :class="{ is_active: active_idx === idx }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockAboutParade__content {
  position: relative;
  z-index: 1;
  background-color: $c_primary;
  transform-origin: center bottom;
}

.BlockAboutParade__innerWrap {
  position: relative;
  z-index: -1;
  transition: z-index 0.1s 1s ease-in-out;
  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
}

.BlockAboutParade__gallery {
  pointer-events: none;
  position: absolute;
  z-index: 1;
  inset: 0;
  @include setPaddingSides(var(--global_padding_content));
}

.BlockAboutParade__galleryMove {
  position: absolute;
  inset: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: stretch;

  div {
    flex: 0 1 50%;

    &:first-child {
      cursor: url('/icons/icon_arrow_l.svg') 29 29, auto;
    }

    &:last-child {
      cursor: url('/icons/icon_arrow_r.svg') 29 29, auto;
    }
  }
}

.BlockAboutParade__gallerySlideList {
  position: relative;
  height: 100%;
}

.BlockAboutParade__gallerySlideItem {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  will-change: opacity;
  transition: opacity ease-in-out 0.4s;
  opacity: 0;

  &.is_active {
    opacity: 1;
  }

  .slide_mobile {
    display: none;
  }

  #slide_item_mask {
    width: 100%;
    height: auto;
    min-height: 920px;
  }
}

.BlockAboutParade__galleryPagination {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 6%;
  display: none;
  justify-content: center;
  gap: 8px;
}

.BlockAboutParade__galleryPaginationItem {
  height: 2px;
  width: 100%;
  max-width: 40px;
  background-color: #fff;

  &.is_active {
    background-color: #586267;
  }
}

.BlockAboutParade__galleryClose {
  position: absolute;
  right: -3em;
  cursor: pointer;
  top: 3.6em;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  display: none;
}

.BlockAboutParade__galleryBtn {
  margin-bottom: 98px;
  grid-column: span 12;
  max-width: max-content;
  border-radius: 10px;
  background-color: #fff;
  transition: background-color 0.3s ease-in-out;
  padding: 10px 36px;
  border: var(--desktop-margin-x, 0.963px) solid #fff;
  color: #586267;
  cursor: pointer;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  &:hover {
    background-color: #f6f6f6;
  }
}

.BlockAboutParade__h2 {
  @include setFontStyle11();
  color: $c_body;

  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 510px;
  margin: 150px 0 40px 0;
}

.BlockAboutParade__p1 {
  @include setFontStyle3();
  color: $c_body;

  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 450px;
  margin: 0 0 24px 0;
}

.BlockAboutParade__p2 {
  @include setFontStyle3();
  color: $c_body;

  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 400px;
  margin: 0 0 49px 0;
}

.BlockAboutParade__info {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 5;

  display: flex;
  gap: 69px;
  margin: 0 0 150px 0;
}

.BlockAboutParade__itemH {
  @include setFontStyle7();
  color: $c_body;
}

.BlockAboutParade__itemHSpan {
  font-size: 40px;
  position: relative;
  left: 5px;
}

.BlockAboutParade__itemP1 {
  @include setFontStyle8();
  color: $c_body;
  max-width: 120px;
  position: relative;
  top: -3px;
  left: -1px;
  line-height: 100%;
}

.BlockAboutParade__itemP2 {
  @include setFontStyle8();
  color: $c_body;
  max-width: 140px;
  line-height: 100%;
}

.BlockAboutParade__itemP3 {
  @include setFontStyle8();
  color: $c_body;
  max-width: 140px;
  position: relative;
  top: -3px;
  left: -1px;
  line-height: 100%;
}

.BlockAboutParade__img {
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 6;

  display: block;
  width: 100%;
  height: auto;
  align-self: center;
}

@media screen and (max-width: 1300px) {
  .BlockAboutParade__info {
    grid-column-end: 13;
  }
}

@media screen and (max-width: 1234px) {
  .BlockAboutParade__gallerySlideList {
    height: 730px;
  }
  .BlockAboutParade__gallerySlideItem {
    #slide_item_mask {
      min-height: 990px;
    }
  }
}

@media screen and (max-width: 1170px) {
  .BlockAboutParade__h2 {
    grid-column-end: 9;
    grid-row: 1;

    max-width: 410px;
    margin: 100px 0 40px 0;
  }

  .BlockAboutParade__p1 {
    grid-column-end: 9;
  }

  .BlockAboutParade__p2 {
    grid-column-end: 9;
    margin: 0 0 40px 0;
  }

  .BlockAboutParade__info {
    grid-column-end: 9;
    margin: 0 0 80px 0;
  }

  .BlockAboutParade__gallery {
    position: initial;
    grid-column: span 8;
    grid-row-start: 4;
    grid-row-end: 5;
    inset: initial;
    height: 100%;
  }

  .BlockAboutParade__galleryBtn {
    grid-column: span 4;
    margin-bottom: 80px;
    max-width: max-content;
  }

  .BlockAboutParade__innerWrap {
    z-index: 1;
  }

  .BlockAboutParade__gallerySlideList {
    height: 685px;
  }

  .BlockAboutParade__gallerySlideItem {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    will-change: opacity;
    opacity: 0;

    &.is_active {
      opacity: 1;
    }

    .slide_mobile {
      min-height: inherit;
      height: 630px;

      path {
        max-height: 630px;
      }

      image {
        x: -50%;
        width: auto;
      }

      width: 100%;
      display: inherit;
    }

    #slide_item_mask {
      display: none;
    }
  }

  .BlockAboutParade__img {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 6;

    margin: 0 0 110px 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockAboutParade__content {
    overflow: hidden;
  }

  .BlockAboutParade__h2 {
    grid-column-end: 5;

    max-width: 330px;
    margin: 50px 0 30px 0;
  }

  .BlockAboutParade__galleryBtn {
    max-width: 100%;
    grid-column: span 4;
    margin-bottom: 50px;
  }

  .BlockAboutParade__p1 {
    grid-column-end: 5;

    max-width: 310px;
    margin: 0 0 31px 0;
  }

  .BlockAboutParade__p2 {
    grid-column-end: 5;

    max-width: 290px;
    margin: 0 0 50px 0;
  }

  .BlockAboutParade__info {
    grid-column-end: 5;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px 5px;
    margin: 0 0 24px 0;
  }

  .BlockAboutParade__gallerySlideList {
    height: 550px;
  }

  .BlockAboutParade__gallerySlideItem {
    .slide_mobile {
      height: 496px;
    }
  }

  .BlockAboutParade__gallery {
    grid-column: span 4;
    padding: 0;
  }

  .BlockAboutParade__img {
    grid-column-end: 5;
    transform: scale(1.4);
    margin: 0 0 45px 0;
  }
}
</style>
