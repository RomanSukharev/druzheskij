<script lang="ts" setup>
import { IPopupBlockProps } from '@/components/PopupBlock.vue'

var popup_block_props = useState<IPopupBlockProps | null>("popup_block_props", () => null) //prettier-ignore

var handleClickCian = () => {
  popup_block_props.value = {
    component_name: 'CianBlockContent',
  }
}

var handleClickSeePlans = () => {
  ymReachGoal('click-btn_see-flats_first-screen') //ym_target - Клик кнопка - Смотреть квартиры - 1 экран
}
</script>

<template>
  <section class="PskCover">
    <div class="PskCover__bgContainer">
      <div class="PskCover__bg"></div>
    </div>

    <div class="PskCover__content">
      <h1 class="PskCover__h1">
        Два дома <br />
        <span class="PskCover__h1Span">на Кремлевской</span>
      </h1>

      <a href="#plans" class="PskCover__btnSeePlans" @click="handleClickSeePlans()"> Смотреть планировки </a>

      <div class="PskCover__info">
        <p class="PskCover__site">Официальный сайт застройщика</p>

        <div class="PskCover__ratingWrapper">
          <div class="PskCover__rating">
            <div class="PskCover__ratingStars"></div>
            <p class="PskCover__ratingP">за соблюдение сроков ввода в рейтинге ЕРЗ</p>
          </div>
          <a
            class="PskCover__medal"
            href="https://саммитстрой.рф/index.php/nadegnyi-zastroihik-rossii-2024/"
            target="_blank"
            ><img class="PskCover__medalImg" src="/icons/cover_medal.svg" alt=""
          /></a>
        </div>
      </div>
      <!-- <button class="PskCover__btnCian" @click="handleClickCian"></button> -->
    </div>
  </section>
</template>

<style lang="scss">
@mixin setPskCoverShow1 {
  animation: PskCoverShow1 2000ms ease-in-out;
}

@keyframes PskCoverShow1 {
  from {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }
}

@mixin setPskCoverShow2 {
  animation: PskCoverShow2 2000ms ease-in-out;
}

