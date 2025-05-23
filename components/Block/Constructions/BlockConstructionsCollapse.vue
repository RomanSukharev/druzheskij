<script setup lang="ts">
import CollapseDependentHOC from "@/components/UI/CollapseDependentHOC.vue";

interface IBlockConstructionsCollapseProps {
  modelValue: boolean
  title: string
  content_text: string
  title_for_label?: string
}

var props = defineProps<IBlockConstructionsCollapseProps>()
var emit = defineEmits(['update:modelValue'])
const model = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
  <CollapseDependentHOC parent_click v-model="model" class_name="BlockConstructionsCollapse">
    <template #header>
      <p class="BlockConstructionsCollapse__title">{{ title }}</p>
    </template>
    <template #default>
      <div class="BlockConstructionsCollapse__content" v-html="content_text"></div>
      <div v-if="title_for_label" class="BlockConstructionsCollapse__label" v-html="title_for_label"></div>
    </template>
  </CollapseDependentHOC>
</template>

<style lang="scss">
.BlockConstructionsCollapse {
  cursor: pointer;
  padding: 16px 24px;
}

.BlockConstructionsCollapse__content {
  margin-top: 16px;
  color: var(--text-base, #4B4B4B);
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}

.BlockConstructionsCollapse__label {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  background-color: $c_primary;
  border-radius: 16px;
  padding: 4px 12px;
  color: $c_body;
  margin-top: 16px;
  width: max-content;
  line-height: 150%;
}

.BlockConstructionsCollapse__title {
  font-family: "Inter";
  font-style: normal;
  font-size: var(--font_size_rule_3);
  line-height: var(--line_height_rule_3);
  font-weight: 600;
  line-height: 140%;
  /* 19.6px */
}

@media (max-width: 1007px) {
  .BlockConstructionsCollapse__content {
    margin-top: 16px;
    color: var(--text-base, #4B4B4B);
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    /* 19.6px */
  }

  .BlockConstructionsCollapse__title {
    color: var(--fg-default, #454545);
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
    /* 19.6px */
  }
}

@media (max-width: 719px) {

  .BlockConstructionsCollapse {
    background-color: #FFFFFF;
    border-radius: 4px;
    margin-top: 16px;
  }

  .BlockConstructionsCollapse__content {
    margin-top: 16px;
    color: var(--text-base, #4B4B4B);
    font-size: 13px;
    font-weight: 400;
    line-height: 140%;
    /* 19.6px */
  }
  
  .BlockConstructionsCollapse__label {
    font-size: 13px;
  }

  .BlockConstructionsCollapse__title {
    color: var(--fg-default, #454545);
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    /* 19.6px */
  }
}
</style>