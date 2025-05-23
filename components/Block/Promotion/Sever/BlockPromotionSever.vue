<script setup lang="ts">
import { IHouse } from '@/types/FrontTypes'

export interface IBlockPromotionSever {
  house_list: IHouse[]
  min_payment: string
}

var data_block_promotion_sever = useState<IBlockPromotionSever>('data_block_promotion_sever', () => ({
  house_list: [],
  min_payment: '',
}))
</script>

<template>
  <section class="BlockPromotionSever" id="plans" v-if="data_block_promotion_sever.house_list.length">
    <BlockPromotionSeverHouse
      v-for="house of data_block_promotion_sever.house_list"
      :house="house"
      :key="house.house_name"
    />
  </section>
</template>

<style>
.BlockPromotionSever {
  display: flex;
  flex-direction: column;
  gap: 150px;

  margin-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
}

@media screen and (max-width: 1170px) {
  .BlockPromotionSever {
    gap: 100px;
  }
}
</style>
