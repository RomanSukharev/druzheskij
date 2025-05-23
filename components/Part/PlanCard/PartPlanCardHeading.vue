<script setup lang="ts">
export interface IPartPlanCardHeadingProps {
  title: string
  ready_date: string
}

defineProps<IPartPlanCardHeadingProps>()
</script>

<template>
  <div class="PartPlanCardHeading">
    <div class="PartPlanCardHeading__title">{{ title }}</div>
    <div class="PartPlanCardHeading__readyDate" v-if="ready_date">срок сдачи: {{ ready_date }}</div>
  </div>
</template>

<style lang="scss">
.PartPlanCardHeading {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.PartPlanCardHeading__title {
  color: #586267;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}

.PartPlanCardHeading__readyDate {
  color: #586267;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
}
</style>
