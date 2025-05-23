<script setup lang="ts">
interface IInfoGalleryPreview {
  img_src_list: string[]
  selected_id: number
}
defineProps<IInfoGalleryPreview>()
</script>

<template>
  <div class="InfoGallery__preview">
    <img
        v-for="(src, i) of img_src_list"
        :key="src"
        :class="{show: selected_id === i + 1}"
        class="InfoGallery__previewImg"
        height="1000"
        width="700"
        alt="картинка"
        :src="src"
    />
  </div>
</template>

<style lang="scss">
.InfoGallery__previewImg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: opacity;
  transition: opacity 400ms;
  opacity: 0;
  z-index: 1;

  &.show {
    opacity: 1;
  }
}

.InfoGallery__preview {
  will-change: transform, opacity;
  transition: background-image .5s ease-in-out;
  align-self: stretch;
  grid-column: span 8;
  grid-row-start: 1;
  grid-row-end: 4;
  min-height: 700px;
}
</style>