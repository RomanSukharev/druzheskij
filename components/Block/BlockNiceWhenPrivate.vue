<script lang="ts" setup>
import gsap from 'gsap'

var BlockNiceWhenPrivate_node = ref<HTMLElement>()

var getMarkStart = () => (window.innerWidth <= 1170 ? '30%' : 'center')

onMounted(() => {
  gsap.to(BlockNiceWhenPrivate_node.value!.querySelector('.BlockNiceWhenPrivate__content'), {
    scrollTrigger: {
      trigger: BlockNiceWhenPrivate_node.value,
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
  <div class="BlockNiceWhenPrivate" ref="BlockNiceWhenPrivate_node">
    <section class="BlockNiceWhenPrivate__content" id="courtyards">
      <h2 class="BlockNiceWhenPrivate__h2">
        ПРИЯТНО, КОГДА <span class="BlockNiceWhenPrivate__h2Span">приватно</span>
      </h2>

      <p class="BlockNiceWhenPrivate__p1">
        У&nbsp;домов много общего, но&nbsp;главное&nbsp;&mdash; двор. Он&nbsp;закрыт от&nbsp;машин,
        но&nbsp;с&nbsp;въездом для крупных доставок и&nbsp;спецтехники
      </p>

      <picture class="BlockNiceWhenPrivate__picture">
        <source
          class="BlockNiceWhenPrivate__img"
          srcset="/img/BlockNiceWhenPrivate/desktop.png"
          width="620"
          height="698"
          media="(min-width: 741px)"
        />
        <img class="BlockNiceWhenPrivate__img" src="/img/BlockNiceWhenPrivate/mobile.png" width="320" height="410" />
      </picture>

      <p class="BlockNiceWhenPrivate__p2">
        Для отдыха внутри двора&nbsp;&mdash; пергола, качели и&nbsp;скамьи разной формы. Вокруг них деревья, кустарники
        и&nbsp;нижний ярус из злаков.
      </p>

      <p class="BlockNiceWhenPrivate__p3">
        Освещать это только большими фонарями было&nbsp;бы преступлением, поэтому акцентные подсветки тоже сделаем.
      </p>
    </section>
  </div>
</template>

<style lang="scss">
.BlockNiceWhenPrivate__content {
  position: relative;
  z-index: 1;
  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
  background-color: $c_body_hover;
  transform-origin: center top;
}

.BlockNiceWhenPrivate__h2 {
  @include setFontStyle1();
  color: $c_text;

  grid-row: 1;
  grid-column-start: 7;
  grid-column-end: 13;

  margin: 268px 0 20px 0;
}

.BlockNiceWhenPrivate__h2Span {
  display: block;
  @include setFontStyle2();
  color: $c_primary;

  position: relative;
  top: -20px;
  left: 2px;
}

.BlockNiceWhenPrivate__p1 {
  @include setFontStyle3();
  color: $c_text;

  grid-row: 2;
  grid-column-start: 7;
  grid-column-end: 13;

  max-width: 420px;
  margin: 0 0 24px 0;
}

.BlockNiceWhenPrivate__picture {
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 7;

  align-self: center;
  width: 84%;
  padding: 120px 0;
}

.BlockNiceWhenPrivate__img {
  display: block;
  width: 100%;
  height: auto;
}

.BlockNiceWhenPrivate__p2 {
  @include setFontStyle3();
  color: $c_text;

  grid-row: 3;
  grid-column-start: 7;
  grid-column-end: 13;

  max-width: 446px;
  margin: 0 0 21px 0;
}

.BlockNiceWhenPrivate__p3 {
  @include setFontStyle3();
  color: $c_text;

  grid-row: 4;
  grid-column-start: 7;
  grid-column-end: 13;

  max-width: 435px;
  margin: 0 0 270px 0;
}

@media screen and (max-width: 1170px) {
  .BlockNiceWhenPrivate__content {
    padding-bottom: var(--offset_chapter);
  }
  .BlockNiceWhenPrivate__h2 {
    grid-column-start: 1;
    grid-column-end: 9;

    margin: 108px 0 35px 0;
  }

  .BlockNiceWhenPrivate__h2Span {
    top: -5px;
  }

  .BlockNiceWhenPrivate__p1 {
    grid-column-start: 1;
    grid-column-end: 9;
  }

  .BlockNiceWhenPrivate__picture {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 1;
    grid-column-end: 9;

    padding: 0;
    width: 100%;
  }

  .BlockNiceWhenPrivate__p2 {
    grid-column-start: 1;
    grid-column-end: 9;

    max-width: 450px;
    margin: 0 0 25px 0;
  }

  .BlockNiceWhenPrivate__p3 {
    grid-column-start: 1;
    grid-column-end: 9;

    margin: 0 0 0px 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockNiceWhenPrivate__content {
    padding-bottom: 0;
  }
  .BlockNiceWhenPrivate__h2 {
    grid-column-end: 5;
    margin: 55px 0 13px 0;
  }

  .BlockNiceWhenPrivate__h2Span {
    top: -15px;
  }

  .BlockNiceWhenPrivate__p1 {
    grid-column-end: 5;

    max-width: 290px;
    margin: 0 0 50px 0;
  }

  .BlockNiceWhenPrivate__picture {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .BlockNiceWhenPrivate__img {
    @include setFullWidthInLCWP();
  }

  .BlockNiceWhenPrivate__p2 {
    grid-row-start: 5;
    grid-column-start: 1;
    grid-column-end: 5;

    max-width: 270px;
    margin: 30px 0 20px 0;
  }

  .BlockNiceWhenPrivate__p3 {
    grid-row-start: 6;
    grid-column-start: 1;
    grid-column-end: 5;

    max-width: 248px;
    margin: 0 0 50px 0;
  }
}
</style>
