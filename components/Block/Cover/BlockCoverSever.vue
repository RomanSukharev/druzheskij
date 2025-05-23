<script lang="ts" setup>
import checkLoadedImage from "@/utils/checkLoadedImage";

import { IBlockPromotionSever } from "../Promotion/Sever/BlockPromotionSever.vue";

import type { IPopupBlockProps } from "@/components/PopupBlock.vue";

var popup_block_props = useState<IPopupBlockProps | null>("popup_block_props", () => null) //prettier-ignore

var data_block_promotion_sever = useState<IBlockPromotionSever>("data_block_promotion_sever", () => ({ house_list: [], min_payment: "" }));

var route = useRoute();

var start = ref<boolean>(false);
var cover = ref<HTMLElement>();

var handleClickCian = () => {
  popup_block_props.value = {
    component_name: "CianBlockContent",
  };
};

var handleClickSeePlans = () => {
  ymReachGoal("click-btn_see-flats_first-screen"); //ym_target - Клик кнопка - Смотреть квартиры - 1 экран
};

onMounted(async () => {
  start.value = await checkLoadedImage("/img/BlockCover.webp");
  setTimeout(() => {
    cover.value!.style.zIndex = "1";
  }, 4000);
});
</script>

<template>
  <section ref="cover" class="BlockCoverSever" :class="{ start }">
    <div class="BlockCoverSever__bgContainer">
      <svg
        :class="{ start }"
        class="BlockCoverSever_svg"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="1880"
        height="1078"
        viewBox="0 0 1880 1078"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <mask id="mask-1" x="0" y="0">
            <g>
              <path class="path path_1" d="M 580,530 Q 900,400 950,200" stroke="#fff" stroke-width="150" />
              <path class="path path_2" d="M 950,200 710,790" stroke="#fff" stroke-width="150" />
              <path class="path path_3" d="M 710,790 1130,250" stroke="#fff" stroke-width="150" />
              <path class="path path_4" d="M 1130,250 900,850" stroke="#fff" stroke-width="150" />
              <path class="path path_5" d="M 900,850 Q 1050,620 1290,500" stroke="#fff" stroke-width="150" />
            </g>
          </mask>
        </defs>

        <image x="0" y="-10" width="110%" height="110%" xlink:href="/img/BlockCover.webp" mask="url(#mask-1)" />
      </svg>
    </div>

    <div class="BlockCoverSever__content">
      <h1 :class="{ start }" class="BlockCoverSever__h1">
        Купить квартиру <br />
        <span class="BlockCoverSever__h1Span"
          >в
          <span style="color: #ff7060"
            >тюмени от
            <span style="white-space: nowrap">
              {{ data_block_promotion_sever.min_payment }} <span style="color: #fff">&nbsp;₽/мес</span></span
            ></span
          ></span
        >
      </h1>

      <NuxtLink href="#plans" class="BlockCoverSever__btnSeePlans" :class="{ start }" @click="handleClickSeePlans()">
        Смотреть планировки
      </NuxtLink>

      <div :class="{ start }" class="BlockCoverSever__info">
        <p class="BlockCoverSever__site">официальный сайт застройщика</p>

        <div class="BlockCoverSever__rating">
          <div class="BlockCoverSever__ratingStars"></div>
          <p class="BlockCoverSever__ratingP">за соблюдение сроков ввода в рейтинге ЕРЗ</p>
        </div>
      </div>

      <button :class="{ start }" class="BlockCoverSever__btnCian" @click="handleClickCian"></button>
    </div>
  </section>
</template>

<style lang="scss">
.BlockCoverSever_svg {
  border-radius: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  will-change: transform, contents;

  g {
    will-change: transform;
    border: 2px solid red;
    transition: transform 0.5s 1.8s ease-in-out;
  }
}

.BlockCoverSever_svg.start {
  g {
    transform: translate(-250%, -250%) scale(6);
  }
  .path {
    stroke-dashoffset: 0;
  }
}

.BlockCoverSever_svg .path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.path_1 {
  transition: stroke-dashoffset 0.3s linear;
}
.path_2 {
  transition: stroke-dashoffset 0.3s 0.3s linear;
}
.path_3 {
  transition: stroke-dashoffset 0.3s 0.9s linear;
}
.path_4 {
  transition: stroke-dashoffset 0.3s 1.2s linear;
}
.path_5 {
  transition: stroke-dashoffset 0.3s 1.5s linear;
}

.BlockCoverSever {
  transition: top 0.5s 3.5s ease-in-out;
  background-color: #fff;
  z-index: 9999;
  top: calc(var(--header_height) * -1);
  position: relative;
  padding-top: 20px;
  &.start {
    top: 0;
  }
}

.BlockCoverSever__bgContainer {
  padding-left: 20px;
  padding-right: 20px;
}

.BlockCoverSever__content {
  position: absolute;
  inset: 0 0 15% 0;
}

.BlockCoverSever__h1,
.BlockCoverSever__info,
.BlockCoverSever__btnCian {
  will-change: opacity, contents;
  transition: opacity 1s 2.5s ease-in-out;
  opacity: 0;
  &.start {
    opacity: 1;
  }
}

.BlockCoverSever__h1 {
  font-family: PlayfairDisplay;
  font-size: 152px;
  font-style: italic;
  font-weight: 500;
  color: $c_body;
  line-height: 100%;

  padding-right: 80px;

  position: absolute;
  left: var(--global_padding_content);
  bottom: 280px;
}

