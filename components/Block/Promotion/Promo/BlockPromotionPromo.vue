<script setup lang="ts">
import { IHouse } from '@/types/FrontTypes'

export interface IBlockPromotionPromo {
  house_list: IHouse[]
}

var data_block_promotion_promo = useState<IBlockPromotionPromo>('data_block_promotion_promo', () => ({
  house_list: [],
}))
</script>

<template>

  <section class="BlockPromotionPromo" id="house_list" v-if="data_block_promotion_promo.house_list.length">
    <BlockPromotionPromoHouse
      v-for="house of data_block_promotion_promo.house_list"
      :house="house"
      :key="house.house_name"
    />
  </section>
</template>

<style>
.BlockPromotionPromo {
  display: flex;
  flex-direction: column;
  gap: 150px;

  margin-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
}

@media screen and (max-width: 1170px) {
  .BlockPromotionPromo {
    gap: 100px;
  }
}
</style>
