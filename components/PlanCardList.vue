<script lang="ts" setup>
import type { IHouse } from '@/types/FrontTypes'

var props = defineProps<{
  house: IHouse
}>()

var { link_active, node_nav, header_group_h, nodes_listNavA } = useTabScrollDependent()
</script>

<template>
  <section class="PlanCardList">
    <nav ref="node_nav" id="PlanCardList__nav" class="PlanCardList__nav">
      <ul class="PlanCardList__ul">
        <li v-for="(link, idx) of house.links">
          <NuxtLink
            ref="nodes_listNavA"
            :class="link_active === idx ? 'PlanCardList__navA_active' : 'PlanCardList__navA'"
            :href="link.href"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="PlanCardList__planList">
      <div class="PlanCardList__planGroups" :id="plan_group.link" v-for="plan_group of house.plans_groups">
        <h5 ref="header_group_h" class="PlanCardList__planGroupsH5">
          {{ plan_group.type }}
        </h5>
        <div class="PlanCardList__planGroupCardList">
          <PlanCard v-for="plan_item of plan_group.plans" :plan="plan_item" :id="plan_item.article" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.PlanCardList {
  position: relative;
}

.PlanCardList__nav {
  @include hideScroll();

  position: sticky;
  top: var(--header_height);
  padding: 20px 0 20px var(--global_padding_content);
  margin: 0 0 69px 0;
  overflow: auto;

  backdrop-filter: blur(10px);
  z-index: 100;
}

.PlanCardList__ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
}

.PlanCardList__navA {
  text-decoration: none;
  @include setTabBtn();
}

.PlanCardList__navA_active {
  text-decoration: none;
  @include setTabBtn_active();
}

.PlanCardList__planList {
  @include setFlexColumn(100px);
  @include useLCWP();
}

.PlanCardList__planGroups {
  scroll-margin-top: 140px;
}

.PlanCardList__planGroupsH5 {
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: $c_text;

  margin: 0 0 60px 0;
}

.PlanCardList__planGroupCardList {
  @include setGridLayout();
  row-gap: 40px;
}

@media screen and (max-width: 1170px) {
  .PlanCardList__planGroupsH5 {
    margin: 0 0 52px 0;
  }

  .PlanCardList__planList {
    gap: 80px;
  }
}

@media screen and (max-width: 740px) {
  .PlanCardList__nav {
    margin: 0 0 35px 0;
  }

  .PlanCardList__planGroupsH5 {
    margin: 0 0 20px 0;
  }

  .PlanCardList__planList {
    gap: 50px;
  }
}
</style>
