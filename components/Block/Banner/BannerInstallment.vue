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
        lead_title: 'Рассрочка без переплат с пв 20% (ЗпСП)',
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
  <article class="BannerInstallment" id="banner_installment">
    <div class="BannerInstallment__content">
      <h3 class="BannerInstallment__h3">Рассрочка без переплат</h3>
      <p class="BannerInstallment__p">С первоначальным взносом от 20%</p>
      <button class="BannerInstallment__button" @click="openPopupForm">Узнать подробнее</button>
    </div>

    <img src="/img/BlockBanner/banner__installment.webp" class="BannerInstallment__img" />
  </article>
</template>

<style lang="scss">
.BannerInstallment {
  height: 384px;
  position: relative;
  padding: 40px;
  overflow: hidden;

  border-radius: 12px;
  border: 1px solid #eee;
  background: #f5f7f9;

  display: grid;
  grid-template-columns: 1fr 1fr;
}

.BannerInstallment__h3 {
  color: #1a1a1a;
  font-family: 'TT Norms Pro';
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 52.8px */

  margin: 0 0 12px 0;
  max-width: 300px;

  position: relative;
  z-index: 1;
}

.BannerInstallment__p {
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

.BannerInstallment__button {
  color: var(--bg-default, #fff);
  text-align: center;
  font-family: 'TT Norms Pro';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */

  border: none;
  border-radius: 4px;
  background: #1a1a1a;
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

.BannerInstallment__img {
  height: 100%;
  width: 100%;
  max-width: 560px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center bottom;

  justify-self: end;
}

@media screen and (max-width: 1100px) {
  .BannerInstallment {
    padding: 32px;
  }

  .BannerInstallment__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 39.6px */

    max-width: 240px;
  }

  .BannerInstallment__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 31.2px */

    max-width: 300px;
  }

  .BannerInstallment__img {
    border-radius: 8px;
  }
}

@media screen and (max-width: 750px) {
  .BannerInstallment__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 35.2px */

    max-width: 200px;
  }

  .BannerInstallment__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 23.4px */

    max-width: 200px;
  }
}

@media screen and (max-width: 540px) {
  .BannerInstallment {
    height: 440px;
    padding: 20px;

    grid-template-columns: 1fr;
    gap: 30px;
  }

  .BannerInstallment__h3 {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 35.2px */

    max-width: 200px;

    br {
      display: none;
    }
  }

  .BannerInstallment__p {
    color: #1a1a1a;
    font-family: 'TT Norms Pro';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */

    max-width: none;
  }
}
</style>
