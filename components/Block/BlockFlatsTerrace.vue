<script setup lang="ts">
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/all'

import type { IResponsePlansPlansItems } from 'types/ResponseType'

var terrace_plans = useState<IResponsePlansPlansItems[]>("terrace_plans", () => []); //prettier-ignore
var BlockFlatsTerrace_node = ref<HTMLElement>()

var getPathEasy = () =>
  window.innerWidth <= 1170
    ? 'M0,0 C0,0 0,1 0.241,1 0.348,1 0.533,1 0.835,1 0.966,1 1,0 1,0 '
    : 'M0,0 C0,0 0,1 0.3,1 0.407,1 0.399,1 0.7,1 0.831,1 1,0 1,0 '

onMounted(() => {
  if (!terrace_plans.value.length) return

  gsap.fromTo(
    BlockFlatsTerrace_node.value!.querySelector('.BlockFlatsTerrace__content'),
    { scale: 0.8, borderRadius: '80px' },
    {
      scrollTrigger: {
        trigger: BlockFlatsTerrace_node.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },

      scale: 1,
      borderRadius: '0px',
      ease: CustomEase.create('custom', getPathEasy()),
    }
  )
})
</script>

<template>
  <section class="BlockFlatsTerrace" ref="BlockFlatsTerrace_node" v-if="terrace_plans.length">
    <div class="BlockFlatsTerrace__content" id="flats_terrace">
      <h2 class="BlockFlatsTerrace__h2_first">квартиры</h2>
      <h2 class="BlockFlatsTerrace__h2_second">с террасами</h2>
      <p class="BlockFlatsTerrace__p_first">
        Всё-таки есть какое-то особое чувство, когда выходите на&nbsp;террасу в&nbsp;золотой час. Это когда небо перед
        закатом такое красное-красное. Хотя, с&nbsp;близкими на&nbsp;террасе каждый час&nbsp;&mdash; золотой.
      </p>
      <p class="BlockFlatsTerrace__p_second">
        Кстати: таких квартир всего четыре. Две с&nbsp;выходом из&nbsp;спальни и&nbsp;две из&nbsp;кухни-гостиной. Все
        они на&nbsp;двенадцатом этаже.
      </p>

      <div class="BlockFlatsTerrace__planGroupCardList">
        <PlanCard v-for="plan_item of terrace_plans" :plan="plan_item" :id="`terrace_${plan_item.article}`" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockFlatsTerrace__content {
  position: relative;
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);

  @include setPaddingSides(var(--global_padding_content));
  @include setGridLayout();
  background-color: $c_primary;
  transform-origin: center bottom;
}

.BlockFlatsTerrace__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-color: $c_primary;
}

.BlockFlatsTerrace__h2_first {
  @include setFontStyle1();
  color: $c_body;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;
}
.BlockFlatsTerrace__h2_second {
  @include setFontStyle2();
  color: $c_body;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 3;
}

.BlockFlatsTerrace__p_first {
  @include setFontStyle3();
  line-height: 130%;
  color: $c_body;
  margin-top: 55px;
  max-width: 503px;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 4;
}

.BlockFlatsTerrace__p_second {
  @include setFontStyle3();
  line-height: 130%;
  color: $c_body;
  margin-top: 55px;
  max-width: 480px;
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 3;
  grid-row-end: 4;
}

.BlockFlatsTerrace__planGroupCardList {
  grid-column-start: 1;
  grid-column-end: 13;

  @include setGridLayout();
  row-gap: 40px;
  margin: 80px 0 0 0;
}

@media screen and (max-width: 1800px) {
  .BlockFlatsTerrace__bg {
    border-radius: 0 !important;
    left: 0 !important;
    right: 0 !important;
  }
}

@media screen and (max-width: 1170px) {
  .BlockFlatsTerrace__h2_first {
    grid-column-start: 1;
    grid-column-end: 9;
  }
  .BlockFlatsTerrace__h2_second {
    grid-column-start: 1;
    grid-column-end: 9;
    line-height: 80%;
  }

  .BlockFlatsTerrace__p_first {
    line-height: 140%;
    margin-top: 45px;
    max-width: 503px;
    grid-column-start: 1;
    grid-column-end: 9;
  }

  .BlockFlatsTerrace__p_second {
    line-height: 140%;
    margin-top: 40px;
    max-width: 480px;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .BlockFlatsTerrace__planGroupCardList {
    grid-column-end: 9;
  }
}

@media screen and (max-width: 740px) {
  .BlockFlatsTerrace__h2_first {
    grid-column-end: 5;
  }

  .BlockFlatsTerrace__h2_second {
    margin-left: 40px;
    line-height: 50%;

    grid-column-end: 5;
  }

  .BlockFlatsTerrace__p_first {
    margin-top: 40px;
    max-width: 300px;

    grid-column-end: 5;
  }

  .BlockFlatsTerrace__p_second {
    margin-top: 20px;
    max-width: 280px;

    grid-column-end: 5;
  }

  .BlockFlatsTerrace__planGroupCardList {
    grid-column-end: 5;
  }
}
</style>
