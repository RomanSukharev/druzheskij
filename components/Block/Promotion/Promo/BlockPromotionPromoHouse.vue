<script lang="ts" setup>
import type { IHouse } from '@/types/FrontTypes'

defineProps<{
  house: IHouse
}>()

var { link_active, node_nav, header_group_h, nodes_listNavA } = useTabScrollDependent()
</script>

<template>
  <article class="BlockPromotionPromoHouse">
    <div class="BlockPromotionPromoHouse__header" :id="house.anchor_link">
      <h3 class="BlockPromotionPromoHouse__h3">{{ house.house_name }}</h3>
      <p v-if="house.ready_date" class="BlockPromotionPromoHouse__p">Срок сдачи: {{ house.ready_date }}</p>
    </div>

    <nav ref="node_nav" id="BlockPromotionPromoHouse__nav" class="BlockPromotionPromoHouse__nav">
      <ul class="BlockPromotionPromoHouse__ul">
        <li v-for="(link, idx) of house.links">
          <NuxtLink
            ref="nodes_listNavA"
            :class="link_active === idx ? 'BlockPromotionPromoHouse__navA_active' : 'BlockPromotionPromoHouse__navA'"
            :href="link.href"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="BlockPromotionPromoHouse__planList">
      <div class="BlockPromotionPromoHouse__planGroups" :id="plan_group.link" v-for="plan_group of house.plans_groups">
        <h5 ref="header_group_h" class="BlockPromotionPromoHouse__planGroupsH5">
          {{ plan_group.type }}
        </h5>
        <div class="BlockPromotionPromoHouse__planGroupCardList">
          <BlockPromotionPromoCard v-for="plan_item of plan_group.plans" :plan="plan_item" :id="plan_item.article" />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.BlockPromotionPromoHouse__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
  @include useLCWP();
}

.BlockPromotionPromoHouse__h3 {
  font-family: NeutralFace;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: $c_text;

  margin: 0 0 5px 0;
}

.BlockPromotionPromoHouse__p {
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: $c_text;

  max-width: 120px;
}

.BlockPromotionPromoHouse__nav {
  @include hideScroll();

  position: sticky;
  top: var(--header_height);
  padding: 20px 0 20px var(--global_padding_content);
  margin: 0 0 69px 0;
  overflow: auto;

  backdrop-filter: blur(10px);
  z-index: 100;
}

.BlockPromotionPromoHouse__ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
}

.BlockPromotionPromoHouse__navA {
  text-decoration: none;
  @include setTabBtn();
}

.BlockPromotionPromoHouse__navA_active {
  text-decoration: none;
  @include setTabBtn_active();
}

.BlockPromotionPromoHouse__planList {
  @include setFlexColumn(100px);
  @include useLCWP();
}

.BlockPromotionPromoHouse__planGroups {
  scroll-margin-top: 140px;
}

.BlockPromotionPromoHouse__planGroupsH5 {
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: $c_text;

  margin: 0 0 60px 0;
}

.BlockPromotionPromoHouse__planGroupCardList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

@media screen and (max-width: 1170px) {
  .BlockPromotionPromoHouse {
    gap: 100px;
  }

  .BlockPromotionPromoHouse__header {
    align-items: flex-start;
    margin: 0 0 0 0;
  }

  .BlockPromotionPromoHouse__h3 {
    font-size: 40px;
    margin: 0 0 25px 0;
  }

  .BlockPromotionPromoHouse__planGroupsH5 {
    margin: 0 0 52px 0;
  }

  .BlockPromotionPromoHouse__planList {
    gap: 80px;
  }
}

@media screen and (max-width: 740px) {
  .BlockPromotionPromoHouse__header {
    flex-direction: column;
    margin: 0 0 0 0;
  }

  .BlockPromotionPromoHouse__h3 {
    font-size: 32px;
    line-height: 125%;
    margin: 0 0 8px 0;
  }

  .BlockPromotionPromoHouse__p {
    font-size: 14px;
    line-height: 120%;
    max-width: 100%;

    br {
      display: none;
    }
  }

  .BlockPromotionPromoHouse__nav {
    margin: 0 0 35px 0;
  }

  .BlockPromotionPromoHouse__planGroupsH5 {
    margin: 0 0 20px 0;
  }

  .BlockPromotionPromoHouse__planList {
    gap: 50px;
  }
}
</style>
