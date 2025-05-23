<script setup lang="ts">
interface IInfoGalleryTitle {
  text: string
}
defineProps<IInfoGalleryTitle>()
</script>

<template>
  <div class="InfoGallery__hWrap">
    <h1 class="InfoGallery__h">{{text}}</h1>
  </div>
</template>

<style lang="scss">
.InfoGallery__hWrap {
  grid-column-start: 9;
  grid-column-end: 13;
}

.InfoGallery__h {
  @include setFontStyle1();
  color: $c_text;
}
</style>
