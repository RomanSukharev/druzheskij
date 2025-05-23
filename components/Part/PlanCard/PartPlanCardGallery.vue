<script setup lang="ts">
import type { ResponseImageType } from '@/types/ResponseType'
import type { IPopupGalleryProps } from '@/components/Popup/PopupGallery.vue'

export interface IPlanCardGalleryProps {
  images: ResponseImageType[]
}

var popup_gallery_props = useState<IPopupGalleryProps | null>('popup_gallery_props', () => null)

var props = defineProps<IPlanCardGalleryProps>()

var img_list = computed(
  () =>
    props.images.map((i) => ({
      src: i?.previews?.medium ?? i.path,
      title: i.name,
    })) || []
)

var handlerClickImg = (img_idx: number) => {
  var img_list = props.images.map((i) => ({
    src: i.path,
    title: i.name,
  }))

  popup_gallery_props.value = {
    imgs: img_list,
    current_img_idx: img_idx,
  }
}
</script>

<template>
  <UICardGallery :img_list="img_list" @clickImg="handlerClickImg" />
</template>
