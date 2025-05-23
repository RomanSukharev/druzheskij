<script lang="ts" setup>
import gsap from 'gsap'

import type { IVideoData } from './IVideoData'
import type { IPopupNotifyProps } from '@/components/Popup/PopupNotify.vue'

export interface IPopupVideoPlayerProps {
  video: IVideoData
}

var popup_notify_props = useState<IPopupNotifyProps | null>("popup_notify_props", () => null); //prettier-ignore

var props = defineProps<IPopupVideoPlayerProps>()
var emit = defineEmits(['close'])
var node_ref = ref<HTMLElement>()
var component_name_player = ref('')
var is_PopupVideoPlayer__skeleton = ref(true)
var player_options = ref({ video: { ...props.video } })

var closePopup = () => {
  gsap.to(node_ref.value!.querySelector('.PopupVideoPlayer__player'), {
    y: '-100%',
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!.querySelector('.PopupVideoPlayer__player div'), {
    y: '+120%',
    duration: 1,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!.querySelector('.PopupVideoPlayer__UIButtonClose'), {
    duration: 1,
    opacity: 0,
    ease: 'power1.inOut',
  })

  gsap.to(node_ref.value!, {
    duration: 1,
    backgroundColor: '#00000000',
    ease: 'power1.inOut',
    onComplete: () => {
      emit('close')
    },
  })
}

var handlePlayerError = (error?: any) => {
  var error_message = typeof error === 'string' ? error : 'Неудалось воспроизвести видео'

  popup_notify_props.value = {
    status: 'error',
    text_content: error_message,
  }

  emit('close')
}

usePopup(closePopup)

onMounted(() => {
  gsap.to(node_ref.value!, {
    opacity: 1,
    duration: 0.5,
  })

  try {
    var url = new URL(props.video.link)

    if (typeof player_options.value.video.start_time === 'undefined') {
      player_options.value.video.start_time = parseInt(Object.fromEntries(url.searchParams).t) || 0
    }

    switch (url.host) {
      case 'vk.com': {
        component_name_player.value = `PopupVideoPlayerVK`
        break
      }
      case 'rutube.ru': {
        component_name_player.value = `PopupVideoPlayerRuTube`
        break
      }
      default: {
        component_name_player.value = `PopupVideoPlayerYouTube`
      }
    }
  } catch {
    handlePlayerError()
  }
})
</script>

<template>
  <div class="PopupVideoPlayer" ref="node_ref" @click.self="closePopup">
    <UIButtonClose class="PopupVideoPlayer__UIButtonClose" @click="closePopup" />

    <div class="PopupVideoPlayer__content">
      <div class="PopupVideoPlayer__skeleton" v-if="is_PopupVideoPlayer__skeleton">
        Загрузка плеера
        <UILoader />
      </div>

      <div class="PopupVideoPlayer__player">
        <component
          v-if="component_name_player"
          :is="component_name_player"
          v-bind="player_options"
          @playerWasInit="is_PopupVideoPlayer__skeleton = false"
          @error="handlePlayerError"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.PopupVideoPlayer {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000cc;
  opacity: 0;

  z-index: 6000;

  will-change: opacity;
}

.PopupVideoPlayer__content {
  position: relative;

  width: 1024px;
  aspect-ratio: 16 / 9;
  max-height: 90vh;
  max-width: calc(100% - var(--inline-offset) * 2);

  overflow: hidden;
}

.PopupVideoPlayer__skeleton {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12;
  background-color: black;

  color: #fff;
  font-size: 24px;
}

.PopupVideoPlayer__player {
  position: absolute;
  inset: 0;

  div {
    will-change: transform;
  }
}

.PopupVideoPlayer__UIButtonClose {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 5;
}
</style>
