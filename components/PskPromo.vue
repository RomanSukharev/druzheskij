<script setup lang="ts">
import { IPopupFormProps } from "@/components/PopupForm.vue";

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore
var setPopup = () => {
  ymReachGoal(`open-form_mortgage-with-initial-payment_promo`); //ym_target - Открыть форму - Способы покупки

  popup_form_props.value = {
    data: {
      text_header: "Узнайте подробнее об&nbsp;акции",
      text_content:
        "Оставьте заявку, чтобы мы&nbsp;перезвонили и&nbsp;подробнее рассказали об&nbsp;ипотеке с&nbsp;удобным первоначальным взносом.",
      text_btn: "узнать подробнее",
      fields: {
        lead_title: 'Узнать о "Ипотека с удобным первоначальным взносом" (ЗпСП)',
      },
      cbSuccessFetch() {
        ymReachGoal(`send-form_mortgage-with-initial-payment_promo`); //ym_target - Отправить форму - Способы покупки
      },
      popup_notify_props_success: {
        status: "succes",
        text_btn: "Понятно",
        text_content: "Отправили ваш контакт менеджерам. Они перезвонят в&nbsp;ближайшее время и&nbsp;расскажут подробнее об&nbsp;акции.",
        max_width: 500,
      },
    },
  };
};
</script>

<template>
  <div class="PromoWrap" id="profit_mortgage">
    <div class="Promo">
      <div class="Promo__textWrap">
        <h3 class="Promo_h">Ипотека с&nbsp;удобным<br />первоначальным взносом</h3>
        <button class="Promo__btn" @click="setPopup">Узнать подробнее</button>
      </div>
      <img class="Promo__bg Promo__bg--down_1" src="/img/down_1.png" alt="pic" />
      <img class="Promo__bg Promo__bg--down_2" src="/img/down_2.png" alt="pic" />
      <img class="Promo__bg Promo__bg--coin_ruble" src="/img/coin_ruble.png" alt="coin" />
      <img class="Promo__bg Promo__bg--up_1" src="/img/up_1.png" alt="pic" />
      <img class="Promo__bg Promo__bg--up_2" src="/img/up_2.png" alt="pic" />
      <img class="Promo__bg Promo__bg--1111" src="/img/1111.png" alt="pic" />
      <img class="Promo__bg Promo__bg--222" src="/img/222.png" alt="pic" />
      <img class="Promo__bg Promo__bg--333" src="/img/333.png" alt="pic" />
    </div>
  </div>
</template>

<style lang="scss">
.PromoWrap {
  @include useLCWP();
  padding-top: var(--offset_chapter);
  overflow: hidden;
  position: relative;
}

.Promo {
  position: relative;
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #eee;
  background: #f5f7f9;
  margin-bottom: 20px;
}

.Promo__textWrap {
  position: relative;
  z-index: 2;
}

.Promo__bg {
  position: absolute;
  pointer-events: none;

  &--1111,
  &--222,
  &--333 {
    display: none;
  }

  &--down_1 {
    bottom: 0;
    right: 5%;
  }

  &--down_2 {
    bottom: 0;
    right: 35%;
  }

  &--up_1 {
    top: 0;
    left: 45%;
  }

  &--up_2 {
    top: 0;
    right: 0.05%;
  }

  &--coin_ruble {
    z-index: 10;
    top: 5%;
    right: 15%;
  }
}

.Promo_h {
  margin-bottom: 151px;
  color: #1a1a1a;
  @include setFontStyle14();
}

.Promo__textWrap {
}

.Promo__btn {
  &:hover {
    background-color: #464646;
    border: 1px solid transparent;
  }
  color: #fff;
  background-color: #1a1a1a;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 14px 31px;
  font-family: "TT Norms Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.136px;
}

@media screen and (max-width: 1300px) {
  .Promo__bg {
    &--coin_ruble {
      right: 2%;
      transform: scale(0.8);
    }
  }
}

@media screen and (max-width: 1300px) {
  .Promo__bg {
    &--coin_ruble {
      right: 2%;
      transform: scale(0.8);
    }
  }
}

@media screen and (max-width: 740px) {
  .Promo {
    padding: 20px;
    height: 410px;
  }
  .Promo_h {
    margin-bottom: 36px;
  }
  .Promo__btn {
    @include setBtn_dark();
    padding: 10px 20px;
    font-size: 12px;
    line-height: 12.534px;
  }
  .Promo__bg {
    &--down_1,
    &--down_2,
    &--up_1,
    &--up_2 {
      display: none;
    }
    &--1111,
    &--222,
    &--333 {
      display: block;
    }

    &--1111 {
      top: 40%;
      right: 0;
    }
    &--222 {
      top: 50%;
      left: 15%;
    }
    &--333 {
      left: -1%;
      bottom: -1%;
    }

    &--coin_ruble {
      top: 42%;
      right: -110px;
      margin-right: -5px;
      transform: scale(0.5);
    }
  }
}
</style>
