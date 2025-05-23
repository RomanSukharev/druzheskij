<script lang="ts" setup>
import type { IPopupNotifyPromoProps } from "@/components/PopupNotifyPromo.vue";
// import type { IPopupBlockProps } from "@/components/PopupBlock.vue";

export interface IPopupPromoProps {
  data: {
    text_header: string;
    text_content: string;
    text_btn: string;
    lead_title: string;
    cbSuccessFetch?: () => void;
    popup_notify_promo_props_success?: IPopupNotifyPromoProps;
  };
}

var props = defineProps<IPopupPromoProps>();

var emit = defineEmits(["close"]);

var { user_name, user_phone, error_user_name, error_user_phone, sendFormRequest } = useFormRequest(
  () => {
    props.data.cbSuccessFetch && props.data.cbSuccessFetch();
    closePopup();
  },
  null,
  true,
  props.data.popup_notify_promo_props_success
);

var is_popup_hidden = ref(false);

var promo_btn_disabled = computed(() => (user_phone.value.length < 11 ? true : false));

var closePopup = () => {
  setTimeout(() => {
    emit("close");
  }, 400);
  is_popup_hidden.value = true;
};

usePopup(closePopup);
</script>

<template>
  <div class="PopupPromo" :class="{ PopupPromo__form_hidden: is_popup_hidden }">
    <form class="PopupPromo__form" @submit.prevent="sendFormRequest({lead_title: data.lead_title})">
      <button type="button" class="PopupPromo__btnClose" @click="closePopup"></button>

      <h5 class="PopupPromo__h" v-html="data.text_header"></h5>

      <p class="PopupPromo__p" v-html="data.text_content"></p>

      <UIPskInput
        class="PopupPromo__input"
        :error_message="error_user_phone"
        useMask
        v-model="user_phone"
        placeholder="+7 (999) 999-99-99"
      />

      <button
        class="PopupPromo__btn"
        :class="{ PopupPromo__btn_disabled: promo_btn_disabled }"
        type="submit"
        :disabled="promo_btn_disabled"
      >
        {{ data.text_btn }}
      </button>

      <!-- <p class="PopupPromo__offer">
        Отправляя заявку, вы&nbsp;соглашаетесь на&nbsp;обработку персональных данных и&nbsp;получение сервисных,
        рекламных сообщений в&nbsp;целях рассмотрения обращения согласно
        <NuxtLink class="PopupPromo__link" to="/policy" @click="closePopup">политике конфиденциальности.</NuxtLink>
      </p> -->
    </form>

    <div class="PopupPromo__disabledCatalog">
      <picture>
        <source
          class="PopupPromo__disabledCatalogImg"
          srcset="/img/disabled_catalog_tablet.png"
          width="656"
          height="443"
          media="(min-width: 471px) and (max-width: 741px)"
        />
        <source
          class="PopupPromo__disabledCatalogImg"
          srcset="/img/disabled_catalog_mob.png"
          width="556"
          height="689"
          media="(max-width: 470px)"
        />

        <img
          class="PopupPromo__disabledCatalogImg"
          src="/img/disabled_catalog_desctop.png"
          alt=""
          width="1456"
          height="1019"
        />
      </picture>

      <div class="PopupPromo__disabledCatalogContents">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.656 8.94569H17.5952V6.82393C17.5952 3.8959 15.2188 1.51953 12.2908 1.51953C9.36272 1.51953 6.98635 3.8959 6.98635 6.82393V8.94569H5.92547C4.7585 8.94569 3.80371 9.90048 3.80371 11.0675V21.6763C3.80371 22.8432 4.7585 23.798 5.92547 23.798H18.656C19.823 23.798 20.7778 22.8432 20.7778 21.6763V11.0675C20.7778 9.90048 19.823 8.94569 18.656 8.94569ZM9.10811 6.82393C9.10811 5.06287 10.5297 3.64129 12.2908 3.64129C14.0518 3.64129 15.4734 5.06287 15.4734 6.82393V8.94569H9.10811V6.82393ZM18.656 21.6763H5.92547V11.0675H18.656V21.6763ZM12.2908 18.4936C13.4577 18.4936 14.4125 17.5388 14.4125 16.3719C14.4125 15.2049 13.4577 14.2501 12.2908 14.2501C11.1238 14.2501 10.169 15.2049 10.169 16.3719C10.169 17.5388 11.1238 18.4936 12.2908 18.4936Z"
            fill="#1A1A1A"
          />
        </svg>
        <h2 class="PopupPromo__disabledCatalogContents__h2">Каталог квартир от ПСК Дом</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.PopupPromo {
  @include setRulesToRootNodePopup($c_body);
  @include setPaddingSides(var(--global_padding_content));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding-top: 80px;
  animation: PopupPromo__form 400ms ease-out;
}

