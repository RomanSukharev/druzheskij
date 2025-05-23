<script lang="ts" setup>
import type { IVideoData } from './IVideoData'

export interface IPopupVideoPlayerYouTubeProps {
  video: Required<IVideoData>
}

var props = defineProps<IPopupVideoPlayerYouTubeProps>()
var emit = defineEmits(['error', 'playerWasInit'])
var player_you_tube: any

var getSizePLayer = () => {
  var node_PopupVideoPlayerYouTube__player = document.querySelector('.PopupVideoPlayerYouTube')!

  return {
    width: node_PopupVideoPlayerYouTube__player.clientWidth,
    height: node_PopupVideoPlayerYouTube__player.clientHeight,
  }
}

var handleWindowResize = debounce(() => {
  var { height, width } = getSizePLayer()
  player_you_tube.setSize(width, height)
}, 300)

onMounted(async () => {
  try {
    var you_tube_api = await getYouTubeIFrameAPI()

    var { height: player_height, width: player_width } = getSizePLayer()
    
    var video_id = parseYouTubeUrl(props.video.link)?.video_id
    if (!video_id) {
      throw 'Некорректная ссылка на видео'
    }

    player_you_tube = new you_tube_api.Player('youtube_player', {
      height: player_height,
      width: player_width,
      videoId: video_id,
      playerVars: { autoplay: props.video.autoplay, start: props.video.start_time },
      events: {
        onReady: () => {
          emit('playerWasInit')
        },
      },
    })

    window.addEventListener('resize', handleWindowResize)
  } catch (error: any) {
    var error_message = typeof error === 'string' ? error : 'Ошибка воспроизведения'
    emit('error', error_message)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize)
})
</script>

<template>
  <div class="PopupVideoPlayerYouTube">
    <div id="youtube_player"></div>
  </div>
</template>

<style lang="scss">
.PopupVideoPlayerYouTube {
  width: 100%;
  height: 100%;
}
</style>
