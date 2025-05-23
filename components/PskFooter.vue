<script setup lang="ts">
import type { IPopupFormProps } from "@/components/PopupForm.vue";
import type { IPopupBlockProps } from "@/components/PopupBlock.vue";
import { INavLink } from "@/types/FrontTypes";
import SocialLinks from "@/components/UI/SocialLinks.vue";

var router = useRouter();

var link_logo_header = useState("link_logo_header", () => "/");
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore
var popup_block_props = useState<IPopupBlockProps | null>("popup_block_props", () => null) //prettier-ignore
var links_header = useState<INavLink[]>("links_header", () => []);
var cur_year = new Date().getFullYear() + "";

var handleClickLinkLogo = (event: Event) => {
  event.preventDefault();
  window.location.pathname !== "/" && router.push("/");
};

var handleClickBtnGetCall = () => {
  setPopupGetCall();
};

var setPopupGetCall = () => {
  ymReachGoal("open-form_order-call_footer"); // Открыть форму - "Заказать звонок" - подвал сайта

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
        ymReachGoal("send-form_order-call_footer"); // Отправить форму - "Заказать звонок" - подвал сайта
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

var handleClickQuestionBtnOffer = () => {
  popup_block_props.value = { component_name: "PskOffer" };
};
</script>

<template>
  <footer class="PskFooter">
    <div class="PskFooter__top">
      <NuxtLink :href="link_logo_header" class="PskFooter__LinkLogo">
        <img width="160" height="38" src="/icons/icon_logo_project_footer.svg" alt="logo" />
      </NuxtLink>
      <div class="PskFooter__topCall">
        <a class="PskFooter__phoneNumber" href="tel:+73452555551">+ 7 (3452) 55-55-51</a>
        <button class="PskFooter__btnGetCallDesktop" @click="handleClickBtnGetCall">Заказать звонок</button>
      </div>
    </div>
    <div class="PskFooter__middle">
      <nav class="PskFooter__middleNav">
        <ul class="PskFooter__middleUl">
          <li v-for="link of links_header" :key="link.href">
            <NuxtLink class="PskFooter__middleA" :href="link.href">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="PskFooter__middleDescLinks">
        <a
          target="_blank"
          class="PskFooter__middleDescLinksErzrf"
          href="https://erzrf.ru/top-zastroyshchikov/tyumenskaya-oblast?topType=0&date=210101&officeRegion=%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C"
        >
          <img width="38" height="50" src="/icons/icon_erzrf.svg" alt="erzrf" />
        </a>
        <a target="_blank" class="PskFooter__middleDescLinksPsk" href="https://72dom.com?utm_source=drujeskiy">
          <img src="/icons/icon_psk.svg" alt="PSK" />
        </a>
      </div>
      <ul class="PskFooter__middlePolicy">
        <li>
          <NuxtLink class="PskFooter__link" to="/legal"> Подробные условия ипотеки </NuxtLink>
        </li>
        <li>
          <NuxtLink class="PskFooter__link" rel="license" to="/policy">Политика конфиденциальности </NuxtLink>
        </li>
      </ul>
      <SocialLinks class="PskFooter__social" />
    </div>
    <div class="PskFooter__bottom">
      <p>&copy;&nbsp;{{ cur_year }}, ООО &laquo;СЗ&nbsp;ПСК Дом&raquo;&nbsp;&mdash; Центр&raquo;</p>
      <p>
        Не&nbsp;является публичной офертой
        <svg
          id="question"
          @click="handleClickQuestionBtnOffer"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <circle cx="6.5" cy="6.00098" r="5.76" stroke="#C5C5C5" stroke-width="1" />
          <path
            d="M6.62632 7.32825H6.15263C6.15526 7.09929 6.17763 6.90535 6.21974 6.74643C6.26184 6.58751 6.33026 6.44071 6.425 6.30603C6.51974 6.17135 6.64737 6.0232 6.80789 5.86158C6.94737 5.71882 7.07105 5.58684 7.17895 5.46562C7.28684 5.34172 7.37105 5.20569 7.43158 5.05754C7.49474 4.90939 7.52632 4.72758 7.52632 4.51209C7.52632 4.29929 7.48947 4.11209 7.41579 3.95047C7.34211 3.78886 7.23158 3.66226 7.08421 3.57067C6.93684 3.47909 6.75263 3.4333 6.53158 3.4333C6.32895 3.4333 6.14737 3.4737 5.98684 3.55451C5.82895 3.63532 5.70395 3.75249 5.61184 3.90603C5.52237 4.05687 5.475 4.24003 5.46974 4.45552H5C5.00526 4.14845 5.07632 3.88717 5.21316 3.67168C5.35263 3.4535 5.53684 3.28785 5.76579 3.17471C5.99737 3.05889 6.25263 3.00098 6.53158 3.00098C6.84737 3.00098 7.11316 3.06428 7.32895 3.19088C7.54737 3.31747 7.71316 3.49391 7.82632 3.72017C7.94211 3.94643 8 4.20906 8 4.50805C8 4.74778 7.96053 4.96461 7.88158 5.15855C7.80263 5.3498 7.69342 5.53027 7.55395 5.69997C7.41447 5.86966 7.25263 6.04071 7.06842 6.2131C6.9 6.36125 6.78421 6.53094 6.72105 6.72219C6.65789 6.91074 6.62632 7.11276 6.62632 7.32825ZM6.08947 8.67774C6.08947 8.58616 6.11842 8.50939 6.17632 8.44744C6.23421 8.38279 6.31316 8.35047 6.41316 8.35047C6.51316 8.35047 6.59211 8.38279 6.65 8.44744C6.71053 8.50939 6.74079 8.58616 6.74079 8.67774C6.74079 8.76663 6.71053 8.8434 6.65 8.90805C6.59211 8.97 6.51316 9.00098 6.41316 9.00098C6.31316 9.00098 6.23421 8.97 6.17632 8.90805C6.11842 8.8434 6.08947 8.76663 6.08947 8.67774Z"
            fill="#C5C5C5"
          />
        </svg>
      </p>
      <p>Разработано в&nbsp;Dom-digital</p>
    </div>
  </footer>
</template>

<style lang="scss">
.PskFooter {
  @include useLCWP();
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: $c_text;
  gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  #question {
    circle,
    path {
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      circle,
      path {
        stroke: $c_orange;
      }
    }
  }
}