.BlockCoverSever__h1Span {
  font-family: "NeutralFace";
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 80px */
  text-transform: uppercase;
  color: $c_body;
}

.BlockCoverSever__btnSeePlans {
  @include setBtn_primary;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, opacity 1s 2.5s ease-in-out;
  opacity: 0;
  &.start {
    opacity: 1;
  }

  position: absolute;
  bottom: 148px;
  left: var(--global_padding_content);

  text-align: center;
  font-family: Inter;
  font-size: 23.227px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding: 18px 35px;
  text-decoration: none;
}

.BlockCoverSever__info {
  position: absolute;

  right: 76px;
  top: 76px;

  display: flex;
  flex-direction: column;
  gap: 24px;
}

.BlockCoverSever__site,
.BlockCoverSever__ratingP {
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: $c_body;
  text-align: right;

  max-width: 140px;
}

.BlockCoverSever__rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.BlockCoverSever__ratingStars {
  height: 19px;
  width: 105px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="105" height="19" viewBox="0 0 105 19" fill="none"><g clip-path="url(%23clip0_1530_1606)"><path d="M8.86525 0.296875L10.8556 6.42261H17.2966L12.0857 10.2085L14.0761 16.3343L8.86525 12.5483L3.65439 16.3343L5.64476 10.2085L0.433896 6.42261H6.87488L8.86525 0.296875Z" fill="%23FDAE67"/><path d="M30.2901 0.296875L32.2804 6.42261H38.7214L33.5105 10.2085L35.5009 16.3343L30.2901 12.5483L25.0792 16.3343L27.0696 10.2085L21.8587 6.42261H28.2997L30.2901 0.296875Z" fill="%23FDAE67"/><path d="M51.7149 0.296875L53.7052 6.42261H60.1462L54.9353 10.2085L56.9257 16.3343L51.7149 12.5483L46.504 16.3343L48.4944 10.2085L43.2835 6.42261H49.7245L51.7149 0.296875Z" fill="%23FDAE67"/><path d="M73.1387 0.296875L75.1291 6.42261H81.57L76.3592 10.2085L78.3495 16.3343L73.1387 12.5483L67.9278 16.3343L69.9182 10.2085L64.7073 6.42261H71.1483L73.1387 0.296875Z" fill="%23FDAE67"/><path d="M94.5625 0.296875L96.5529 6.42261H102.994L97.783 10.2085L99.7734 16.3343L94.5625 12.5483L89.3517 16.3343L91.342 10.2085L86.1312 6.42261H92.5721L94.5625 0.296875Z" fill="%23FDAE67"/></g><defs><clipPath id="clip0_1530_1606"><rect width="104.167" height="17.7305" fill="%23FDAE67" transform="translate(0 0.296875)"/></clipPath></defs></svg>');
  margin: 0 0 4px 0;
}

.BlockCoverSever__btnCian {
  position: absolute;
  right: 76px;
  bottom: 56px;

  width: 112px;
  height: 91px;

  border: none;
  background-color: #ffffff00;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/img/cian_desktop.svg");

  cursor: pointer;
}

@media (max-width: 1500px) {
  .BlockCoverSever__content {
    inset: 0;
  }
}

@media (max-width: 1400px) {
  .BlockCoverSever__h1 {
    font-size: 100px;
  }

  .BlockCoverSever__h1Span {
    font-size: 60px;
  }
}

@media screen and (max-width: 1300px) {
  .BlockCoverSever__h1 {
    transform-origin: left;
  }
}

@media screen and (max-width: 1170px) {
  .BlockCoverSever__h1 {
    left: 52px;
    bottom: 160px;
    font-size: 60px;
  }

  .BlockCoverSever__h1Span {
    font-size: 40px;
  }

  .BlockCoverSever__btnSeePlans {
    font-size: 16px;

    left: 52px;
    bottom: 20px;
  }

  .BlockCoverSever__info {
    right: 52px;
    top: 50px;
  }

  .BlockCoverSever__btnCian {
    right: 50px;
    bottom: 36px;
    transform: scale(0.87);
    transform-origin: right bottom;
  }
}

@media screen and (max-width: 740px) {
  .BlockCoverSever {
    padding-top: 32px;
  }

  .BlockCoverSever__bgContainer {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 220px;
    padding-bottom: 100px;

    min-height: 700px;

    svg {
      height: 60vh;
      min-height: 440px;
      width: 100%;
    }
  }

  .BlockCoverSever__h1 {
    font-size: 42px;
    line-height: 115%;
    // text-align: center;
    color: $c_text;

    top: 32px;
    left: 20px;
    width: calc(100% - 40px);
    padding-right: 0;
  }

  .BlockCoverSever__h1Span {
    font-size: 30px;
    color: $c_primary;

    span span span {
      color: $c_text !important;
    }
  }

  .BlockCoverSever__btnSeePlans {
    font-weight: 400;

    padding: 10.417px 27.083px 11.458px 27.083px;

    bottom: 30px;
    left: 16px;
    right: 16px;
  }

  .BlockCoverSever__info {
    top: 270px;
    flex-direction: row;
    left: 32px;
    right: 32px;
    justify-content: space-between;
    align-items: flex-end;
  }

  .BlockCoverSever__site {
    text-align: left;
    width: 120px;
  }

  .BlockCoverSever__rating {
    width: max-content;
  }

  .BlockCoverSever__ratingP {
    flex-shrink: 0;
  }

  .BlockCoverSever__btnCian {
    bottom: 110px;
    left: calc(50% - 62px);
  }
}
</style>
