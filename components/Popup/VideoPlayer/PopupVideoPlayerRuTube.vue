<script lang="ts" setup>
import type { IVideoData } from './IVideoData'

export interface IPopupVideoPlayerRuTubeProps {
  video: Required<IVideoData>
}

var props = defineProps<IPopupVideoPlayerRuTubeProps>()
var emit = defineEmits(['error', 'playerWasInit'])
var video_link = ref('')

var handleEventMessagePlayerPlay = (event: MessageEvent) => {
  var message = JSON.parse(event.data)

  if (message.type !== 'player:ready') return

  var iframe = document.querySelector('.PopupVideoPlayerRuTube__iframe') as HTMLIFrameElement

  iframe.contentWindow!.postMessage(
    JSON.stringify({
      type: 'player:setCurrentTime',
      data: {
        time: props.video.start_time,
      },
    }),
    '*'
  )

  props.video.autoplay &&
    iframe.contentWindow!.postMessage(
      JSON.stringify({
        type: 'player:play',
        data: {},
      }),
      '*'
    )

  emit('playerWasInit')
  window.removeEventListener('message', handleEventMessagePlayerPlay)
}

onMounted(() => {
  window.addEventListener('message', handleEventMessagePlayerPlay)

  video_link.value = parseRuTubeUrl(props.video.link)?.video_link || ''
  if (!video_link.value) {
    emit('error', 'Некорректная ссылка на видео')
  }
})

onUnmounted(() => {
  window.removeEventListener('message', handleEventMessagePlayerPlay)
})
</script>

<template>
  <div class="PopupVideoPlayerRuTube">
    <iframe
      class="PopupVideoPlayerRuTube__iframe"
      v-if="video_link"
      width="100%"
      height="100%"
      :src="video_link"
      frameBorder="0"
      allow="clipboard-write; autoplay"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen
    ></iframe>
  </div>
</template>

<style lang="scss">
.PopupVideoPlayerRuTube {
  width: 100%;
  height: 100%;
}
</style>
