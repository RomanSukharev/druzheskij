<script lang="ts" setup>
import type { IVideoData } from './IVideoData'

export interface IPopupVideoPlayerVKProps {
  video: Required<IVideoData>
}

var props = defineProps<IPopupVideoPlayerVKProps>()
var emit = defineEmits(['error', 'playerWasInit'])
var node_iframe = ref<HTMLElement>()
var src_iframe = ref('')

onMounted(async () => {
  try {
    src_iframe.value = parseVKPlayerUrl(props.video.link)?.video_link || ''
    if (!src_iframe.value) throw 'Некорректная ссылка на видео'

    await nextTick()

    var player = window.VK.VideoPlayer(node_iframe.value!)

    player.on('inited', () => {
      player.seek(props.video.start_time)
      props.video.autoplay && player.play()
      emit('playerWasInit')
    })
  } catch (error: any) {
    var error_message = typeof error === 'string' ? error : 'Ошибка воспроизведения'
    emit('error', error_message)
  }
})
</script>

<template>
  <div class="PopupVideoPlayerVK">
    <iframe
      ref="node_iframe"
      :src="src_iframe"
      width="100%"
      height="100%"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style lang="scss">
.PopupVideoPlayerVK {
  width: 100%;
  height: 100%;
}
</style>
