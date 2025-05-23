<script setup lang="ts">
import type { INavLink } from "@/types/FrontTypes";
import type { IPopupFormProps } from "@/components/PopupForm.vue";

var router = useRouter();

var links_header = useState<INavLink[]>("links_header");
var link_logo_header = useState("link_logo_header", () => "/");
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

var is_header_double = useState("is_header_double", () => false);
var is_SecondHeader_hidden = useState("is_second_header_hidden", () => true);

var is_NavMobile_open = ref(false);
var is_NavMobile_hidden = ref(true); //для анимации скрытия

var handleClickPhoneNumber = () => {
  ymReachGoal("click_phone-number_header"); //ym_target - Клик - Номер телефона - Шапка сайта
};

var handleClickBtnGetCall = () => {
  setPopupGetCall();
};

var handleClickMenuBtn = () => {
  is_SecondHeader_hidden.value = true;
  is_header_double.value = false;

  // отвечает за открытие/закрытие меню навигации
  if (!is_NavMobile_open.value) {
    is_NavMobile_hidden.value = false;
    is_NavMobile_open.value = true;
    document.body.style.overflow = "hidden"; //скрыть скролл body
    return;
  }

  document.body.style.overflow = "auto"; //разрешить скролл body
  is_NavMobile_hidden.value = true;
  setTimeout(() => {
    is_NavMobile_open.value = false;
  }, 300);
};

var handleNavMobileGetCall = () => {
  is_NavMobile_open.value = false;
  setPopupGetCall();
};

var setPopupGetCall = () => {
  ymReachGoal("open-form_order-call_header"); //ym_target - Открыть форму - "Заказать звонок" - Шапка сайта

  popup_form_props.value = {
    data: {
      text_header: "Заказать звонок",
      text_content:
        "Укажите имя и телефон, мы перезвоним и ответим на ваши вопросы о квартале. Не будем беспокоить вас пустыми звонками, покупка квартиры — только ваше решение.",
      text_btn: "Заказать звонок",
      fields: {
        lead_title: "Заказать звонок (ЗпОД)",
      },
      cbSuccessFetch() {
        ymReachGoal("send-form_order-call_header"); //ym_target - Отправить форму - "Заказать звонок" - Шапка сайта
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
  <header id="header" class="PskHeader">
    <div class="PskHeader__content">
      <NuxtLink :href="link_logo_header">
        <img class="PskHeader__imgLogoProject" src="/icons/icon_logo_project.svg" alt="Логотип проекта 'Дом на Большой Спасской'" />
      </NuxtLink>

      <!-- ------------------- Отображается на больних мониторах (start) ------------------- -->
      <nav class="PskHeader__navChapterDesktop">
        <ul class="PskHeader__navChapterDesktopUl">
          <li v-for="link of links_header">
            <NuxtLink
              :class="`${link.special ? 'PskHeader__navChapterDesktopA_special' : 'PskHeader__navChapterDesktopA'} `"
              :href="link.href"
              >{{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="PskHeader__callMenuDesktop">
        <a class="PskHeader__phoneNumberDesktop" href="tel:+73452555551" @click="handleClickPhoneNumber">+7 (3452) 55-55-51</a>
        <button class="PskHeader__btnGetCallDesktop" @click="handleClickBtnGetCall">Заказать звонок</button>
      </div>
      <!-- ------------------- Отображается на больних мониторах (end) ------------------- -->

      <!-- ------------------- Отображается на маленьких мониторах (start) ------------------- -->
      <div v-if="!is_NavMobile_open" class="PskHeader__callMenuPad">
        <a class="PskHeader__phoneNumberPad" href="tel:+73452555551" @click="handleClickPhoneNumber">+7 (3452) 55-55-51</a>
        <button class="PskHeader__btnMenuPad" @click="handleClickMenuBtn()"></button>
      </div>

      <button class="PskHeader__btnMenuPadClose" v-else @click="handleClickMenuBtn()"></button>
      <!-- ------------------- Отображается на маленьких мониторах (end) ------------------- -->

      <NavMobile
        :style="`display: ${is_NavMobile_open ? 'block' : 'none'}`"
        @close="handleClickMenuBtn()"
        @navMobileGetCall="handleNavMobileGetCall"
        :is_hidden="is_NavMobile_hidden"
      />
    </div>
  </header>
</template>

<style lang="scss">
.PskHeader {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--header_height);

  @include useLC();

  display: flex;
  align-items: center;
  background-color: $c_body_hover;
  border-bottom: 0.5px solid #eee;
  z-index: 500;
}

.PskHeader__content {
  width: 100%;
  height: 100%;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: $c_body_hover;
}

.PskHeader__imgLogoProject {
  width: 160px;
  height: auto;
}

.PskHeader__navChapterDesktopUl {
  list-style-type: none;
  display: flex;
  gap: 45px;
}

.PskHeader__navChapterDesktopA {
  font-size: 14px;
  @include setLink($c_text, $c_orange);
}

.PskHeader__navChapterDesktopA_special {
  pointer-events: all;
}

.PskHeader__phoneNumberDesktop,
.PskHeader__phoneNumberPad {
  font-size: 14px;
  @include setLink($c_text, $c_orange);

  margin: 0 35px 0 0;
}

.PskHeader__phoneNumberPad {
  margin-right: 0;
  display: none;
}

.PskHeader__btnGetCallDesktop {
  font-size: 14px;
  @include setBtn_contrast();
  padding: 9.5px 31.5px 9.5px 31.5px;
}

.PskHeader__btnMenuPad {
  @include setBtnHeaderMenu();
  display: none;
}

.PskHeader__callMenuPad {
  display: none;

  align-items: center;
  gap: 20px;
}

.PskHeader__btnMenuPadClose {
  @include setBtnHeaderMenuClose();
  background-color: $c_body_hover;
  display: none;
}

@media screen and (max-width: 1500px) {
  .PskHeader__imgLogoProject {
  }

  .PskHeader__navChapterDesktopUl {
    gap: 15px;
  }
}

@media screen and (max-width: 1350px) {
  .PskHeader__content {
  }

  .PskHeader__imgLogoProject {
  }

  .PskHeader__phoneNumberDesktop {
    font-size: 14px;
  }
}

@media screen and (max-width: 1170px) {
  .PskHeader__content {
    padding: 0 20px;
  }
  .PskHeader__imgLogoProject {
    width: 130px;
  }
  .PskHeader__callMenuPad {
    display: flex;
  }

  .PskHeader__callMenuDesktop,
  .PskHeader__navChapterDesktop {
    display: none;
  }
  .PskHeader__phoneNumberPad {
    display: block;
  }

  .PskHeader__btnMenuPadClose,
  .PskHeader__btnMenuPad {
    display: block;
  }
}

@media screen and (max-width: 740px) {
  .PskHeader__phoneNumberPad {
    display: none;
  }
}
</style>
