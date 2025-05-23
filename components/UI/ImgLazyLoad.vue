<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
export interface IImgLazyLoadProps {
  width?: string | number;
  height?: string | number;
  src: string;
  srcset?: string;
  alt?: string;

  animation?: AnimationType;
  alternative_content_bg?: string;
  alternative_content_color?: string;
  no_loading_text?: boolean;

  observer_options_download_img?: IntersectionObserverInit;
  observer_options_anim_img?: IntersectionObserverInit;

  observer_was_triggered?: boolean | undefined;
  touch_disable?: boolean;
  class_root?: string;
}

export type AnimationType = "BlurScale" | "BlurScaleUp" | "Appear" | "UpScale" | "Scale";

var props = withDefaults(defineProps<IImgLazyLoadProps>(), {
  observer_options_download_img: () => ({
    threshold: 0,
    rootMargin: "800px 0px 800px 0px",
  }),

  observer_options_anim_img: () => ({
    rootMargin: "-40% 0px -30% 0px",
  }),

  observer_was_triggered: undefined,
});

var node_ImgLazyLoad = ref();
var node_ImgLazyLoad__observer = ref();
var is_img_loaded = ref(false);
var is_img_showed = ref(false);
var has_error = ref(false);

var img_fake_base64 = "data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="${props.width}" height="${props.height}" viewBox="0 0 ${props.width} ${props.height}"></svg>`); //prettier-ignore

var _srcset = computed(() => {
  if (!is_img_loaded.value || has_error.value) {
    return props.srcset || img_fake_base64;
  }

  return "";
});

//устанавливаем класс img для анимации
var img_class_animation = computed(() => {
  if (props.animation && !is_img_showed.value) {
    return "ImgLazyLoadAnim" + props.animation;
  }

  if (props.animation && is_img_showed.value) {
    return "ImgLazyLoadAnim" + props.animation + "_active";
  }
});

var handleObserverDownload = () => {
  if (props.animation) {
    var img = new Image();
    img.src = props.src;
    img.onload = () => {
      is_img_loaded.value = true;

      var observer_img_anim = new IntersectionObserver((entries_anim) => {
        entries_anim.forEach((entr_anim) => {
          if (entr_anim.isIntersecting) {
            is_img_showed.value = true;
            observer_img_anim.unobserve(entr_anim.target);
          }
        });
      }, props.observer_options_anim_img);

      observer_img_anim.observe(node_ImgLazyLoad__observer.value);
    };

    img.onerror = () => {
      is_img_loaded.value = true;
      has_error.value = true;
    };
  } else {
    var img = new Image();
    img.src = props.src;
    img.onload = () => {
      is_img_loaded.value = true;
    };
    img.onerror = () => {
      is_img_loaded.value = true;
      has_error.value = true;
    };
  }
};

var timer_download: NodeJS.Timeout | null = null;

onMounted(() => {
  if (typeof props.observer_was_triggered === "undefined") {
    var observer_img_download = new IntersectionObserver((entries_download) => {
      entries_download.forEach((entr_download) => {
        if (entr_download.isIntersecting) {
          timer_download = setTimeout(() => {
            handleObserverDownload();
            observer_img_download.unobserve(entr_download.target);
          }, 300);
        } else {
          clearTimeout(timer_download as NodeJS.Timeout);
          timer_download = null;
        }
      });
    }, props.observer_options_download_img);

    observer_img_download.observe(node_ImgLazyLoad.value);
    return;
  }

  watch(
    () => props.observer_was_triggered,
    () => {
      handleObserverDownload();
    }
  );
});
</script>

<template>
  <span ref="node_ImgLazyLoad" :class="class_root" style="position: relative">
    <img
      :class="img_class_animation"
      :width="width"
      :height="height"
      :srcset="_srcset"
      :src="src"
      v-bind="$attrs"
    />

    <span class="ImgLazyLoad__observer" ref="node_ImgLazyLoad__observer"></span>

    <span class="ImgLazyLoad__touchDisabler" v-if="touch_disable"></span>

    <span
      class="ImgLazyLoad__alternativeContent"
      v-if="!is_img_loaded && _srcset == img_fake_base64"
      :style="`background: ${alternative_content_bg}`"
    >
      <h4 v-if="!no_loading_text" :style="`color: ${alternative_content_color}`">Загрузка...</h4>
    </span>

    <span
      class="ImgLazyLoad__alternativeContent"
      v-if="has_error"
      :style="`background: ${alternative_content_bg}`"
    >
      <h4 :style="`color: ${alternative_content_color}`">Ошибка...</h4>
    </span>

    <slot v-if="is_img_showed" />
  </span>
