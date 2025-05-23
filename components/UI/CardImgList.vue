<script lang="ts" setup>
import type { IImgLazyLoadProps } from "@/components/UI/ImgLazyLoad.vue";

export interface ICardImgListProps {
  img_list: ICardImgListPropsImgListItem[];
}

export interface ICardImgListPropsImgListItem extends IImgLazyLoadProps {
  title?: string;
  description?: string;
}

defineProps<ICardImgListProps>();

var node_CardImgList = ref();
var observer_was_triggered = useClearableObserver(node_CardImgList);
</script>

<template>
  <div class="CardImgList" v-grabscroll ref="node_CardImgList">
    <article class="CardImgList__item" v-for="img of img_list">
      <UIImgLazyLoad
        class_root="CardImgList__UIImgLazyLoadRoot"
        class="CardImgList__UIImgLazyLoad"
        v-bind="img"
        :observer_was_triggered="observer_was_triggered"
        :observer_options_anim_img="{ rootMargin: '-108px 0px -108px 0px' }"
      />
      <div class="CardImgList__textContent">
        <h5 class="CardImgList__h5">{{ img.title }}</h5>
        <p class="CardImgList__p">{{ img.description }}</p>
      </div>
    </article>
  </div>
</template>

<style lang="scss">
.CardImgList {
  @include hideScroll();
  overflow: auto;

  display: flex;
  gap: 20px;
  max-width: 100%;
}

.CardImgList__item {
  position: relative;
  height: 216px;
  flex-shrink: 0;
}

.CardImgList__UIImgLazyLoadRoot {
  display: block;
  border-radius: 15px;
  overflow: hidden;
  height: 216px;
}

.CardImgList__UIImgLazyLoad {
  display: block;
  height: 100%;
  width: auto;
}

.CardImgList__h5 {

  color: $c_body;

  position: absolute;
  bottom: 24px;
  left: 24px;
}

.CardImgList__p {

  color: $c_body;

  position: absolute;
  bottom: 24px;
  right: 24px;
}
</style>
