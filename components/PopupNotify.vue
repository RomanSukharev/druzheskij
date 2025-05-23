<script lang="ts" setup>
export interface IPopupNotifyProps {
  text_header?: string;
  text_content?: string;
  text_btn?: string;
  status?: "succes" | "error";
  max_width?: number;
}

defineProps<IPopupNotifyProps>();
var emit = defineEmits(["close"]);
var is_popup_hidden = ref(false);

var closePopup = () => {
  is_popup_hidden.value = true;
  setTimeout(() => {
    emit("close");
  }, 250);
};

usePopup(closePopup);
</script>

<template>
  <div class="PopupNotify" @click.self="closePopup">
    <div
      class="PopupNotify__content"
      :class="{ PopupNotify__content_hidden: is_popup_hidden }"
      :style="`max-width: ${max_width}px`"
    >
      <button type="button" class="PopupNotify__btnClose" @click="closePopup"></button>
      <div class="PopupNotify__iconSucces" v-if="status === 'succes'"></div>
      <div class="PopupNotify__iconError" v-if="status === 'error'"></div>

      <h5 v-if="text_header" class="PopupNotify__h5" v-html="text_header"></h5>

      <p class="PopupNotify__p" v-if="text_content" v-html="text_content"></p>

      <button class="PopupNotify__btn" v-if="text_btn" @click="closePopup">
        {{ text_btn }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.PopupNotify {
  @include setRulesToRootNodePopup();
  @include setFlexCenter();
}

.PopupNotify__btnClose {
  @include setBtnClose_dark();
  position: absolute;
  top: 30px;
  right: 30px;
}

.PopupNotify__content {
  @include setFlexCenter();
  flex-direction: column;
  display: flex;
  max-width: 557px;
  background-color: $c_body;
  padding: 50px 30px;
  max-height: 90vh;
  overflow: auto;
  @include hideScroll();

  animation: PopupNotify__content 250ms ease-out;
  transform: translate3d(0, 0, 0);
}

@keyframes PopupNotify__content {
  from {
    transform: translate3d(0, 105vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.PopupNotify__content_hidden {
  animation: PopupNotify__content_hidden 250ms ease-out;
  transform: translate3d(100vw, 0, 0);
}

@keyframes PopupNotify__content_hidden {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(100vw, 0, 0);
  }
}

.PopupNotify__iconSucces {
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml;utf8," + $i_check_primary);
}

.PopupNotify__iconError {
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml;utf8," + getIconClose($c_body));
  background-size: 30px;
  background-color: rgb(226, 69, 69);
}

.PopupNotify__h5 {
  margin: 0 0 30px 0;
}

.PopupNotify__p {
  text-align: center;
  @include setFontStyle3();
  margin-bottom: 40px;
  color: $c_text;
}

.PopupNotify__btn {
  @include setBtn_primary();
  font-size: 23.227px;
  padding: 17px 35px;
  font-weight: 500;
  line-height: 150%;
  border-radius: 10px;
}

@media screen and (max-width: 740px) {
  .PopupNotify__content {
    padding: 20px;
    margin: 0 10px;
  }
  .PopupNotify__iconSucces, .PopupNotify__iconError {
    margin-bottom: 10px;
  }

  .PopupNotify__p {
    margin-bottom: 20px;
  }
  .PopupNotify__btnClose {
    top: 20px;
    right: 20px;
  }
  .PopupNotify__btn {
    font-size: 18px;
    padding: 10px 25px;
  }
}
</style>