</template>

<style lang="scss">
.ImgLazyLoad__observer {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
}

.ImgLazyLoad__touchDisabler {
  position: absolute;
  @include stretch();
  background: none;
}

.ImgLazyLoad__alternativeContent {
  position: absolute;
  @include stretch();
  @include setFlexCenter();

  background-color: $c_body_hover;
  z-index: 1;

  animation: ImgLazyLoad__alternativeContent 0.4s;
  transition: opacity 300ms;
}

@keyframes ImgLazyLoad__alternativeContent {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* -------------------- ANIMATION BlurScale (start) -------------------- */
.ImgLazyLoadAnimBlurScale {
  display: block;
  filter: blur(50px);
  scale: 1.1;
}

.ImgLazyLoadAnimBlurScale_active {
  display: block;
  filter: blur(0px);
  scale: 1;

  animation: ImgLazyLoadAnimBlurScale 600ms ease-out;
}

@keyframes ImgLazyLoadAnimBlurScale {
  from {
    filter: blur(50px);
    scale: 1.1;
  }

  to {
    filter: blur(0px);
    scale: 1;
  }
}
/* ---------------------- ANIMATION BlurScale (end) ---------------------- */

/* -------------------- ANIMATION BlurScaleUp (start) -------------------- */
.ImgLazyLoadAnimBlurScaleUp {
  display: block;
  filter: blur(50px);
  scale: 1.1;
  transform: translateY(100%);
}

.ImgLazyLoadAnimBlurScaleUp_active {
  display: block;
  filter: blur(0px);
  transform: translateY(0);
  scale: 1;

  animation: ImgLazyLoadAnimBlurScaleUp 600ms ease-out;
}

@keyframes ImgLazyLoadAnimBlurScaleUp {
  from {
    filter: blur(50px);
    scale: 1.1;
    transform: translateY(100%);
  }

  50% {
    filter: blur(50px);
    scale: 1.1;
  }

  to {
    filter: blur(0px);
    scale: 1;
    transform: translateY(0);
  }
}
/* --------------------- ANIMATION BlurScaleUp (end) --------------------- */

/* ---------------------- ANIMATION Appear (start) ----------------------- */
.ImgLazyLoadAnimAppear {
  opacity: 0;
}

.ImgLazyLoadAnimAppear_active {
  opacity: 1;

  animation: ImgLazyLoadAnimAppear 600ms ease-out;
}

@keyframes ImgLazyLoadAnimAppear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
/* ---------------------- ANIMATION Appear (end) ----------------------- */

/* ---------------------- ANIMATION UpScale (start) ----------------------- */
.ImgLazyLoadAnimUpScale {
  transform: translateY(100%) scale(0.5);
}

.ImgLazyLoadAnimUpScale_active {
  transform: translateY(0%) scale(1);

  animation: ImgLazyLoadAnimUpScale 400ms ease-out;
}

@keyframes ImgLazyLoadAnimUpScale {
  from {
    transform: translateY(100%) scale(0.5);
  }

  to {
    transform: translateY(0%) scale(1);
  }
}
/* ---------------------- ANIMATION UpScale (end) ----------------------- */

/* ---------------------- ANIMATION UpScale (start) ----------------------- */
.ImgLazyLoadAnimScale {
  transform: scale(1.15);
}

.ImgLazyLoadAnimScale_active {
  transform: scale(1);

  animation: ImgLazyLoadAnimScale 1500ms ease-out;
}

@keyframes ImgLazyLoadAnimScale {
  from {
    transform: scale(1.15);
  }

  to {
    transform: scale(1);
  }
}
/* ---------------------- ANIMATION UpScale (end) ----------------------- */
</style>
