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
        lead_title: 'Семейная ипотека от 3,5% на весь срок (ЗпСП)',
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
  <article class="BannerFamilyMortgage35" id="banner_family">
    <div class="BannerFamilyMortgage35__bg"></div>
    <h3 class="BannerFamilyMortgage35__h3">
      Семейная ипотека <br />
      от 3,5% на&nbsp;весь&nbsp;срок
    </h3>
    <p class="BannerFamilyMortgage35__p">Выберите квартиру, где у всех будет своя комната</p>
    <button class="BannerFamilyMortgage35__button" @click="openPopupForm">Узнать подробнее</button>
  </article>
</template>

<style lang="scss">
.BannerFamilyMortgage35 {
  height: 384px;
  position: relative;
  padding: 40px;
  overflow: hidden;

  border-radius: 12px;
  border: 1px solid #dfe6ec;

  background: linear-gradient(
    142deg,
    rgba(236, 240, 244, 1) 0%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 1) 84%,
    rgba(236, 240, 244, 1) 120%
  );
}

.BannerFamilyMortgage35__bg {
  position: absolute;
  inset: 0;
  background-image: url('/img/BlockBanner/banner_family_35.webp');
  background-position: 800px bottom;
  background-repeat: no-repeat;
  background-size: 666px auto;
}

.BannerFamilyMortgage35__h3 {
  color: #1a1a1a;
  font-family: 'TT Norms Pro';
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 52.8px */

  margin: 0 0 12px 0;

  position: relative;
  z-index: 1;
}

.BannerFamilyMortgage35__p {
  color: #1a1a1a;
  font-family: 'TT Norms Pro';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 31.2px */

  max-width: 400px;

  margin: 0 0 32px 0;
  position: relative;
  z-index: 1;
}

.BannerFamilyMortgage35__button {
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

@media screen and (max-width: 1780px) {
  .BannerFamilyMortgage35__bg {
    background-position: calc(100% + 85px) bottom;
  }
}

@media screen and (max-width: 1100px) {
  .BannerFamilyMortgage35 {
    padding: 32px;
  }

  .BannerFamilyMortgage35__bg {
    background-size: 560px auto;
    background-position: 450px bottom;
  }

  .BannerFamilyMortgage35__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 39.6px */
  }

  .BannerFamilyMortgage35__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 31.2px */
  }
}

@media screen and (max-width: 1007px) {
  .BannerFamilyMortgage35__bg {
    background-position: calc(100% + 60px) bottom;
  }
}

@media screen and (max-width: 750px) {
  .BannerFamilyMortgage35__bg {
    background-size: 450px auto;
  }

  .BannerFamilyMortgage35__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 35.2px */
  }

  .BannerFamilyMortgage35__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 23.4px */

    max-width: 300px;
  }
}

@media screen and (max-width: 540px) {
  .BannerFamilyMortgage35 {
    height: 440px;
    padding: 20px;

    background: radial-gradient(105.92% 183.66% at 54.71% 150.19%, #fff 47.81%, #ecf0f4 100%),
      linear-gradient(100deg, #302a9a 13.86%, #0a0051 93.41%);
  }

  .BannerFamilyMortgage35__bg {
    background-size: 350px auto;
    background-position: calc(100% + 20px) calc(100% + 10px);
  }

  .BannerFamilyMortgage35__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 35.2px */

    max-width: 250px;

    br {
      display: none;
    }
  }

  .BannerFamilyMortgage35__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */

    max-width: 200px;
  }
}
</style>
