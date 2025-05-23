<script lang="ts" setup>
export interface IPartPlanCardRestProps {
  remains_percent: number
}

var props = defineProps<IPartPlanCardRestProps>()

var style_rest_mark = computed(() => ({
  background: props.remains_percent < 50 ? '#FF6969' : props.remains_percent < 90 ? '#F8B28B' : '#AFD1AC',
}))
var handle_rest =ref(props.remains_percent === 100 ? 95 : props.remains_percent)
</script>

<template>
  <div class="PartPlanCardRest">
    <div class="PartPlanCardRest__mark" :style="style_rest_mark"></div>
    <div class="PartPlanCardRest__text">доступно {{ handle_rest }}% квартир данной планировки</div>
  </div>
</template>

<style lang="scss">
.PartPlanCardRest {
  display: flex;
  gap: 6px;
  align-items: flex-start;
}

.PartPlanCardRest__mark {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  transform: translateY(6px);
}

.PartPlanCardRest__text {
  color: #586267;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
}
</style>
