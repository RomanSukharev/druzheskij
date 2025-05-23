<script lang="ts" setup>
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/all'

import PlayButton from '@/components/PlayButton.vue'
import DynamicsDate from '@/components/DynamicsDate.vue'

import type { IResponseObjectsDynamic } from 'types/ResponseType'
import { IPopupVideoPlayerProps } from 'components/Popup/VideoPlayer/PopupVideoPlayer.vue'

var dynamics = useState<IResponseObjectsDynamic[]>('dynamics', () => [])
var popup_video_player_props = useState<IPopupVideoPlayerProps | null>("popup_video_player_props", () => null); //prettier-ignore

var BlockPskDynamics_node = ref<HTMLElement>()

var getPathEasy = () =>
  window.innerWidth <= 1170
    ? 'M0,0 C0,0 0,1 0.241,1 0.348,1 0.297,1 0.6,1 0.731,1 1,0 1,0 '
    : 'M0,0 C0,0 0,1 0.3,1 0.407,1 0.399,1 0.7,1 0.831,1 1,0 1,0 '

var handleClickVideo = (video_link: string) => {
  popup_video_player_props.value = {
    video: {
      link: video_link,
      autoplay: true,
    },
  }
}

onMounted(() => {
  if (!dynamics.value.length) return

  gsap.fromTo(
    BlockPskDynamics_node.value!.querySelector('.BlockPskDynamics__content'),
    { scale: 0.8, borderRadius: '80px' },
    {
      scrollTrigger: {
        trigger: BlockPskDynamics_node.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },

      scale: 1,
      borderRadius: '0px',
      ease: CustomEase.create('custom', getPathEasy()),
    }
  )
})
</script>

<template>
  <section class="BlockPskDynamics" v-if="dynamics.length" ref="BlockPskDynamics_node">
    <div class="BlockPskDynamics__content" id="dynamic">
      <div class="BlockPskDynamics__textContent">
        <h2 class="BlockPskDynamics__h">
          Динамика <br />
          строительства
        </h2>

        <div class="BlockPskDynamics__info">
          <h5 class="BlockPskDynamics__infoH5">лето <span>2025</span></h5>
          <p class="BlockPskDynamics__infoP">планируемый срок сдачи</p>
        </div>
      </div>

      <div v-grabscroll class="BlockPskDynamics__list">
        <div
          v-for="item in dynamics"
          :key="item.link_video"
          class="BlockPskDynamics__item"
          @click="handleClickVideo(item.link_video)"
        >
          <DynamicsDate class="BlockPskDynamics__date" :item="item" />
          <UIImgLazyLoad
            width="350"
            height="350"
            class_root="BlockPskDynamics__item-img-wrap"
            class="BlockPskDynamics__item-img"
            :src="item?.preview?.[0]?.file"
            :alt="item.name"
            animation="Scale"
            alternative_content_bg="black"
          />
          <PlayButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockPskDynamics__content {
  position: relative;
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  @include setFontStyle10();
  line-height: 155%;
  font-weight: 500;
  background-color: $c_body_hover;
}

.BlockPskDynamics__textContent {
  @include useLCWP();

  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}

.BlockPskDynamics__h {
  @include setFontStyle1();
  grid-column: span 3;
  color: $c_text;
  align-self: start;
}

.BlockPskDynamics__info {
  border-radius: 15px;
  background: $c_primary;
  height: max-content;

  align-self: center;
  padding: 20px 15px;

  display: flex;
  align-items: flex-end;
  gap: 15px;
}

.BlockPskDynamics__infoH5 {
  color: #fff;
  text-align: right;
  leading-trim: both;

  text-edge: cap;
  font-family: 'NeutralFace';
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 98%; /* 31.36px */
  text-transform: lowercase;

  word-spacing: 10px;

  span {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-family: 'NeutralFace';
    font-size: 62px;
    font-style: normal;
    font-weight: 400;
    line-height: 98%;
  }
}

.BlockPskDynamics__infoP {
  color: #fff;
  leading-trim: both;

  text-edge: cap;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
  max-width: 125px;
}

.BlockPskDynamics__list {
  padding: 0 var(--global_padding_content);
  width: 100%;
  @include hideScroll();
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 40px;
}

.BlockPskDynamics__item {
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 15px;
  will-change: transition;
  transition: all 0.2s ease-in-out;

  &:hover {
    .PlayButton {
      rect#in {
        fill: $c_primary;
      }

      rect#out {
        stroke: $c_primary;
      }
      path {
        fill: white;
      }
    }
  }

  .BlockPskDynamics__date {
    z-index: 3;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: $c_body;
    line-height: 143%;
  }

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-img-wrap {
    display: block;
  }

  svg {
    z-index: 3;
    cursor: pointer;
    position: absolute;
    bottom: 21px;
    right: 30px;
  }
}

@media screen and (max-width: 1170px) {
  .BlockPskDynamics__list {
    gap: 20px;
  }
}

@media screen and (max-width: 930px) {
  .BlockPskDynamics__textContent {
    flex-direction: column;
    gap: 40px;
  }

  .BlockPskDynamics__info {
    width: 100%;
    justify-content: center;
  }

  .BlockPskDynamics__infoP {
    max-width: none;
  }
}

@media screen and (max-width: 740px) {
  .BlockPskDynamics__textContent {
    margin-bottom: 40px;
  }

  .BlockPskDynamics__info {
    flex-direction: column;
    align-items: flex-start;
  }

  .BlockPskDynamics__item {
    width: 275px;
    height: 275px;

    svg {
      width: 50px;
      height: 50px;
      bottom: 25px;
      right: 25px;
    }
  }
}
</style>
