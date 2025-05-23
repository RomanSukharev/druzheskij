<script lang="ts" setup>
export interface IPopupNotifyPromoProps {
  article: string;
  text_header: string;
  max_width?: number;
}

const props = defineProps<IPopupNotifyPromoProps>();
var emit = defineEmits(["close"]);
var is_popup_hidden = ref(false);

var time = ref(3);

var interval_for_timer = setInterval(async () => {
  if (time.value === 2) {
    await navigateTo(
      `https://catalog.72dom.com/flats?complexes=774a08ed-2f65-11ee-b549-00155d015d18&article=${props.article}`,
      { external: true }
    );
  }
  time.value--;
}, 1000);

watch(time, () => {
  if (time.value === 1) {
    clearInterval(interval_for_timer);
    closePopup()
  }
});

var closePopup = () => {
  is_popup_hidden.value = true;
  setTimeout(() => {
    emit("close");
  }, 250);
};

usePopup(closePopup);
</script>

<template>
  <div class="PopupNotifyPromo">
    <div class="PopupNotifyPromo__content" :style="`max-width: ${max_width}px`">
      <h2 class="PopupNotifyPromo__h2" v-html="text_header"></h2>
      <p class="PopupNotifyPromo__time">{{ time }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.PopupNotifyPromo {
  @include setRulesToRootNodePopup();
  @include setFlexCenter();
}

.PopupNotifyPromo__content {
  @include setFlexCenter();
  flex-direction: column;
  display: flex;
  border-radius: 12px;
  max-width: 557px;
  background-color: $c_body;
  @include setFontStyle3();
  font-size: 30px;
  padding: 50px 30px;
  max-height: 90vh;
  overflow: auto;
  @include hideScroll();
  animation: PopupNotifyPromo__content 250ms ease-out;
  transform: translate3d(0, 0, 0);
}

.PopupNotifyPromo__h2 {
  text-align: center;
  @include setFontStyle3();
  margin-bottom: 40px;
  color: $c_text;
}

.PopupNotifyPromo__time {
  @include setFontStyle3();
  font-size: 40px;
  color: $c_text;
}

@keyframes PopupNotifyPromo__content {
  from {
    transform: translate3d(0, 105vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@media screen and (max-width: 740px) {
  .PopupNotifyPromo__content {
    padding: 20px;
    margin: 0 10px;
  }
  .PopupNotifyPromo__h2 {
    font-size: 17px;
  }
}
</style>
