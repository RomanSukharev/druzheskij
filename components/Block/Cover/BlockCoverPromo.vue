<script lang="ts" setup>
import { IPopupBlockProps } from "@/components/PopupBlock.vue";
import checkLoadedImage from "@/utils/checkLoadedImage";

var popup_block_props = useState<IPopupBlockProps | null>("popup_block_props", () => null) //prettier-ignore

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
  <section ref="cover" class="BlockCoverPromo" :class="{ start }">
    <div class="BlockCoverPromo__bgContainer">
      <svg
        :class="{ start }"
        class="BlockCoverPromo_svg"
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

    <div class="BlockCoverPromo__content">
      <h1 :class="{ start }" class="BlockCoverPromo__h1">
        Два дома <br />
        <span class="BlockCoverPromo__h1Span">на Кремлевской</span>
      </h1>

      <a
        href="#house_list"
        class="BlockCoverPromo__btnSeePlans"
        :class="{ start }"
        @click="handleClickSeePlans()"
      >
        Выбрать планировку
      </a>

      <div :class="{ start }" class="BlockCoverPromo__info">
        <p class="BlockCoverPromo__site">официальный сайт застройщика</p>

        <div class="BlockCoverPromo__rating">
          <div class="BlockCoverPromo__ratingStars"></div>
          <p class="BlockCoverPromo__ratingP">за соблюдение сроков ввода в рейтинге ЕРЗ</p>
        </div>
      </div>

      <button :class="{ start }" class="BlockCoverPromo__btnCian" @click="handleClickCian"></button>
    </div>
  </section>
</template>

<style lang="scss">
.BlockCoverPromo_svg {
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

.BlockCoverPromo_svg.start {
  g {
    transform: translate(-250%, -250%) scale(6);
  }
  .path {
    stroke-dashoffset: 0;
  }
}

.BlockCoverPromo_svg .path {
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

.BlockCoverPromo {
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

.BlockCoverPromo__bgContainer {
  padding-left: 20px;
  padding-right: 20px;
}

.BlockCoverPromo__content {
  position: absolute;
  inset: 0 0 15% 0;
}

.BlockCoverPromo__h1,
.BlockCoverPromo__info,
.BlockCoverPromo__btnCian {
  will-change: opacity, contents;
  transition: opacity 1s 2.5s ease-in-out;
  opacity: 0;
  &.start {
    opacity: 1;
  }
}

.BlockCoverPromo__h1 {
  font-family: NeutralFace;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  color: $c_body;

  position: absolute;
  left: var(--global_padding_content);
  bottom: 280px;
}

.BlockCoverPromo__h1Span {
  font-family: PlayfairDisplay;
  font-size: 152px;
  font-style: italic;
  font-weight: 500;
  color: $c_body;
}

.BlockCoverPromo__btnSeePlans {
  @include setBtn_primary();
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    opacity 1s 2.5s ease-in-out;
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

.BlockCoverPromo__info {
  position: absolute;
  right: 76px;
  top: 76px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.BlockCoverPromo__site,
.BlockCoverPromo__ratingP {
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

.BlockCoverPromo__rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.BlockCoverPromo__ratingStars {
  height: 19px;
  width: 105px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="105" height="19" viewBox="0 0 105 19" fill="none"><g clip-path="url(%23clip0_1530_1606)"><path d="M8.86525 0.296875L10.8556 6.42261H17.2966L12.0857 10.2085L14.0761 16.3343L8.86525 12.5483L3.65439 16.3343L5.64476 10.2085L0.433896 6.42261H6.87488L8.86525 0.296875Z" fill="%23FDAE67"/><path d="M30.2901 0.296875L32.2804 6.42261H38.7214L33.5105 10.2085L35.5009 16.3343L30.2901 12.5483L25.0792 16.3343L27.0696 10.2085L21.8587 6.42261H28.2997L30.2901 0.296875Z" fill="%23FDAE67"/><path d="M51.7149 0.296875L53.7052 6.42261H60.1462L54.9353 10.2085L56.9257 16.3343L51.7149 12.5483L46.504 16.3343L48.4944 10.2085L43.2835 6.42261H49.7245L51.7149 0.296875Z" fill="%23FDAE67"/><path d="M73.1387 0.296875L75.1291 6.42261H81.57L76.3592 10.2085L78.3495 16.3343L73.1387 12.5483L67.9278 16.3343L69.9182 10.2085L64.7073 6.42261H71.1483L73.1387 0.296875Z" fill="%23FDAE67"/><path d="M94.5625 0.296875L96.5529 6.42261H102.994L97.783 10.2085L99.7734 16.3343L94.5625 12.5483L89.3517 16.3343L91.342 10.2085L86.1312 6.42261H92.5721L94.5625 0.296875Z" fill="%23FDAE67"/></g><defs><clipPath id="clip0_1530_1606"><rect width="104.167" height="17.7305" fill="%23FDAE67" transform="translate(0 0.296875)"/></clipPath></defs></svg>');
  margin: 0 0 4px 0;
}

.BlockCoverPromo__btnCian {
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
  .BlockCoverPromo__content {
    inset: 0;
  }
}

@media screen and (max-width: 1300px) {
  .BlockCoverPromo__h1 {
    transform: scale(0.8);
    transform-origin: left;
    white-space: nowrap;
  }
}

@media screen and (max-width: 1170px) {
  .BlockCoverPromo__h1 {
    transform: scale(1);
    font-size: 50px;
    left: 52px;
    bottom: 235px;
    line-height: 125%;
  }

  .BlockCoverPromo__h1Span {
    font-size: 76px;
  }

  .BlockCoverPromo__btnSeePlans {
    font-size: 16px;

    left: 52px;
    bottom: 124px;
  }

  .BlockCoverPromo__info {
    right: 52px;
    top: 50px;
  }

  .BlockCoverPromo__btnCian {
    right: 50px;
    bottom: 36px;
    transform: scale(0.87);
    transform-origin: right bottom;
  }
}

@media screen and (max-width: 740px) {
  .BlockCoverPromo {
    padding-top: 32px;
  }

  .BlockCoverPromo__bgContainer {
    padding: 120px 16px 100px;
    min-height: 700px;

    svg {
      height: 60vh;
      min-height: 440px;
      width: 100%;
    }
  }

  .BlockCoverPromo__h1 {
    font-size: 42px;
    line-height: 115%;
    text-align: center;
    color: $c_text;

    top: 32px;
    left: 0;
    width: 100%;
  }

  .BlockCoverPromo__h1Span {
    font-size: 40px;
    color: $c_primary;
  }

  .BlockCoverPromo__btnSeePlans {
    font-weight: 400;

    padding: 10.417px 27.083px 11.458px 27.083px;

    bottom: 30px;
    left: 16px;
    right: 16px;
  }

  .BlockCoverPromo__info {
    top: 180px;
    flex-direction: row;
    left: 32px;
    right: 32px;
    justify-content: space-between;
    align-items: flex-end;
  }

  .BlockCoverPromo__site {
    text-align: left;
    width: 120px;
  }

  .BlockCoverPromo__rating {
    width: max-content;
  }

  .BlockCoverPromo__ratingP {
    flex-shrink: 0;
  }

  .BlockCoverPromo__btnCian {
    bottom: 150px;
    left: calc(50% - 62px);
  }
}
</style>
