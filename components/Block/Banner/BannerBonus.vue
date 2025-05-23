<script setup lang="ts">
import type { IPopupFormProps } from '@/components/PopupForm.vue'

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

var openPopupForm = () => {
  popup_form_props.value = {
    data: {
      text_header: 'Узнать подробнее',
      text_content: 'Оставьте заявку, мы&nbsp;перезвоним и&nbsp;подробнее расскажем об&nbsp;условиях акции.',
      text_btn: 'Отправить заявку',
      fields: {
        lead_title: 'Узнать подробнее "До 20% баллами от покупки квартиры" (ЗпСП)',
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
  <article class="BannerBonus" id="banner_bonus">
    <div class="BannerBonus__ball1"></div>
    <div class="BannerBonus__ball2"></div>
    <div class="BannerBonus__arrow"></div>

    <h3 class="BannerBonus__h3">
      До 20% баллами <br />
      от&nbsp;покупки квартиры
    </h3>
    <p class="BannerBonus__p">На&nbsp;ремонт, технику и&nbsp;мебель для дома</p>
    <button class="BannerBonus__button" @click="openPopupForm">Узнать подробнее</button>
  </article>
</template>

<style lang="scss">
.BannerBonus {
  height: 384px;
  position: relative;
  padding: 40px;
  overflow: hidden;

  border-radius: 12px;
  background: linear-gradient(100deg, #302a9a 13.86%, #0a0051 93.41%);
}

.BannerBonus__ball1 {
  position: absolute;
  inset: 0;
  background-image: url('/img/BlockBanner/Bonus/ball1.webp');
  background-position: calc(100% + 140px) 200px;
  background-repeat: no-repeat;
  background-size: 885px auto;
}

.BannerBonus__ball2 {
  position: absolute;
  inset: 0;
  background-image: url('/img/BlockBanner/Bonus/ball2.webp');
  background-position: calc(100% + 200px) -260px;
  background-repeat: no-repeat;
  background-size: 440px auto;
}

.BannerBonus__arrow {
  position: absolute;
  inset: 0;
  background-image: url('/img/BlockBanner/Bonus/arrow.webp');
  background-position: 800px -120px;
  background-repeat: no-repeat;
  background-size: 666px auto;
}

.BannerBonus__h3 {
  color: #fff;
  font-family: 'TT Norms Pro';
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 52.8px */

  margin: 0 0 24px 0;

  position: relative;
  z-index: 1;
}

.BannerBonus__p {
  color: #fff;
  font-family: 'TT Norms Pro';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */

  margin: 0 0 49px 0;
  position: relative;
  z-index: 1;
}

.BannerBonus__button {
  color: #4d4d4c;
  text-align: center;
  font-family: 'TT Norms Pro';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */

  border: none;
  border-radius: 4px;
  background: #fffdf9;
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

@media screen and (max-width: 1700px) {
  .BannerBonus__ball1 {
    background-position: calc(100% + 100px) 200px;
    background-size: 750px auto;
  }

  .BannerBonus__ball2 {
    background-position: calc(100% + 200px) -260px;
    background-size: 440px auto;
  }

  .BannerBonus__arrow {
    background-position: 800px -120px;
    background-size: 666px auto;
  }
}

@media screen and (max-width: 1500px) {
  .BannerBonus__arrow {
    background-position: calc(100% + 165px) -100px;
    background-size: 640px auto;
  }
}

@media screen and (max-width: 1100px) {
  .BannerBonus {
    padding: 32px;
  }

  .BannerBonus__ball1 {
    background-position: calc(100% - 80px) 200px;
    background-size: 350px auto;
  }

  .BannerBonus__ball2 {
    // background-position: calc(100% + 200px) -260px;
    // background-size: 440px auto;
  }

  .BannerBonus__arrow {
    background-position: calc(100% + 100px) -50px;
    background-size: 500px auto;
  }

  .BannerBonus__h3 {
    color: #fff;
    font-family: 'TT Norms Pro';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 39.6px */
  }

  .BannerBonus__p {
    color: #fff;
    font-family: 'TT Norms Pro';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 33.6px */

    max-width: 300px;
  }

  .BannerBonus__button {
    position: absolute;
    bottom: 32px;
  }
}

@media screen and (max-width: 750px) {
  .BannerBonus__ball1 {
    background-position: calc(100% + 180px) 250px;
    background-size: 500px auto;
  }

  .BannerBonus__ball2 {
    // background-position: calc(100% + 200px) -260px;
    // background-size: 440px auto;
    display: none;
  }

  .BannerBonus__arrow {
    background-position: calc(100% + 100px) 40px;
    background-size: 400px auto;
  }

  .BannerBonus__h3 {
    color: #fff;
    font-family: 'TT Norms Pro';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 39.6px */
  }

  .BannerBonus__p {
    color: #fff;
    font-family: 'TT Norms Pro';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */

    max-width: 200px;

    margin-bottom: 40px;
  }

  .BannerBonus__button {
    position: relative;
    bottom: 0;
  }
}

@media screen and (max-width: 540px) {
  .BannerBonus {
    height: 440px;
    padding: 20px;
  }

  .BannerBonus__ball1 {
    background-position: calc(100% + 40px) 300px;
    background-size: 300px auto;
  }

  .BannerBonus__arrow {
    background-position: calc(100% + 100px) 170px;
    background-size: 350px auto;
  }

  .BannerBonus__h3 {
    color: #fff;
    font-family: 'TT Norms Pro';
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 30.8px */
  }

  .BannerBonus__p {
    color: #fff;
    font-family: 'TT Norms Pro';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */

    margin-bottom: 32px;

    max-width: 150px;
  }
}
</style>
