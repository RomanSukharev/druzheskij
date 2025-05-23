<script setup lang="ts">
import type { IPopupFormProps } from '@/components/PopupForm.vue'

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

var openPopupForm = () => {
  popup_form_props.value = {
    data: {
      text_header: 'Узнать подробнее',
      text_content:
        'Оставьте заявку, мы перезвоним и расскажем об условиях акции, подберем квартиру и рассчитаем ежемесячный платеж.',
      text_btn: 'Узнать',
      fields: {
        lead_title: 'IT-ипотека от 2,5% на весь срок (ЗпСП)',
      },
      popup_notify_props_success: {
        status: 'succes',
        text_btn: 'Понятно',
        text_content: 'Получили вашу заявку. <br/> Скоро свяжемся и&nbsp;ответим на&nbsp;все&nbsp;вопросы.',
        max_width: 560,
      },
    },
  }
}
</script>

<template>
  <article class="BannerITMortgage25" id="banner_it">
    <div class="BannerITMortgage25__bg"></div>
    <h3 class="BannerITMortgage25__h3">IT-ипотека от 2,5% на весь срок</h3>
    <p class="BannerITMortgage25__p">
      Чтобы тратить на себя, <br />
      а&nbsp;не&nbsp;на&nbsp;переплаты&nbsp;банку
    </p>
    <button class="BannerITMortgage25__button" @click="openPopupForm">Узнать подробнее</button>
  </article>
</template>

<style lang="scss">
.BannerITMortgage25 {
  height: 384px;
  position: relative;
  padding: 40px;
  overflow: hidden;

  border-radius: 12px;
  border: 1px solid #f3e5e5;
  background: linear-gradient(140deg, #ffeeed 10%, white 60%, white 80%, #ffeeed 100%);
}

.BannerITMortgage25__bg {
  position: absolute;
  inset: 0;
  background-image: url('/img/BlockBanner/banner_it_25.webp');
  background-position: calc(100% - 60px) bottom;
  background-repeat: no-repeat;
  background-size: 560px auto;
}

.BannerITMortgage25__h3 {
  color: #1a1a1a;
  font-family: 'TT Norms Pro';
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 52.8px */

  margin: 0 0 12px 0;
  max-width: 500px;

  position: relative;
  z-index: 1;
}

.BannerITMortgage25__p {
  color: #1a1a1a;
  font-family: 'TT Norms Pro';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */

  margin: 0 0 32px 0;
  position: relative;
  z-index: 1;
}

.BannerITMortgage25__button {
  color: var(--bg-default, #fff);
  text-align: center;
  font-family: 'TT Norms Pro';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */

  border: none;
  border-radius: 4px;
  background: var(--style-gradient, linear-gradient(269deg, #f88787 0%, #f66565 100%));
  padding: 12px 20px;
  position: relative;
  z-index: 1;

  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
}

@media screen and (max-width: 1400px) {
  .BannerITMortgage25__bg {
    background-position: calc(100% - 40px) bottom;
  }
}

@media screen and (max-width: 1100px) {
  .BannerITMortgage25 {
    padding: 32px;
  }

  .BannerITMortgage25__bg {
    background-size: 500px auto;
    background-position: calc(100%) bottom;
  }

  .BannerITMortgage25__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 39.6px */

    max-width: 400px;
  }

  .BannerITMortgage25__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 31.2px */
  }
}

@media screen and (max-width: 750px) {
  .BannerITMortgage25__bg {
    background-size: 400px auto;
  }

  .BannerITMortgage25__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 35.2px */

    max-width: 300px;
  }

  .BannerITMortgage25__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 23.4px */
  }
}

@media screen and (max-width: 540px) {
  .BannerITMortgage25 {
    height: 440px;
    padding: 20px;

    background: linear-gradient(1200deg, #ffeeed 10%, white 40%, white 50%, #ffeeed 100%);
  }

  .BannerITMortgage25__bg {
    background-size: 300px auto;
    background-position: calc(100% + 10px) bottom;
  }

  .BannerITMortgage25__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 35.2px */

    max-width: 100%;

    br {
      display: none;
    }
  }

  .BannerITMortgage25__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
}
</style>
