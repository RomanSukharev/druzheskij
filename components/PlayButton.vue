<script lang="ts" setup>
import { IPopupYouTubeProps } from '@/components/PopupYouTube.vue'
import { parseYouTubeUrl } from '@/utils/parseYouTubeUrl'

var props = defineProps<{ dark?: boolean }>()

</script>

<template>
  <svg
    class="PlayButton"
    :class="{ dark }"
    width="80"
    height="82"
    viewBox="0 0 80 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      id="in"
      x="7.95874"
      y="8.4668"
      width="63.6689"
      height="64.6485"
      rx="31.8345"
      fill="#F3F3F3"
    />
    <rect
      id="out"
      x="1.60956"
      y="1.99432"
      width="76.7809"
      height="78.0117"
      rx="38.3904"
      stroke="#F3F3F3"
      stroke-width="3.21911"
    />
    <path
      d="M30.0046 30.688C30.0046 30.402 30.0719 30.1215 30.1991 29.8705C30.6171 29.0586 31.5621 28.7652 32.3126 29.2173L51.0128 40.4513C51.2672 40.6045 51.4762 40.8314 51.6161 41.1064C52.0341 41.9183 51.7615 42.9424 51.0128 43.3927L32.3126 54.6267C32.0845 54.7649 31.824 54.8382 31.5584 54.8389C30.7007 54.8389 30.0046 54.086 30.0046 53.1579V30.688Z"
      fill="#4B4B4B"
    />
  </svg>
</template>

<style lang="scss">
.PlayButton {
  cursor: pointer;

  rect, path {
    transition: all 0.2s ease-in-out;
  }

  &.dark {
    rect#in {
      fill: $c_text;
    }

    rect#out {
      stroke: $c_text;
    }

    path {
      fill: $c_body_hover;
    }
  }

  &:hover {
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
@media screen and (max-width: 740px){
  .PlayButton {
    width: 50px;
    height: 50px;
  }
}
</style>