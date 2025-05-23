<script lang="ts" setup>
export interface IPskTooltipProps {
  position?: 'left' | 'right'
}

defineProps<IPskTooltipProps>()
</script>

<template>
  <div class="PskTooltip">
    <slot />
    <div :class="position ? `PskTooltip__content_${position}` : `PskTooltip__content`">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.PskTooltip {
  width: max-content;
  position: relative;

  &:hover {
    .PskTooltip__content,
    .PskTooltip__content_right,
    .PskTooltip__content_left {
      opacity: 1;
    }
  }
}

.PskTooltip__content {
  background-color: $c_body;
  position: absolute;
  bottom: calc(100% + 16px);
  left: 50%;
  transform: translateX(-50%);

  pointer-events: none;
  transition: opacity 300ms ease-in-out;
  opacity: 0;
  box-shadow: 0px 4px 16px 2px rgba(0, 0, 0, 0.02), 0px 4px 12px 0px rgba(0, 0, 0, 0.03),
    0px 0px 8px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 20px 20px;
  z-index: 1;
}

.PskTooltip__content_right {
  background-color: $c_body;
  position: absolute;
  bottom: calc(100% + 5px);
  left: 50%;

  pointer-events: none;
  transition: opacity 300ms ease-in-out;
  opacity: 0;

  box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 30%);
  border-radius: 6px 6px 6px 0;
  padding: 10px 16px;
  z-index: 1;
}

.PskTooltip__content_left {
  background-color: $c_body;
  position: absolute;
  bottom: calc(100% + 5px);
  right: 50%;

  pointer-events: none;
  transition: opacity 300ms ease-in-out;
  opacity: 0;

  box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 30%);
  border-radius: 6px 6px 0 6px;
  padding: 10px 16px;
  z-index: 1;
}

.PskTooltip__arrow {
  background-color: $c_body;
  position: absolute;
  width: 10px;
  height: 10px;
  left: calc(50% - 5px);
  bottom: -5px;
  transform: rotate(45deg);
  z-index: -50;
}

@media screen and (max-width: 1650px) {
  .PskTooltip__content {
    transform: translateX(-60%);
  }
}

@media screen and (max-width: 1270px) {
  .PskTooltip__content {
    transform: translateX(-50%);
  }
}
</style>
