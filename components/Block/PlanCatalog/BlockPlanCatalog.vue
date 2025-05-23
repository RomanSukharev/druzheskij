<script setup lang="ts">
import type { IHouse } from '@/types/FrontTypes'

var houses = useState<IHouse[]>("houses", () => []); //prettier-ignore
</script>

<template>
  <section class="BlockPlanCatalog" id="house_list" v-if="houses.length">
    <BlockPlanCatalogHouse v-for="house of houses" :house="house" :key="house.house_name" />
  </section>
</template>

<style>
.BlockPlanCatalog {
  display: flex;
  flex-direction: column;
  gap: 150px;

  margin-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
}

@media screen and (max-width: 1279px) {
  .BlockPlanCatalog {
    gap: 100px;
  }
}
</style>
