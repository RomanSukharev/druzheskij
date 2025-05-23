<script setup lang="ts">
interface IContent {
  title: string
  description: string
}
interface IInfoGalleryContent {
  content_list: IContent[]
  selected_id: number
}
defineProps<IInfoGalleryContent>()
</script>

<template>
  <div class="InfoGallery__content">
    <template v-for="(content, idx) of content_list" :key="content.title">
      <div class="InfoGallery__contentWrap" :class="{show: idx + 1 === selected_id}">
        <h2 class="InfoGallery__h2" v-html="content.title"></h2>
        <p v-html="content.description"></p>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.InfoGallery__content {
  position: relative;
  grid-column-start: 9;
  grid-column-end: 13;
  will-change: opacity;
  min-height: 300px;
}

.InfoGallery__contentWrap {
  position: absolute;
  top: 0;
  opacity: 0;
  transition: opacity .4s ease-in-out;

  &.show {
    opacity: 1;
  }
}


.InfoGallery__content p {
  @include setFontStyle3();
  color: $c_text;
}

.InfoGallery__h2 {
  color: $c_primary;
  font-family: "PlayfairDisplay";
  font-size: 60px;
  font-style: italic;
  font-weight: 500;
  line-height: 100%; /* 60px */
  margin-bottom: 40px;
}
</style>
