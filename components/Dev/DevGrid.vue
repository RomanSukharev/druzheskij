<script setup lang="ts">
var is_grid_active = ref(false)
</script>

<template>
  <div class="DevGrid">
    <div class="DevGrid__content" v-if="is_grid_active">
      <div class="DevGrid__gridContainer">
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
        <div class="DevGrid__gridElem"></div>
      </div>
    </div>

    <button class="DevGrid__btn" @click="is_grid_active = !is_grid_active">Grid</button>
  </div>
</template>

<style lang="scss">
.DevGrid {
  position: fixed;
  z-index: 9999;
  overflow: hidden;
  pointer-events: none;
}

.DevGrid__btn {
  position: fixed;
  right: 5px;
  top: 60px;
  pointer-events: all;
}

.DevGrid__content {
  position: fixed;
  inset: 0;

  display: grid;
  margin-left: var(--inline-offset);
  margin-right: var(--inline-offset);
}

.DevGrid__gridContainer {
  @include setGrid();
}

.DevGrid__gridElem {
  height: 100vh;
  background: rgba(0, 128, 0, 0.198);
}
</style>
