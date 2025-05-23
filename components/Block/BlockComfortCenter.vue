<script setup lang="ts">
import gsap from 'gsap'

var BlockComfortCenter_node = ref<HTMLElement>()

var objBlockComfortCenter = [
  {
    digit: '9',
    title: 'минут пешком',
  },
  {
    digit: '98',
    title: 'магазинов',
  },
  {
    digit: '12',
    title: 'кафе и ресторанов',
  },
  {
    digit: '6',
    title: 'кинозалов',
  },
]

onMounted(() => {
  gsap.fromTo(
    BlockComfortCenter_node.value!.querySelector('.BlockComfortCenter__content'),
    {
      scale: 0.8,
      borderRadius: '80px',
    },
    {
      scrollTrigger: {
        trigger: BlockComfortCenter_node.value,
        start: 'top bottom',
        end: 'top 35%',
        scrub: 1,
      },
      scale: 1,
      borderRadius: '0px',
    }
  )
})
</script>

<template>
  <section class="BlockComfortCenter" ref="BlockComfortCenter_node">
    <div class="BlockComfortCenter__content" id="malls">
      <div class="BlockComfortCenter__discription">
        <h2 class="BlockComfortCenter__h2">
          Удобно, когда торговый центр <span class="BlockComfortCenter__h2Span">близко</span>
        </h2>
        <p class="BlockComfortCenter__p1">В&nbsp;нём магазины, кинотеатр, батутный центр и&nbsp;кафе.</p>
        <p class="BlockComfortCenter__p2">
          А&nbsp;ещё тут можно найти всякую всячину, потому что &laquo;Колумб&raquo; побольше многих торговых центров
          в&nbsp;городе.
        </p>
      </div>

      <div class="BlockComfortCenter__info">
        <div class="BlockComfortCenter__infoItem" v-for="item in objBlockComfortCenter">
          <h4 class="BlockComfortCenter__h4">{{ item.digit }}</h4>
          <p class="BlockComfortCenter__itemSub">{{ item.title }}</p>
        </div>
      </div>

      <img class="BlockComfortCenter__img" src="/img/BlockComfortCenter.png" width="1890" height="2112" />
    </div>
  </section>
</template>

<style lang="scss">
.BlockComfortCenter__content {
  padding: var(--offset_chapter) 0;
  @include setPaddingSides(var(--global_padding_content));
  @include setGridLayout();
  position: relative; //for helper
  background-color: $c_body_hover;
  transform-origin: center bottom;
}

.BlockComfortCenter__discription {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
}

.BlockComfortCenter__h2 {
  @include setFontStyle1();
  color: $c_text;
  max-width: 500px;
  margin-bottom: 35px;
}

.BlockComfortCenter__h2Span {
  @include setFontStyle2();
  color: $c_primary;
  line-height: 0%;
  letter-spacing: 0em;
}
.BlockComfortCenter__p1 {
  @include setFontStyle12();
  color: $c_text;
  margin-bottom: 24px;
  max-width: 520px;
}

.BlockComfortCenter__p2 {
  @include setFontStyle12();
  color: $c_text;
  max-width: 410px;
}

.BlockComfortCenter__info {
  max-width: 266px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 58px;
  row-gap: 40px;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;
}

.BlockComfortCenter__h4 {
  @include setFontStyle7();
  color: $c_text;
}

.BlockComfortCenter__itemSub {
  @include setFontStyle9();
  color: $c_text;
}

.BlockComfortCenter__img {
  max-width: 630px;
  width: 100%;
  height: auto;
  object-fit: cover;
  min-height: 661px;
  margin-left: -15px;
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 3;
  justify-self: center;
}

@media screen and (max-width: 1170px) {
  .BlockComfortCenter__content {
    overflow: hidden;
  }
  .BlockComfortCenter__discription {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-bottom: 40px;
  }
  .BlockComfortCenter__h2 {
    max-width: 400px;
  }
  .BlockComfortCenter__h2Span {
    line-height: var(--line_height_rule_2);
  }
  .BlockComfortCenter__p2 {
    max-width: 600px;
  }
  .BlockComfortCenter__info {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 3;
    grid-row-end: 4;
    max-width: 100%;
  }

  .BlockComfortCenter__img {
    margin-top: 0;
    margin-bottom: 60px;
    margin-right: -50px;
    max-width: 629px;
    justify-self: flex-end;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}

@media screen and (max-width: 740px) {
  .BlockComfortCenter__h2 {
    max-width: 350px;
    margin-bottom: 24px;
  }

  .BlockComfortCenter__h2Span {
    line-height: 0;
  }
  .BlockComfortCenter__p1 {
    max-width: 240px;
    margin-bottom: 30px;
  }
  .BlockComfortCenter__p2 {
    max-width: 240px;
  }
  .BlockComfortCenter__discription {
    margin-bottom: 0px;
  }

  .BlockComfortCenter__info {
    gap: 30px;
    row-gap: 41px;
    justify-content: space-between;
    max-width: 250px;
  }

  .BlockComfortCenter__img {
    margin-bottom: 30px;
    margin-top: -30px;
    margin-left: 20px;

    width: 407px;
    min-height: 455px;
    max-width: none;
  }
}
</style>