.PskFooter__top {
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  height: max-content;
}

.PskFooter__bottom {
  grid-column: span 3;
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin-bottom: -3px;
    margin-left: 2px;
  }
}

.PskFooter__middlePolicy {
  display: flex;
  align-items: center;
  gap: 20px;
  grid-area: policy;
}

.PskFooter__social {
  justify-self: end;
  align-self: center;
  grid-area: social;

  path {
    fill: $c_body;
  }
}

.PskFooter__middle {
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-template-areas:
    "nav nav descLinks"
    "policy policy social";
}

.PskFooter__middleA {
  font-size: 18px;
}

.PskFooter__link {
  white-space: nowrap;
  line-height: 140%;
  font-size: 14px;
  @include setLink($c_body, $c_orange, $c_text, $c_orange);
}

.PskFooter__middleDescLinks {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  align-self: start;
  justify-self: end;
  grid-area: descLinks;
}

.PskFooter__middleNav {
  grid-area: nav;
  align-self: center;
}

.PskFooter__middleUl {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.PskFooter__middleA {
  @include setLink($c_body, $c_orange, $c_text, $c_text);
  white-space: nowrap;
}

.PskFooter__bottom p {
  color: #c5c5c5;
  font-family: "BellotaText";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.PskFooter__phoneNumber {
  margin-right: 20px;
  font-size: 14px;
  @include setLink($c_body, $c_orange, $c_text, $c_text);
}

.PskFooter__btnGetCallDesktop {
  @include setBtn_dark();
  padding: 10px 36px;
}

.PskFooter__subBtn {
  @include setBtnQuestion_dark();
  margin: 0 0 0 10px;
}

@media screen and (max-width: 1170px) {
  .PskFooter__bottom {
    flex-wrap: wrap;

    p:nth-child(2) {
      order: -1;
      flex: 0 1 100%;
    }
  }
  .PskFooter__btnGetCallDesktop {
    padding: 10px 20px;
  }
  .PskFooter__middleA {
    font-size: 14px;
  }

  .PskFooter__middlePolicy {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .PskFooter__middle {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    grid-template-areas:
      "nav nav descLinks"
      "policy policy social";
  }

  .PskFooter__middleUl {
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 100px;
    align-items: start;
    gap: 15px 81px;
    width: max-content;
  }

  .PskFooter__link {
    border-bottom: 1px solid white;
  }
}

@media screen and (max-width: 740px) {
  .PskFooter {
    padding-bottom: 80px;
  }

  .PskFooter__LinkLogo {
    width: 130px;
    height: 30px;
  }
  .PskFooter__middleDescLinksPsk img {
    width: 125px;
    height: auto;
  }

  .PskFooter__middle {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0;
    row-gap: 40px;
    grid-template-areas:
      "nav nav"
      "social descLinks"
      "policy descLinks";
  }

  .PskFooter__topCall {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .PskFooter__social {
    justify-self: flex-start;
  }

  .PskFooter__middleDescLinks {
    flex-direction: column;
    justify-content: flex-end;
    align-self: start;
    margin-left: -28px;
    margin-top: -10px;
    margin-bottom: -5px;
    gap: 23px;
  }
  .PskFooter__middleDescLinksErzrf {
    order: 1;
  }

  .PskFooter__bottom {
    gap: 10px;
  }
  .PskFooter__middleUl {
    gap: 15px 40px;
  }
}

@media screen and (max-width: 600px) {
  .PskFooter {
  }

  .PskFooter__middleNav {
    display: block;
    grid-area: unset;
  }
  .PskFooter__middleUl {
    column-gap: 66px;
  }

  .PskFooter__bottom {
    p:nth-child(1) {
      order: 2;
    }

    p:nth-child(2) {
      order: -1;
    }

    p:nth-child(3) {
      order: 1;
    }
  }
}
</style>
