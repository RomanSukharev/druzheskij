<script lang="ts" setup>
import type { IHouse } from '@/types/FrontTypes'

defineProps<{
  house: IHouse
}>()

var { link_active, node_nav, header_group_h, nodes_listNavA } = useTabScrollDependent()
</script>

<template>
  <article class="BlockPlanCatalogHouse">
    <div class="BlockPlanCatalogHouse__header" :id="house.anchor_link">
      <h3 class="BlockPlanCatalogHouse__h3">{{ house.house_name }}</h3>
      <p v-if="house.ready_date" class="BlockPlanCatalogHouse__p">Срок сдачи: {{ house.ready_date }}</p>
    </div>

    <nav ref="node_nav" id="BlockPlanCatalogHouse__nav" class="BlockPlanCatalogHouse__nav">
      <ul class="BlockPlanCatalogHouse__ul">
        <li v-for="(link, idx) of house.links">
          <NuxtLink
            ref="nodes_listNavA"
            :class="link_active === idx ? 'BlockPlanCatalogHouse__navA_active' : 'BlockPlanCatalogHouse__navA'"
            :href="link.href"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="BlockPlanCatalogHouse__planList">
      <div class="BlockPlanCatalogHouse__planGroups" :id="plan_group.link" v-for="plan_group of house.plans_groups">
        <h5 ref="header_group_h" class="BlockPlanCatalogHouse__planGroupsH5">
          {{ plan_group.type }}
        </h5>
        <div class="BlockPlanCatalogHouse__planGroupCardList">
          <BlockPlanCatalogCard v-for="plan_item of plan_group.plans" :plan="plan_item" :id="plan_item.article" />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.BlockPlanCatalogHouse__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
  // @include useLCWP();
  padding-left: var(--inline-offset);
  padding-right: var(--inline-offset);
}

.BlockPlanCatalogHouse__h3 {
  font-family: NeutralFace;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: $c_text;

  margin: 0 0 5px 0;
}

.BlockPlanCatalogHouse__p {
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: $c_text;

  max-width: 120px;
}

.BlockPlanCatalogHouse__nav {
  @include hideScroll();

  position: sticky;
  top: var(--header_height);
  padding: 20px 0 20px var(--inline-offset);
  margin: 0 0 69px 0;
  overflow: auto;

  backdrop-filter: blur(10px);
  z-index: 100;
}

.BlockPlanCatalogHouse__ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
}

.BlockPlanCatalogHouse__navA {
  text-decoration: none;
  @include setTabBtn();
}

.BlockPlanCatalogHouse__navA_active {
  text-decoration: none;
  @include setTabBtn_active();
}

.BlockPlanCatalogHouse__planList {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-left: var(--inline-offset);
  padding-right: var(--inline-offset);
}

.BlockPlanCatalogHouse__planGroups {
  scroll-margin-top: 140px;
}

.BlockPlanCatalogHouse__planGroupsH5 {
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: $c_text;

  margin: 0 0 60px 0;
}

.BlockPlanCatalogHouse__planGroupCardList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

@media screen and (max-width: 1279px) {
  .BlockPlanCatalogHouse {
    gap: 100px;
  }

  .BlockPlanCatalogHouse__header {
    align-items: flex-start;
    margin: 0 0 0 0;
  }

  .BlockPlanCatalogHouse__h3 {
    font-size: 40px;
    margin: 0 0 25px 0;
  }

  .BlockPlanCatalogHouse__planGroupsH5 {
    margin: 0 0 52px 0;
  }

  .BlockPlanCatalogHouse__planList {
    gap: 80px;
  }
}

@media screen and (max-width: 719px) {
  .BlockPlanCatalogHouse__header {
    flex-direction: column;
    margin: 0 0 0 0;
  }

  .BlockPlanCatalogHouse__h3 {
    font-size: 32px;
    line-height: 125%;
    margin: 0 0 8px 0;
  }

  .BlockPlanCatalogHouse__p {
    font-size: 14px;
    line-height: 120%;
    max-width: 100%;

    br {
      display: none;
    }
  }

  .BlockPlanCatalogHouse__nav {
    margin: 0 0 35px 0;
  }

  .BlockPlanCatalogHouse__planGroupsH5 {
    margin: 0 0 20px 0;
  }

  .BlockPlanCatalogHouse__planList {
    gap: 50px;
  }

  .BlockPlanCatalogHouse__planGroupCardList {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
