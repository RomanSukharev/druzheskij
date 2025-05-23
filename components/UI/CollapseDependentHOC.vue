<script lang="ts" setup>
defineProps<{ modelValue: boolean; class_name: string; parent_click: boolean }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div
    @mouseover="parent_click && $emit('update:modelValue', true)"
    @mouseleave="parent_click && $emit('update:modelValue', false)"
    class="CollapseDependentHOC"
    :class="class_name"
  >
    <div
      @mouseover="!parent_click && $emit('update:modelValue', true)"
      @mouseleave="!parent_click && $emit('update:modelValue', false)"
      class="CollapseDependentHOC__header"
      :class="`${class_name}__header`"
    >
      <slot name="header" :is_open="modelValue" />
    </div>
    <div class="CollapseDependentHOC__body" :class="{ is_open: modelValue }">
      <div class="CollapseDependentHOC__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.CollapseDependentHOC__header {
  cursor: pointer;
  user-select: none;
}

.CollapseDependentHOC__body {
  display: grid;
  grid-template-rows: 1fr;
  will-change: transition;
  transition: grid-template-rows 0.2s linear;
  overflow: hidden;
}

// .CollapseDependentHOC__body.is_open {
//   grid-template-rows: 1fr;
// }

.CollapseDependentHOC__content {
  min-height: 0;
}
</style>
