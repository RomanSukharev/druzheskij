<script setup lang="ts">
var tooltip_items: { time: string; content: string; img: string }[] = [
  { time: '15 минут', content: 'ТИУ', img: '/img/BlockHasFlyover/book.svg' },
  { time: '10 минут', content: 'Гимназия №1', img: '/img/BlockHasFlyover/book.svg' },
  { time: '9 минут', content: '«Затюменский»', img: '/img/BlockHasFlyover/tree.svg' },
  { time: '8 минут', content: 'Лицей №34', img: '/img/BlockHasFlyover/book.svg' },
  { time: '12 минут', content: 'ЖД Вокзал', img: '/img/BlockHasFlyover/bus.svg' },
  { time: '15 минут', content: '«Галерея Вояж»', img: '/img/BlockHasFlyover/shop.svg' },
  { time: '5 минут', content: 'Школа №95', img: '/img/BlockHasFlyover/book.svg' },
  { time: '8 минут', content: '«Колумб»', img: '/img/BlockHasFlyover/shop.svg' },
]
</script>

<template>
  <section class="BlockHasFlyover" id="transport_interchange">
    <h2 class="BlockHasFlyover__h2">
      В&nbsp;УДОБНОМ РАЙОНЕ, КАК&nbsp;В&nbsp;СЕРИАЛЕ: <br />
      <span class="BlockHasFlyover__h2Span">есть развязка</span>
    </h2>

    <p class="BlockHasFlyover__p1">
      Она связана с&nbsp;кольцевой дорогой, по&nbsp;которой удобно добраться в&nbsp;разные районы города.
    </p>

    <p class="BlockHasFlyover__p2">Например, ехать до&nbsp;другого тракта&nbsp;&mdash;&nbsp;всего четыре минуты.</p>

    <div class="BlockHasFlyover__footer">
      <img class="BlockHasFlyover__img" src="/img/BlockHasFlyover/has_flyover.png" width="1546" height="912" />

      <UIPskTooltip
        class="BlockHasFlyover__UIPskTooltip"
        :class="'BlockHasFlyover__tooltip_' + idx"
        v-for="(tooltip_item, idx) of tooltip_items"
      >
        <div class="BlockHasFlyover__UIPskTooltip__icon">
          <img
            class="BlockHasFlyover__UIPskTooltip__iconAnchor"
            src="/img/BlockHasFlyover/tooltip_for_has_flyover.svg"
            alt=""
            srcset=""
          />
          <img class="BlockHasFlyover__UIPskTooltip__iconImg" :src="tooltip_item.img" alt="" srcset="" />
        </div>
        <template class="BlockHasFlyover__tooltipContent" v-slot:content>
          <p class="BlockHasFlyover__tooltipContent__p" v-html="tooltip_item.time"></p>
          <img class="BlockHasFlyover__tooltipContent__img" :src="tooltip_item.img" alt="" srcset="" />
          <p class="BlockHasFlyover__tooltipContent__p" v-html="tooltip_item.content"></p>
        </template>
      </UIPskTooltip>

      <picture>
        <source
          class="BlockHasFlyover__logo"
          srcset="/img/BlockHasFlyover/icon_druzh_mobile.svg"
          media="(max-width: 740px)"
        />
        <img class="BlockHasFlyover__logo" src="/img/BlockHasFlyover/icon_druzh.svg" alt="" />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
.BlockHasFlyover {
  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
  background-color: $c_body_hover;

  padding-top: 150px;
  padding-bottom: 115px;
  position: relative;
  overflow: hidden;
}

.BlockHasFlyover__logo {
  position: absolute;
  top: 80%;
  right: 63.5%;
}

.BlockHasFlyover__textContent {
  grid-column-start: 1;
  grid-column-end: 12;

  align-self: center;
}

.BlockHasFlyover__h2 {
  grid-column-start: 1;
  grid-column-end: 13;

  @include setFontStyle1();
  color: $c_text;

  max-width: 560px;
  margin: 0 0 30px 0;
}

.BlockHasFlyover__h2Span {
  @include setFontStyle2();
  line-height: 30%;
  color: $c_primary;
}

.BlockHasFlyover__p1 {
  grid-column-start: 1;
  grid-column-end: 7;

  @include setFontStyle12();
  color: $c_text;

  max-width: 350px;
  margin: 90px 0 32px 0;
}

.BlockHasFlyover__p2 {
  grid-column-start: 1;
  grid-column-end: 13;

  @include setFontStyle12();
  color: $c_text;

  max-width: 350px;
}

.BlockHasFlyover__footer {
  grid-column-start: 5;
  grid-column-end: 13;
  margin: -35% -9% 0 auto;
  position: relative;
}

.BlockHasFlyover__footer .BlockHasFlyover__img {
  width: 100%;
  height: auto;
}

.BlockHasFlyover__UIPskTooltip__icon {
  position: relative;
  cursor: pointer;
}

