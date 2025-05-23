<script lang="ts" setup>
import gsap from 'gsap'

var BlockSingleVilla_node = ref<HTMLElement>()

onMounted(() => {
  gsap.fromTo(
    BlockSingleVilla_node.value!.querySelector('.BlockSingleVilla__content'),
    {
      scale: 0.8,
      borderRadius: '80px',
    },
    {
      scale: 1,
      borderRadius: '0px',

      scrollTrigger: {
        trigger: BlockSingleVilla_node.value,
        start: 'top bottom',
        end: 'top 35%',
        scrub: 1,
      },
    }
  )
})
</script>

<template>
  <section ref="BlockSingleVilla_node" class="BlockSingleVilla" id="singl-villa">
    <div class="BlockSingleVilla__content">
      <h2 class="BlockSingleVilla__h2">знакомьтесь — <span class="BlockSingleVilla__h2Span">сингл-вилла</span></h2>

      <p class="BlockSingleVilla__p1">
        Она кирпичная и&nbsp;в&nbsp;ней всего тридцать пять квартир. Ровно по&nbsp;пять на&nbsp;этаже.
      </p>

      <p class="BlockSingleVilla__p2">
        Особенность в&nbsp;том, что такая вилла&nbsp;&mdash;
        <br class="BlockSingleVilla__p2Br" />
        одна&nbsp;в квартале. Другие дома классического формата из&nbsp;нескольких секций и&nbsp;повыше.
      </p>

      <p class="BlockSingleVilla__p3">
        На&nbsp;вид она может напомнить вам голландские кварталы. Два первых этажа покрыты лицевым керамическим
        кирпичом. Остальные&nbsp;&mdash; окрашенной штукатуркой цвета марсала.
      </p>

      <picture class="BlockSingleVilla__picture">
        <source
          class="BlockSingleVilla__img"
          srcset="/img/BlockSingleVilla/desktop.png"
          width="818"
          height="958"
          media="(min-width: 741px)"
        />
        <img class="BlockSingleVilla__img" src="/img/BlockSingleVilla/mobile.png" width="720" height="814" />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
.BlockSingleVilla__content {
  position: relative;
  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
  background-color: white;
  z-index: 1;
  // transform: scale(0.8);
  // border-radius: 80px;
  background-color: $c_primary;
  transform-origin: center bottom;
}

.BlockSingleVilla__h2 {
  @include setFontStyle1();
  color: $c_body;
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 470px;
  margin: 369px 0 7px 0;
}

.BlockSingleVilla__h2Span {
  @include setFontStyle2();
  position: relative;
  top: -23px;
}

.BlockSingleVilla__p1 {
  @include setFontStyle3();
  color: $c_body;

  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 400px;
  margin: 0 0 24px 0;
}

.BlockSingleVilla__p2 {
  @include setFontStyle3();
  color: $c_body;

  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 450px;
  margin: 0 0 24px 0;
}

.BlockSingleVilla__p3 {
  @include setFontStyle3();
  color: $c_body;

  grid-row: 4;
  grid-column-start: 1;
  grid-column-end: 7;

  max-width: 400px;
  margin: 0 0 370px 0;
}

.BlockSingleVilla__picture {
  grid-column-start: 6;
  grid-column-end: 13;

  grid-row-start: 1;
  grid-row-end: 6;
  width: 94%;

  justify-self: end;
  align-self: center;
  padding: 120px 0;

  margin-right: -60px;
}

.BlockSingleVilla__img {
  width: 100%;
  height: auto;

  display: block;
}

@media screen and (max-width: 1500px) {
  .BlockSingleVilla__picture {
    width: 100%;
  }
}

@media screen and (max-width: 1170px) {
  .BlockSingleVilla__h2 {
    grid-row-start: 1;
    grid-column-end: 9;

    max-width: 360px;
    margin: 130px 0 35px 0;
  }

  .BlockSingleVilla__h2Span {
    top: -15px;
  }

  .BlockSingleVilla__p1 {
    grid-row-start: 2;
    grid-column-end: 9;

    max-width: 500px;
  }

  .BlockSingleVilla__p2 {
    grid-row-start: 3;

    grid-column-end: 9;
    max-width: 530px;
    margin: 0 0 38px 0;
  }

  .BlockSingleVilla__p2Br {
    display: none;
  }

  .BlockSingleVilla__p3 {
    grid-row-start: 5;
    grid-column-end: 9;

    max-width: 600px;
    margin: 0 0 100px 0;
  }

  .BlockSingleVilla__picture {
    grid-column-start: 1;
    grid-row-start: 4;
    grid-column-end: 9;

    grid-row-end: auto;
    justify-self: center;
    padding: 0;
    margin: 0 auto;
    padding: 0 30px;
    margin: 0 0 35px 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockSingleVilla__h2 {
    grid-column-end: 5;
    margin: 48px -10px -1px 0;
  }

  .BlockSingleVilla__h2Span {
    top: -17px;
  }

  .BlockSingleVilla__p1 {
    grid-column-end: 5;

    max-width: 300px;
    margin: 2px 0 19px 0;
  }

  .BlockSingleVilla__p2 {
    grid-column-end: 5;
    max-width: 320px;
    margin: 0 0 20px 0;
  }

  .BlockSingleVilla__p2Br {
    display: block;
  }

  .BlockSingleVilla__p3 {
    grid-column-end: 5;
    max-width: 290px;
  }

  .BlockSingleVilla__picture {
    grid-column-end: 5;
    padding: 0;
    margin: 0 0 38px 0;
  }

  .BlockSingleVilla__img {
    @include setFullWidthInLCWP();
  }
}
</style>