.PopupPromo__form {
  @include setGridLayout();
}

@keyframes PopupPromo__form {
  from {
    transform: translate3d(0, 100vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.PopupPromo__form_hidden {
  transform: translate3d(0, 100vh, 0);
  animation: PopupPromo__form_hidden 400ms ease-out;
}

@keyframes PopupPromo__form_hidden {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 100vh, 0);
  }
}

.PopupPromo__btnClose {
  @include setBtnClose_dark();
  position: absolute;
  top: 20px;
  right: 20px;
}

.PopupPromo__h {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 4;
  color: $c_text;
  font-family: "NeutralFace";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
}

.PopupPromo__p {
  @include setFontStyle3();
  color: $c_text;
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 1;
  margin-bottom: 16px;
}

.PopupPromo__input {
  //   min-width: 500px;
  margin-bottom: 32px;
  grid-column-start: 7;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 2;
}

.PopupPromo__btn {
  @include setBtn_primary();
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  box-shadow: none;

  width: 100%;
  padding: 17px 0;
  margin-bottom: 12px;
  grid-column-start: 7;
  grid-column-end: 10;
  grid-row-start: 3;
  grid-row-end: 3;

  &_disabled {
    cursor: not-allowed;
    background-color: #dcdfe6;
    box-shadow: none;
    color: #c0c4cc;
  }
}

.PopupPromo__offer {
  font-size: 12px;
  line-height: 140%;
  color: $c_text_2;
  grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 4;
  grid-row-end: 4;
  a {
    color: $c_orange;
  }
}

.PopupPromo__link {
  @include setLink_primary();
}

.PopupPromo__disabledCatalog {
  height: 458px;
  padding-top: 137px;
  box-shadow: 4px 4px 20px 0px #e1e0e0;
  background: #fff;
  border-radius: 47.668px;
  position: relative;
  transform: translateY(0%);

  animation: PopupPromo__catalog 2s infinite alternate linear;
}

.PopupPromo__disabledCatalogImg {
  width: 100%;
  height: auto;
}

@keyframes PopupPromo__catalog {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(20%);
  }

  100% {
    transform: translateY(0%);
  }
}

.PopupPromo__disabledCatalogContents {
  position: absolute;
  top: 92px;
  left: 9%;
  display: flex;
  align-items: center;
  gap: 5px;
}

.PopupPromo__disabledCatalogContents__h2 {
  color: #1a1a1a;
  /* desktop/H2 */
  font-family: "TT Norms Pro";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 35.2px */
}

@media screen and (max-width: 1170px) {
  .PopupPromo__h {
    font-size: 25px;
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .PopupPromo__btnClose {
    top: 15px;
    right: 15px;
  }

  .PopupPromo__p {
    font-size: 18px;
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .PopupPromo__input {
    grid-column-start: 5;
    grid-column-end: 8;
  }

  .PopupPromo__btn {
    grid-column-start: 5;
    grid-column-end: 8;
  }
}

@media screen and (max-width: 740px) {
  // .PopupPromo__form {
  //   // padding: 40px 16px;
  // }

  .PopupPromo__h {
    font-size: 20px;
    margin-bottom: 20px;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .PopupPromo__p {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
    font-size: 14px;
  }

  .PopupPromo__input {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-bottom: 30px;
  }

  .PopupPromo__btn {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  .PopupPromo__disabledCatalog {
    padding-top: 50px;
  }

  .PopupPromo__disabledCatalogImg {
    width: 100%;
    height: 100%;
  }

  .PopupPromo__disabledCatalogContents {
    position: absolute;
    top: 40px;
    left: 7%;
    right: 7%;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .PopupPromo__disabledCatalogContents__h2 {
    font-size: 25px;
  }
}

@media screen and (max-width: 470px) {
  .PopupPromo {
    padding-top: 50px;
  }

  .PopupPromo__disabledCatalog {
    padding-top: 0px;
    height: 400px;
  }

  .PopupPromo__disabledCatalogImg {
    width: 100%;
    height: auto;
  }

  .PopupPromo__disabledCatalogContents {
    align-items: flex-start;
  }

  .PopupPromo__input {
    // min-width: 280px;
    // width: calc(100vw - 0px);
    &:focus {
      outline: none;
    }
  }
}
</style>