.BlockHasFlyover__UIPskTooltip__iconImg {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
}

.BlockHasFlyover__UIPskTooltip {
  .PskTooltip__content {
    display: flex;
    align-items: center;
    gap: 9px;
    width: max-content;
    background-color: #ff7060;
    padding: 8px 11px 7px;
  }
}

.BlockHasFlyover__tooltipContent__p {
  @include setFontStyle9();
  color: $c_body;
}

.BlockHasFlyover__tooltip_0 {
  position: absolute;
  bottom: 85%;
  right: 45.5%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: -7.5%;
  }
}

.BlockHasFlyover__tooltip_1 {
  position: absolute;
  bottom: 61%;
  right: 45%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: 103%;
  }
}

.BlockHasFlyover__tooltip_2 {
  position: absolute;
  bottom: 58%;
  right: 79%;
  .PskTooltip__content {
    bottom: calc(100% - 31px);
    left: 145%;
  }
}

.BlockHasFlyover__tooltip_3 {
  position: absolute;
  bottom: 54%;
  right: 59%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: 95%;
  }
}

.BlockHasFlyover__tooltip_4 {
  position: absolute;
  bottom: 48%;
  right: 44%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: 80%;
  }
}

.BlockHasFlyover__tooltip_5 {
  position: absolute;
  bottom: 49%;
  right: 28%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: 140%;
  }
}

.BlockHasFlyover__tooltip_6 {
  position: absolute;
  bottom: 42%;
  right: 68.5%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: 100%;
  }
}

.BlockHasFlyover__tooltip_7 {
  position: absolute;
  bottom: 30%;
  right: 48%;
  .PskTooltip__content {
    bottom: calc(100% - 32px);
    left: 72%;
  }
}

@media screen and (max-width: 1170px) {
  .BlockHasFlyover {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .BlockHasFlyover__textContent {
    grid-column-end: 9;
  }

  .BlockHasFlyover__h2 {
    max-width: 500px;
    grid-column-end: 9;
  }

  .BlockHasFlyover__h2Span {
    line-height: 60%;
  }

  .BlockHasFlyover__p1 {
    max-width: 480px;
    margin: 0;
    grid-column-end: 5;
  }

  .BlockHasFlyover__p2 {
    max-width: 400px;
    margin: 0;
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .BlockHasFlyover__footer {
    grid-column-start: 1;
    grid-column-end: 9;
    margin: 40px 0 0 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockHasFlyover {
    padding-top: 45px;
    padding-bottom: 30px;
  }

  .BlockHasFlyover__logo {
    position: absolute;
    top: 82%;
    right: clamp(55%, 30%, 63.5%);
  }

  .BlockHasFlyover__textContent {
    grid-column-end: 5;
  }

  .BlockHasFlyover__h2 {
    line-height: 134.5%;

    margin: 0 0 20px 0;
    grid-column-end: 5;
  }

  .BlockHasFlyover__h2Span {
    line-height: 15px;
  }

  .BlockHasFlyover__p1 {
    max-width: 240px;
    margin: 0 0 20px 0;
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .BlockHasFlyover__p2 {
    max-width: 240px;
    margin: 0 0 60px 0;
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .BlockHasFlyover__footer {
    grid-column-start: 1;
    grid-column-end: 5;
    margin: 0 -43% 0 -16%;
  }

  .BlockHasFlyover__img {
    @include setFullWidthInLCWP();
  }

  .BlockHasFlyover__tooltip_0 {
    right: 47.5%;
    .PskTooltip__content {
      left: -7.5%;
    }
  }

  .BlockHasFlyover__tooltip_1 {
    right: 47%;
    .PskTooltip__content {
      left: 103%;
    }
  }

  .BlockHasFlyover__tooltip_2 {
    right: 81%;
    .PskTooltip__content {
      left: 330%;
    }
  }

  .BlockHasFlyover__tooltip_3 {
    right: 61%;
    .PskTooltip__content {
      left: 95%;
    }
  }

  .BlockHasFlyover__tooltip_4 {
    right: 46%;
    .PskTooltip__content {
      left: 80%;
    }
  }

  .BlockHasFlyover__tooltip_5 {
    right: 30%;
    .PskTooltip__content {
      left: -250%;
    }
  }

  .BlockHasFlyover__tooltip_6 {
    right: 71%;
    .PskTooltip__content {
      left: 100%;
    }
  }

  .BlockHasFlyover__tooltip_7 {
    right: 50%;
    .PskTooltip__content {
      left: 72%;
    }
  }

  .BlockHasFlyover__UIPskTooltip__iconAnchor {
    transform: scale(0.8);
  }

  .BlockHasFlyover__UIPskTooltip__iconImg {
    width: 45%;
    height: auto;
    transform: translate(-50%, -101%);
    top: 50%;
  }
}

@media screen and (max-width: 450px) {
  .BlockHasFlyover__logo {
    right: clamp(42%, 50%, 55%);
  }
}
</style>
