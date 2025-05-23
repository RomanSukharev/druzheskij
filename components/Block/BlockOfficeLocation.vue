<script setup lang="ts">
import SaleOfficeMap from "@/components/SaleOfficeMap.vue";
import { IPopupFormProps } from "@/components/PopupForm.vue";

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

var handleClick = () => {
  ymReachGoal("open-form_order-meeting_last-screen"); //ym_target - Открыть форму - "Записаться на встречу" - последний экран
  popup_form_props.value = {
    data: {
      text_header: "Записаться на&nbsp;встречу",
      text_content:
        "Бесплатно привезём вас в офис продаж, расскажем о квартале и бесплатно отвезём домой. Оставьте контакты, мы перезвоним и узнаем, когда и куда должна подъехать машина.",
      text_btn: "Записаться на встречу",
      fields: {
        lead_title: "Записаться на встречу (ЗпОД)",
      },
      cbSuccessFetch() {
        ymReachGoal("open-form_order-meeting_last-screen"); //ym_target - Открыть форму - "Записаться на встречу" - последний экран
      },
      popup_notify_props_success: {
        text_content:
          "Мы&nbsp;передали ваши данные менеджерам. С&nbsp;вами свяжутся и&nbsp;ответят на&nbsp;все ваши вопросы в&nbsp;ближайшее время",
        text_btn: "Хорошо",
        status: "succes",
      },
    },
  };
};
</script>

<template>
  <section id="office_location" class="BlockOfficeLocation">
    <div class="BlockOfficeLocation__map">
      <SaleOfficeMap />
    </div>
    <div class="BlockOfficeLocation__container">
      <div class="BlockOfficeLocation__contacts">
        <div class="BlockOfficeLocation__contactsPhoto">
          <img
            src="/img/BlockOfficeLocationNew.jpg"
            alt="фото офиса продаж"
            width="420"
            height="250"
          />
        </div>
        <div class="BlockOfficeLocation__contactsInfo">
          <h4 style="margin-bottom: 24px">офис продаж</h4>

          <div
            style="
              display: flex;
              flex-direction: column;
              gap: 20px;
              margin-bottom: 30px;
            "
          >
            <div>
              <p class="BlockOfficeLocation__label">контактный телефон</p>
              <a style="text-decoration: none" href="tel:+73452555551"
                >+ 7 (3452) 55-55-51</a
              >
            </div>

            <div>
              <p class="BlockOfficeLocation__label">адрес</p>
              <p class="BlockOfficeLocation__text">г. Тюмень, ул. Новгородская, 10</p>
            </div>

            <div
              style="display: flex; gap: 30px; justify-content: space-between"
            >
              <div>
                <p class="BlockOfficeLocation__label">будние дни</p>
                <p class="BlockOfficeLocation__text">09:00–19:00</p>
              </div>
              <div>
                <p class="BlockOfficeLocation__label">суббота</p>
                <p class="BlockOfficeLocation__text">09:00–18:00</p>
              </div>
              <div>
                <p class="BlockOfficeLocation__label">воскресенье</p>
                <p class="BlockOfficeLocation__text">10:00–15:00</p>
              </div>
            </div>
          </div>
          <div class="BlockOfficeLocation__contactsInfoFooter">
            <button
              @click="handleClick"
              class="PlanCard__btnKnowPrice BlockOfficeLocation__btn"
            >
              Записаться на встречу
            </button>
            <UIExternalLinkPrimary
              class="BlockOfficeLocation__contactsInfoFooterLink"
              icon_size="18"
              target="_blank"
              href="https://yandex.ru/maps/55/tyumen/?ll=65.550750%2C57.147430&mode=routes&rtext=~57.148537%2C65.550493&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1332051745&utm_source=main_stripe_big&z=16.2"
            >
              Построить маршрут
            </UIExternalLinkPrimary>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockOfficeLocation {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  background-color: #fff;
}

.BlockOfficeLocation__container {
  display: flex;
  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
  padding-top: 25px;
  padding-bottom: 24px;
}

.BlockOfficeLocation__map {
  position: absolute;
  inset: 0;
}

.BlockOfficeLocation__contactsInfoFooterLink {
  font-size: 14px !important;
  letter-spacing: 0.14px;
  height: max-content;
  color: #ff7060;
  font-family: "Lab Grotesque";
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  path {
    fill: #ff7060;
  }
}

.BlockOfficeLocation__label {
  color: #586267;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 8px;
  opacity: 0.5;
}

.BlockOfficeLocation__text {
  color: #586267;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.BlockOfficeLocation__contacts {
  position: relative;
  z-index: 2;
  border-radius: 15px;
  border: 1px solid rgba(88, 98, 103, 0.15);
  background: #fff;
  padding: 30px;
  grid-column-start: 1;
  grid-column-end: 5;
  min-width: 480px;
}

.BlockOfficeLocation__btn {
  padding: 10px 26px;
  @include setBtn_primaryNotShadow();
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.BlockOfficeLocation__contactsInfoFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.BlockOfficeLocation__contactsPhoto {
  width: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.BlockOfficeLocation__contactsInfo {
  padding-top: 30px;

  a {
    color: #ff7060;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
  }

  h4 {
    color: #586267;
    font-family: NeutralFace;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-transform: uppercase;
  }
}

@media screen and (max-width: 1650px) {
  .BlockOfficeLocation__contacts {

  }
}

@media screen and (max-width: 1170px) {
  .BlockOfficeLocation__contacts {
    //grid-column-start: 1;
    //grid-column-end: 6;
  }
}

@media screen and (max-width: 740px) {
  .BlockOfficeLocation__contacts {
    min-width: inherit;
    grid-column-start: 1;
    border: none;
    grid-column-end: 5;
    padding: 0;
  }
  .BlockOfficeLocation__container {
    padding-top: 20px;
    padding-bottom: 0;
  }
  .BlockOfficeLocation__contactsInfo {
    padding-top: 20px;

    a {
      font-size: 14px;
    }

    h4 {
      font-size: 20px;
    }
  }
  .BlockOfficeLocation__map {
    position: relative;
    inset: inherit;
    height: 375px;
    width: 100%;
  }

  .BlockOfficeLocation__contactsInfoFooter {
    flex-direction: column;
    gap: 20px;
  }

  .BlockOfficeLocation__contactsInfoFooterLink {
    align-self: center;
    font-size: 12px;
  }

  .BlockOfficeLocation {
    gap: 40px;
  }

  .BlockOfficeLocation__label {
    font-size: 12px;
  }
  .BlockOfficeLocation__text {
    font-size: 14px;
  }
}
</style>
