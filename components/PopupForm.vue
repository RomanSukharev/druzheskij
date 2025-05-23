<script lang="ts" setup>
import type { IFormFields } from '@/composables/useFormRequest'
import type { IPopupNotifyProps } from '@/components/PopupNotify.vue'

export interface IPopupFormProps {
  data: {
    text_header: string
    text_content: string
    text_btn: string
    fields: IFormFields
    cbSuccessFetch?: () => void
    popup_notify_props_success?: IPopupNotifyProps
  }
}

var props = defineProps<IPopupFormProps>()
var emit = defineEmits(['close'])

var { user_name, user_phone, error_user_name, error_user_phone, sendFormRequest } = useFormRequest(() => {
  props.data.cbSuccessFetch && props.data.cbSuccessFetch()
  closePopup()
}, props.data.popup_notify_props_success)

var is_popup_hidden = ref(false)

var closePopup = () => {
  setTimeout(() => {
    emit('close')
  }, 400)
  is_popup_hidden.value = true
}

usePopup(closePopup)
</script>

<template>
  <div class="PopupForm" @click.self="closePopup">
    <form
      class="PopupForm__form"
      :class="{ PopupForm__form_hidden: is_popup_hidden }"
      @submit.prevent="sendFormRequest(data.fields)"
    >
      <button type="button" class="PopupForm__btnClose" @click="closePopup"></button>

      <h5 class="PopupForm__h" v-html="data.text_header"></h5>
      <p class="PopupForm__p" v-html="data.text_content"></p>

      <UIPskInput
        v-focus="{ min_width: 740 }"
        class="PopupForm__input"
        :error_message="error_user_name"
        v-model="user_name"
        placeholder="Имя"
        tabindex="1"
      />

      <UIPskInput
        class="PopupForm__input"
        :error_message="error_user_phone"
        useMask
        v-model="user_phone"
        placeholder="+7 (999) 999-99-99"
      />

      <button class="PopupForm__btn" type="submit">
        {{ data.text_btn }}
      </button>

      <p class="PopupForm__offer">
        Отправляя заявку, вы&nbsp;соглашаетесь на&nbsp;обработку персональных данных и&nbsp;получение сервисных,
        рекламных сообщений в&nbsp;целях рассмотрения обращения согласно
        <NuxtLink class="PopupForm__link" to="/policy" @click="closePopup"> политике конфиденциальности. </NuxtLink>
      </p>
    </form>
  </div>
</template>

<style lang="scss">
.PopupForm {
  @include setRulesToRootNodePopup();
  @include setFlexCenter();
}

.PopupForm__form {
  position: relative;
  max-width: min-content;
  padding: 60px 40px;
  max-height: 90vh;
  overflow: auto;
  @include hideScroll();

  background-color: $c_body;
  animation: PopupForm__form 400ms ease-out;
}

@keyframes PopupForm__form {
  from {
    transform: translate3d(0, 100vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.PopupForm__form_hidden {
  transform: translate3d(0, 100vh, 0);
  animation: PopupForm__form_hidden 400ms ease-out;
}

@keyframes PopupForm__form_hidden {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 100vh, 0);
  }
}

.PopupForm__btnClose {
  @include setBtnClose_dark();
  position: absolute;
  top: 20px;
  right: 20px;
}

.PopupForm__h {
  color: $c_text;
  font-family: 'NeutralFace';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;

  margin-bottom: 30px;
}

.PopupForm__p {
  @include setFontStyle3();
  color: $c_text;

  margin-bottom: 40px;
}

.PopupForm__input {
  min-width: 500px;
  margin-bottom: 40px;
}

.PopupForm__btn {
  @include setBtn_primary();
  width: 100%;
  padding: 17px 0;
  margin-bottom: 30px;
}

.PopupForm__offer {
  font-size: 12px;
  line-height: 140%;
  color: $c_text_2;
  a {
    color: $c_orange;
  }
}

.PopupForm__link {
  @include setLink_primary();
}

@media screen and (max-width: 1170px) {
  .PopupForm__btnClose {
    top: 15px;
    right: 15px;
  }

  .PopupForm__p {
    margin-bottom: 30px;
  }

  .PopupForm__input {
    min-width: 400px;
  }
}

@media screen and (max-width: 740px) {
  .PopupForm__form {
    padding: 40px 16px;
  }

  .PopupForm__h {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .PopupForm__p {
    font-size: 14px;
  }

  .PopupForm__input {
    min-width: 280px;
    width: calc(100vw - 80px);
    margin-bottom: 30px;
  }
}
</style>
