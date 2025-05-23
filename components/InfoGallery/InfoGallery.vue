<script setup lang="ts">
import InfoGalleryTitle from "@/components/InfoGallery/InfoGalleryTitle.vue";
import InfoGalleryPreview from "@/components/InfoGallery/InfoGalleryPreview.vue";
import InfoGalleryContent from "@/components/InfoGallery/InfoGalleryContent.vue";
import InfoGallerySlideImgList from "@/components/InfoGallery/InfoGallerySlideImgList.vue";

interface IInfoGallery {
  title: string
  mini_img_list: string[]
}
var props = defineProps<IInfoGallery>()
</script>

<template>
  <div class="InfoGallery">
    <InfoGalleryTitle :text="title" />
    <InfoGalleryPreview selected_id="" img_src_list="" />
    <InfoGalleryContent selected_id="" content_list="" />
    <InfoGallerySlideImgList selected_id="" selected_img="" :img_list="mini_img_list" />
  </div>
</template>

<style lang="scss">
.InfoGallery {
  position: relative;
  will-change: transform;
  @include setGridLayout();
  @include setFontStyle10();
  background-color: $c_body_hover;
}
</style>