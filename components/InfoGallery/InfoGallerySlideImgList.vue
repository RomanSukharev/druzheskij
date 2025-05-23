<script setup lang="ts">
interface IImg {
  src: string
  id: number
}
interface IInfoGallerySlideImgList {
  img_list: IImg[]
  selected_id: number
  selected_img: IImg
}
defineProps<IInfoGallerySlideImgList>()
</script>

<template>
  <div class="InfoGallery__imgList">
    <div
        v-for="img of img_list"
        :key="img.id"
        :class="{is_active: selected_id === img.id}"
        class="InfoGallery__imgItem"
        @click="selected_id = (selected_img = img).id"
    >
      <img :src="img.src" alt="картинка">
    </div>
  </div>
</template>

<style lang="scss">
.InfoGallery__imgList {
  align-self: end;
  display: flex;
  gap: 8px;
  grid-column-start: 9;
  grid-column-end: 13;
}

.InfoGallery__imgItem {
  flex-shrink: 0;
  width: 73px;
  height: 73px;
  border: 3px solid transparent;
  cursor: pointer;
}

.InfoGallery__imgItem.is_active, .InfoGallery__imgItem:hover {
  border: 3px solid #FF7060;
}

.InfoGallery__imgItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>