@keyframes PskCoverShow2 {
  from {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.PskCover {
  position: relative;
  padding-top: 20px;
}

.PskCover__bgContainer {
  padding-left: 20px;
  padding-right: 20px;
}

.PskCover__bg {
  min-height: 784px;
  height: calc(100vh - 40px - var(--header_height));
  border-radius: 20px;
  background-image: url('/img/BlockCover.webp');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
}

.PskCover__content {
  position: absolute;
  inset: 0;
}

.PskCover__h1 {
  font-family: NeutralFace;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  color: $c_body;

  position: absolute;
  left: 104px;
  bottom: 280px;

  @include setPskCoverShow1();
}

.PskCover__h1Span {
  font-family: PlayfairDisplay;
  font-size: 152px;
  font-style: italic;
  font-weight: 500;
  color: $c_body;
}

.PskCover__btnSeePlans {
  @include setBtn_primary;

  position: absolute;
  bottom: 112px;
  left: 104px;

  text-align: center;
  font-family: Inter;
  font-size: 23.227px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding: 18px 35px;
  text-decoration: none;

  @include setPskCoverShow2();
}

.PskCover__info {
  position: absolute;

  left: 104px;
  right: 104px;
  top: 84px;

  @include setPskCoverShow1();

  display: flex;
  justify-content: space-between;
}

.PskCover__site {
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: $c_body;
  text-align: left;
}

.PskCover__ratingWrapper {
  display: flex;
  gap: 34px;
  align-items: center;
}

.PskCover__ratingP {
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: $c_body;
  text-align: right;

  max-width: 158px;
}

.PskCover__rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.PskCover__ratingStars {
  height: 19px;
  width: 105px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="105" height="19" viewBox="0 0 105 19" fill="none"><g clip-path="url(%23clip0_1530_1606)"><path d="M8.86525 0.296875L10.8556 6.42261H17.2966L12.0857 10.2085L14.0761 16.3343L8.86525 12.5483L3.65439 16.3343L5.64476 10.2085L0.433896 6.42261H6.87488L8.86525 0.296875Z" fill="%23FDAE67"/><path d="M30.2901 0.296875L32.2804 6.42261H38.7214L33.5105 10.2085L35.5009 16.3343L30.2901 12.5483L25.0792 16.3343L27.0696 10.2085L21.8587 6.42261H28.2997L30.2901 0.296875Z" fill="%23FDAE67"/><path d="M51.7149 0.296875L53.7052 6.42261H60.1462L54.9353 10.2085L56.9257 16.3343L51.7149 12.5483L46.504 16.3343L48.4944 10.2085L43.2835 6.42261H49.7245L51.7149 0.296875Z" fill="%23FDAE67"/><path d="M73.1387 0.296875L75.1291 6.42261H81.57L76.3592 10.2085L78.3495 16.3343L73.1387 12.5483L67.9278 16.3343L69.9182 10.2085L64.7073 6.42261H71.1483L73.1387 0.296875Z" fill="%23FDAE67"/><path d="M94.5625 0.296875L96.5529 6.42261H102.994L97.783 10.2085L99.7734 16.3343L94.5625 12.5483L89.3517 16.3343L91.342 10.2085L86.1312 6.42261H92.5721L94.5625 0.296875Z" fill="%23FDAE67"/></g><defs><clipPath id="clip0_1530_1606"><rect width="104.167" height="17.7305" fill="%23FDAE67" transform="translate(0 0.296875)"/></clipPath></defs></svg>');
  margin: 0 0 4px 0;
}

.PskCover__btnCian {
  position: absolute;
  right: 76px;
  bottom: 56px;

  width: 112px;
  height: 91px;

  border: none;
  background-color: #ffffff00;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/img/cian_desktop.svg');

  cursor: pointer;

  @include setPskCoverShow2();
}

@media screen and (max-width: 1300px) {
  .PskCover__h1 {
    transform: scale(0.8);
    transform-origin: left;
    white-space: nowrap;
  }
}

@media screen and (max-width: 1170px) {
  .PskCover__bg {
    min-height: 560px;
    background-position: center center;
  }

  .PskCover__h1 {
    transform: scale(1);
    font-size: 50px;
    left: 52px;
    bottom: 152px;
    line-height: 125%;
  }

  .PskCover__h1Span {
    font-size: 76px;
  }

  .PskCover__btnSeePlans {
    font-size: 16px;

    left: 52px;
    bottom: 32px;
  }

  .PskCover__info {
    right: 52px;
    top: 52px;
    left: 52px;
  }
  .PskCover__ratingWrapper {
    align-items: center;
    gap: 24px;
  }

  .PskCover__ratingStars {
    height: 16px;
    width: 89px;
    background-image: url('/icons/cover_stars.svg');
    margin: 0 0 4px 0;
  }

  .PskCover__medalImg {
    width: 64px;
  }

  .PskCover__btnCian {
    right: 50px;
    bottom: 36px;
    transform: scale(0.87);
    transform-origin: right bottom;
  }
}

@media screen and (max-width: 740px) {
  .PskCover {
    padding-top: 32px;
  }

  .PskCover__bgContainer {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 120px;
    padding-bottom: 100px;
  }

  .PskCover__bg {
    min-height: 272px;
    height: calc(100vh - 64px - 180px - var(--header_height));
    border-radius: 10px;
  }

  .PskCover__h1 {
    font-size: 42px;
    line-height: 115%;
    text-align: center;
    color: $c_text;

    top: 32px;
    left: 0;
    width: 100%;
  }

  .PskCover__h1Span {
    font-size: 40px;
    color: $c_primary;
  }

  .PskCover__btnSeePlans {
    font-weight: 400;

    padding: 10.417px 27.083px 11.458px 27.083px;

    bottom: 30px;
    left: 16px;
    right: 16px;
  }

  .PskCover__info {
    top: 180px;
    bottom: 124px;
    flex-direction: row;
    left: 35px;
    right: 35px;
    justify-content: space-between;
    align-items: flex-end;
  }

  .PskCover__site {
    text-align: left;
    width: 150px;
    position: absolute;
    top: 0;
  }

  .PskCover__ratingWrapper {
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }

  .PskCover__rating {
    order: 1;
    width: max-content;
  }

  // .PskCover__ratingStars {
  //   width: 88.6px;
  //   height: 15.081px;
  // }

  .PskCover__ratingP {
    flex-shrink: 0;
    font-size: 11px;
    max-width: 130px;
  }

  .PskCover__medal {
    height: 64px;
  }

  .PskCover__medalImg {
    width: 64px;
    height: 64px;
  }

  .PskCover__btnCian {
    bottom: 130px;
    left: calc(50% - 62px);
  }
}
</style>
