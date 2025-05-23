<script lang="ts" setup>
import { IHouse, IPlansGroups } from '@/types/FrontTypes'

var props = defineProps<{
  house: IHouse
}>()

var { link_active, node_nav, header_group_h, nodes_listNavA } = useTabScrollDependent()

const promo_plans = props.house.plans_groups.reduce((acc: IPlansGroups[], { plans, ...rest }) => {
  const filteredPlans = plans.filter((plan) =>
    ['C/K-L/41', '1K/K-S/2', '2E/K-XS/27', '2E/K-G-M/7', '3ESP/K-XXS/42', '3E/K-XS/24'].includes(plan.article)
  )
  if (filteredPlans.length) {
    acc.push({ ...rest, plans: filteredPlans })
  }
  return acc
}, [])

var filtered_house_links = promo_plans
  .map((i) => {
    return {
      href: `#${i.link}`,
      title: i.type,
    }
  })
  .filter((item) => props.house.links.some((i) => i.href.includes(item.href)))
</script>

<template>
  <section class="PromoPlanCardList">
    <nav ref="node_nav" id="PromoPlanCardList__nav" class="PromoPlanCardList__nav">
      <ul class="PromoPlanCardList__ul">
        <li v-for="(link, idx) of filtered_house_links">
          <a
            ref="nodes_listNavA"
            :class="link_active === idx ? 'PromoPlanCardList__navA_active' : 'PromoPlanCardList__navA'"
            :href="link.href"
          >
            {{ link.title }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="PromoPlanCardList__planList">
      <div class="PromoPlanCardList__planGroups" v-for="plan_group of promo_plans" :id="plan_group.link">
        <h5 v-if="plan_group.plans.length" ref="header_group_h" class="PromoPlanCardList__planGroupsH5">
          {{ plan_group.type }}
        </h5>
        <div class="PromoPlanCardList__planGroupCardList" v-if="plan_group.plans.length">
          <PromoPlanCard v-for="plan_item of plan_group.plans" :plan="plan_item" :id="plan_item.article" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.PromoPlanCardList {
  position: relative;
}

.PromoPlanCardList__nav {
  @include hideScroll();

  position: sticky;
  top: var(--header_height);
  padding: 20px 0 20px var(--global_padding_content);
  margin: 0 0 69px 0;
  overflow: auto;

  backdrop-filter: blur(10px);
  z-index: 100;
}

.PromoPlanCardList__ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
}

.PromoPlanCardList__navA {
  text-decoration: none;
  @include setTabBtn();
}

.PromoPlanCardList__navA_active {
  text-decoration: none;
  @include setTabBtn_active();
}

.PromoPlanCardList__planList {
  @include setFlexColumn(100px);
  @include useLCWP();
}

.PromoPlanCardList__planGroups {
  scroll-margin-top: 140px;
}

.PromoPlanCardList__planGroupsH5 {
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: $c_text;

  margin: 0 0 60px 0;
}

.PromoPlanCardList__planGroupCardList {
  @include setGridLayout();
  row-gap: 40px;
}

@media screen and (max-width: 1170px) {
  .PromoPlanCardList__planGroupsH5 {
    margin: 0 0 52px 0;
  }

  .PromoPlanCardList__planList {
    gap: 80px;
  }
}

@media screen and (max-width: 740px) {
  .PromoPlanCardList__nav {
    margin: 0 0 35px 0;
  }

  .PromoPlanCardList__planGroupsH5 {
    margin: 0 0 20px 0;
  }

  .PromoPlanCardList__planList {
    gap: 50px;
  }
}
</style>
