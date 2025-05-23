<script lang="ts" setup>
export interface IPartPlanCardTagListProps {
  tag_list: string[]
}

defineProps<IPartPlanCardTagListProps>()
</script>

<template>
  <ul class="PartPlanCardTagList">
    <li class="PartPlanCardTagList__tag" v-for="tag of tag_list">
      {{ tag }}
    </li>
  </ul>
</template>

<style lang="scss">
.PartPlanCardTagList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style-type: none;
}

.PartPlanCardTagList__tag {
  padding: 6px 12px;
  color: var(--primary-on-primary, #54504e);
  font-variant-numeric: lining-nums proportional-nums;
  /* control/lighter/m 14-18 */
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  text-transform: lowercase;
  background: var(--secondary-tonal, rgba(111, 166, 201, 0.2));

  border-radius: 4px;
}
</style>
