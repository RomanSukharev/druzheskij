<script lang="ts" setup>
import type { IImgLazyLoadProps } from "@/components/UI/ImgLazyLoad.vue";

export interface IImgScroll {
  img: IImgLazyLoadProps;
}

defineProps<IImgScroll>();

var node_ImgScroll = ref();

onMounted(() => {
  node_ImgScroll.value.scrollLeft = node_ImgScroll.value.scrollWidth;
});
</script>

<template>
  <div class="ImgScroll" v-grabscroll ref="node_ImgScroll">
    <img
      class="ImgScroll__img"
      :src="img.src"
      :srcset="img.srcset"
      :height="img.height"
      :width="img.width"
      :alt="img.alt"
    />
  </div>
</template>

<style lang="scss">
.ImgScroll {
  height: 100%;
  width: 100%;

  overflow: auto;
  @include hideScroll();
}

.ImgScroll__img {
  display: block;
  height: 100%;
  width: auto;
  margin: 0 auto;
  border-radius: 40px;
}

@media screen and (max-width: 1170px) {
  .ImgScroll__img {
    padding: 0 20px;
    border-radius: 60px/40px;
  }
}
</style>
