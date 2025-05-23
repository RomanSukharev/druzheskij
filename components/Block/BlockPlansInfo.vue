<script setup lang="ts">
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/all'

var BlockPlansInfo_node = ref<HTMLElement>()
var tags = ['Квартиры правильной формы', 'Ниши под кухню', 'Мастер-спальни', 'Террасы', 'Гардеробные']

onMounted(() => {
  gsap.fromTo(
    BlockPlansInfo_node.value!.querySelector('.BlockPlansInfo__content'),
    { scale: 0.8, borderRadius: '80px' },
    {
      scrollTrigger: {
        trigger: BlockPlansInfo_node.value,
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
</script>

<template>
  <section class="BlockPlansInfo" id="plans" ref="BlockPlansInfo_node">
    <div class="BlockPlansInfo__content">
      <div class="BlockPlansInfo__hWrap">
        <h2 class="BlockPlansInfo__h">планировки</h2>
        <p class="BlockPlansInfo__p">
          Их&nbsp;в&nbsp;проекте более десяти. Есть большие и&nbsp;поменьше. Те, которые в&nbsp;кирпичной <br />
          секции, отметили специальным ярлыком.
        </p>
      </div>
      <div class="BlockPlansInfo__img">
        <img width="560" height="652" src="/img/plan.webp" alt="планировка" />
      </div>
      <div class="BlockPlansInfo__other">
        <h3>а ещё</h3>
        <div class="BlockPlansInfo__tags">
          <p v-for="tag in tags" :key="tag">{{ tag }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockPlansInfo__content {
  @include useLCWP();
  padding-top: 53px;
  padding-bottom: 53px;
  background-color: $c_body_hover;
  @include setGridLayout();
  position: relative;
}

.BlockPlansInfo__img {
  grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 1;
  grid-row-end: 20;

  span {
    font-size: 18.065px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0.181px;
  }

  img {
    width: clamp(560px, 50%, 100%);
    min-height: auto;
  }
}

.BlockPlansInfo__hWrap {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 5;
  grid-row-end: 8;
}

.BlockPlansInfo__h {
  color: $c_text;
  @include setFontStyle1();
  font-weight: 700;
  margin-bottom: 40px;
}

.BlockPlansInfo__p {
  color: $c_text;
  @include setFontStyle3();
}

.BlockPlansInfo__other {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 14;
  grid-row-end: 16;

  h3 {
    color: $c_text;
    margin-bottom: 25px;

    font-family: 'PlayfairDisplay';
    font-size: 32px;
    font-style: italic;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
  }

  p {
    @include setFontStyle8();
    border-radius: 15px;
    background-color: $c_body;
    color: $c_text;
    padding: 5px 13px;
  }
}

.BlockPlansInfo__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media screen and (max-width: 1170px) {
  .BlockPlansInfo__content {
    padding-top: var(--offset_chapter);
    padding-bottom: var(--offset_chapter);
  }

  .BlockPlansInfo__other,
  .BlockPlansInfo__hWrap {
    grid-column-end: 9;
  }

  .BlockPlansInfo__tags {
    max-width: 500px;
  }

  .BlockPlansInfo__hWrap {
    max-width: 424px;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  .BlockPlansInfo__img {
    margin: 80px 0;
    grid-column-start: 2;
    grid-column-end: 7;
    grid-row-start: 10;
    grid-row-end: 15;
  }

  .BlockPlansInfo__other {
    grid-row-start: 18;
    grid-row-end: 20;
  }

  .BlockPlansInfo__img {
    display: grid;
    span {
      font-size: 18.065px;
      line-height: 130%;
      letter-spacing: 0.181px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 740px) {
  .BlockPlansInfo__hWrap {
    max-width: 292px;
  }
  .BlockPlansInfo__img {
    grid-column-start: 1;
    grid-column-end: 9;
    margin: 50px 0;
    overflow-x: auto;
    @include hideScroll();
    img {
      min-height: 432px;
      min-width: 371px;
    }
  }
  .BlockPlansInfo__other {
    h3 {
      font-size: 36px;
    }
    grid-column-start: 1;
    grid-column-end: 9;
  }

  .BlockPlansInfo__tags {
    p:nth-child(1) {
      order: 1;
    }
    p:nth-child(2) {
      order: 4;
    }
    p:nth-child(3) {
      order: 5;
    }
    p:nth-child(4) {
      order: 3;
    }
    p:nth-child(5) {
      order: 2;
    }
  }
}
</style>
