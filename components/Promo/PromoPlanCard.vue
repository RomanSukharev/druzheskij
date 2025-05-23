<script setup lang="ts">
import type { IResponsePlansPlansItems } from '@/types/ResponseType'
import type { IPopupPromoProps } from '@/components/PopupPromo.vue'
import type { IPopupGalleryProps } from '@/components/PopupGallery.vue'
import type { IPopupVideoPlayerProps } from '@/components/Popup/VideoPlayer/PopupVideoPlayer.vue'

var popup_promo_props = useState<IPopupPromoProps | null>('popup_promo_props', () => null)
var popup_gallery_props = useState<IPopupGalleryProps | null>('popup_gallery_props', () => null)
var popup_video_player_props = useState<IPopupVideoPlayerProps | null>("popup_video_player_props", () => null); //prettier-ignore

var props = defineProps<{ plan: IResponsePlansPlansItems; id: string }>()

var imgs = computed(() => {
  return props.plan.images.map((i) => {
    if (i.name === 'На генплане') {
      i.name = 'На карте'
    }
    return {
      src: i?.previews?.medium ?? i.path,
      title: i.name,
    }
  })
})

var cardTitleFromArticle = new Map([
  ['C', 'Студия'],
  ['1K', '1-комнатная'],
  ['2K', '2-комнатная'],
  ['3K', '3-комнатная'],
  ['4K', '4-комнатная'],
  ['2E', 'Евро 2-комнатная'],
  ['3E', 'Евро 3-комнатная'],
  ['4E', 'Евро 4-комнатная'],
])

var title = computed<string>(() => cardTitleFromArticle.get(props.plan.type) || '')

interface IProgramm {
  name: string
  min_payment: string
  tooltip: string
}

/**
 * @description Сначала пытаемся собрать программу из полей props.plan.min_payment_priority.
 * Если их нет, то пытаемся найти её в props.plan.payments и собрать от туда.
 * Если и там не получилось собрать, то возвращаем null
 */
var getProgrammFamily = (): IProgramm | null => {
  if (
    props.plan?.min_payment_priority?.min_payment &&
    props.plan?.min_payment_priority?.mortgage?.base_rate &&
    props.plan?.fact_init_fee_percent &&
    props.plan?.min_payment_priority?.mortgage?.mortgage_term
  ) {
    var tooltip = `Рассчитан по ставке
              ${props.plan.min_payment_priority.mortgage.base_rate}%
              <br> с первоначальным взносом 
              ${props.plan.fact_init_fee_percent}%
              <br> на срок 
              ${props.plan.min_payment_priority.mortgage.mortgage_term / 12} лет`

    return {
      min_payment: props.plan.min_payment_priority.min_payment,
      name: 'семейная ипотека',
      tooltip,
    }
  }

  var programm_family = props.plan?.payments?.find?.(i => i?.mortgage?.title?.includes?.('Семейная ипотека для сайтов')) //prettier-ignore
  if (
    programm_family &&
    programm_family.min_payment &&
    programm_family.mortgage.base_rate &&
    programm_family.mortgage.mortgage_init_fee &&
    programm_family.mortgage.mortgage_term
  ) {
    var tooltip = `Рассчитан по ставке
                  ${programm_family.mortgage.base_rate}%
                  <br> с первоначальным взносом ${programm_family.mortgage.mortgage_init_fee}%
                  <br> на срок
                  ${programm_family.mortgage.mortgage_term / 12} лет`

    return {
      name: 'семейная ипотека',
      min_payment: programm_family.min_payment,
      tooltip,
    }
  }

  return null
}

var programms = computed(() => {
  var result: IProgramm[] = []

  var programm_family = getProgrammFamily()
  programm_family && result.push(programm_family)

  var programm_state = props.plan?.payments?.find(i => i?.mortgage?.title?.includes?.('Госпрограмма для сайтов')) //prettier-ignore
  if (
    programm_state &&
    programm_state.min_payment &&
    programm_state.mortgage.base_rate &&
    programm_state.mortgage.mortgage_init_fee &&
    programm_state.mortgage.mortgage_term
  ) {
    var tooltip = `Рассчитан по ставке 
                  ${programm_state.mortgage.base_rate}%
                  <br> с первоначальным взносом ${programm_state.mortgage.mortgage_init_fee}%
                  <br> на срок
                  ${programm_state.mortgage.mortgage_term / 12} лет`

    result.push({
      name: 'госпрограмма',
      min_payment: programm_state.min_payment,
      tooltip,
    })
  }

  var programm_new_building = props.plan?.payments?.find(i => i?.mortgage?.title === "Новостройка, 16.5% от банка") //prettier-ignore
  if (
    programm_new_building &&
    programm_new_building.min_payment &&
    programm_new_building.mortgage.base_rate &&
    programm_new_building.mortgage.mortgage_init_fee &&
    programm_new_building.mortgage.mortgage_term
  ) {
    var tooltip = `Рассчитан по ставке 
                  ${programm_new_building.mortgage.base_rate}%
                  <br> с первоначальным взносом ${programm_new_building.mortgage.mortgage_init_fee}%
                  <br> на срок
                  ${programm_new_building.mortgage.mortgage_term / 12} лет`
    result.push({
      name: 'стандартный платеж',
      min_payment: programm_new_building.min_payment,
      tooltip,
    })
  }

  return result
})

var lookCosts = () => {
  var ym_params = {
    article: { [props.plan.article]: props.plan.square },
  }

  // ymReachGoal("open-form_get-order_main-catalog_" + props.plan.article.replace(/\//g, "_")); //prettier-ignore
  ymReachGoal('open-form_enter-in-catalog', ym_params) //ym_target - Открыть форму - "Оставить заявку" - основной каталог квартир

  popup_promo_props.value = {
    data: {
      text_header: 'Остался последний шаг для просмотра всех цен на&nbsp;квартиру',
      text_content: 'Укажите номер телефона для входа в&nbsp;каталог квартир. Квартиры откроются сразу после входа.',
      text_btn: 'Войти в каталог',
      lead_title: `Вход в каталог (${props.plan.article} - ${props.plan.square} кв.м.) (ЗпКВ)`,
      cbSuccessFetch: () => {
        ymReachGoal('send-form_enter-in-catalog', ym_params)
      },

      popup_notify_promo_props_success: {
        article: props.plan.article,
        text_header: 'Вход подтвержден. Сейчас вы&nbsp;будете перенаправлены в&nbsp;каталог квартир',
        max_width: 500,
      },
    },
  }
}

var handlerClickImg = (img_idx: number) => {
  var img_list = props.plan.images.map((i) => ({
    src: i.path,
    title: i.name,
  }))

  popup_gallery_props.value = {
    imgs: img_list,
    current_img_idx: img_idx,
  }
}

var openVideo = (video_link: string) => {
  popup_video_player_props.value = {
    video: {
      link: video_link,
      autoplay: true,
    },
  }
}
</script>

<template>
  <article class="PromoPlanCard" :id="id">
    <div class="PromoPlanCard__upContent">
      <div class="PromoPlanCard__view">
        <button
          class="PromoPlanCard__btnSeeVideo"
          v-if="plan.video_review"
          @click="openVideo(plan.video_review as string)"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#FF7060" />
            <rect x="4" y="4" width="24" height="24" rx="12" fill="#FF7060" />
            <path
              d="M20.5 15.1273C21.1667 15.5152 21.1667 16.4848 20.5 16.8727L14.5 20.3635C13.8333 20.7514 13 20.2665 13 19.4908L13 12.5092C13 11.7335 13.8333 11.2486 14.5 11.6365L20.5 15.1273Z"
              fill="white"
            />
          </svg>

          Смотреть видеотур
        </button>
        <ul v-if="plan.tags?.length" v-grabscroll class="PromoPlanCard__viewTagList">
          <li class="PromoPlanCard__viewTagItem" v-for="tag of plan.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
        <div class="PromoPlanCard__GalleryBox">
          <div class="PromoPlanCard__CardGalleryBox">
            <UICardGallery :img_list="imgs" @clickImg="handlerClickImg" />
          </div>
        </div>
      </div>
    </div>

    <div class="PromoPlanCard__downContent">
      <div class="PromoPlanCard__title">
        <div class="PromoPlanCard__titleUp">
          <h4 v-if="title" v-html="title"></h4>
          <span class="PromoPlanCard__viewParamSquare" v-if="plan.square">
            {{ plan.square }}&nbsp;м<sup class="PromoPlanCard__viewParamFraction">2</sup>
          </span>
        </div>
        <div v-if="plan.ready_date" class="PromoPlanCard__titleDown">
          <p>срок сдачи: {{ plan.ready_date }}</p>
        </div>
        <div class="PromoPlanCard__сostBonus">
          <p class="PromoPlanCard__сostBonusP">{{ ((+plan.cost / 100) * 5)?.toLocaleString('fr') }} бонусов</p>
        </div>
      </div>
      <PartPlanCardPrograms :programs="programms" />

      <div class="PromoPlanCard__btns">
        <button class="PromoPlanCard__btnKnowPrice" @click="lookCosts">Посмотреть цены</button>
        <ProgressLineForCard class="PromoPlanCard__ProgressLineForCard" :data="plan.remains_percent" />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.PromoPlanCard {
  grid-column: span 6;
  position: relative;
  border: 1px solid #58626726;
  border-radius: 15px;
  background-color: $c_body;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 230px;
}

.PromoPlanCard__title {
  @include setFlexColumn(4px);
}

.PromoPlanCard__titleUp {
  h4,
  span {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: $c_text;
  }

  h4 {
    white-space: nowrap;
  }

  span {
    margin-bottom: -7px;
  }

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 8px;
}

.PromoPlanCard__titleDown {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  width: min(240px, 100%);
  line-height: 150%; /* 18px */
  color: $c_text;
}
.PromoPlanCard__сostBonus {
  gap: 4px;
  padding: 4px 12px;
  border-radius: 5px;
  border: 1px solid #7a3cff30;
  background: linear-gradient(99deg, rgba(122, 60, 255, 0.1) 0%, rgba(142, 89, 255, 0.1) 100%);
  width: fit-content;
  margin-top: 12px;
}

.PromoPlanCard__сostBonusP {
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 20.8px */
  background: linear-gradient(99deg, #7a3cff 0%, #8e59ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
  text-align: center;
  width: fit-content;
}

.PromoPlanCard__upContent {
  background-color: $c_body_hover;
  border-radius: 15px 0 0 15px;
  padding: 20px 20px 16px 20px;
}

.PromoPlanCard__downContent {
  border-radius: 0 15px 15px 0;
  background-color: $c_body;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.PromoPlanCard__view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  height: 100%;
}

.PromoPlanCard__viewParams {
  padding: 20px 20px 0 30px;
  display: flex;
  justify-content: space-between;
}

.PromoPlanCard__viewParamPlanType {
  font-family: NeutralFace;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #53585b;
}

.PromoPlanCard__viewParamSquare {
  font-family: NeutralFace;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #53585b;

  position: relative;
  top: -6px;
}

.PromoPlanCard__viewParamFraction {
  font-size: 12px;
}

.PromoPlanCard__GalleryBox {
  flex: 1;
  min-height: clamp(260px, calc(50vw - 20em), 348px);
  margin-bottom: 13px;
  position: relative;
}

.PromoPlanCard__CardGalleryBox {
  height: 100%;
  width: 100%;
}

.PromoPlanCard__btnSeeVideo {
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  outline: none;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  width: 200px;
  transition: all 0.3s ease-in-out;
  color: $c_text;

  svg {
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  background-color: $c_body_hover;

  &:hover {
    color: $c_primary;

    svg {
      box-shadow: 0 1px 14px 0 rgba(255, 112, 96, 0.3);
    }
  }
}

.PromoPlanCard__viewTagList {
  overflow-x: auto;
  list-style-type: none;
  display: flex;
  gap: 8px;
  justify-content: center;
  @include hideScroll();
}

.PromoPlanCard__viewTagItem {
  border-radius: 28px;
  flex-shrink: 0;
  border: 1px solid rgba(88, 98, 103, 0.3);
  background-color: $c_body;
  font-family: Inter;
  font-size: 12px;
  color: $c_text;
  padding: 6px 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}

.PromoPlanCard__programms {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.PromoPlanCard__programmItem {
  .PskTooltip__content {
    left: 70%;
    transform: translateX(-70%);
  }
}

.PromoPlanCard__programmItem:first-child {
  border-bottom: 1px solid rgba(88, 98, 103, 0.15);
  padding: 12px 0;
  margin: 0 30px -5px 0;
  &.noBorderBottom {
    border-bottom: none;
  }

  .PromoPlanCard__programmPay {
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    color: $c_primary;
    white-space: nowrap;
    gap: 8px;
  }

  .PromoPlanCard__programmName {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }

  .PromoPlanCard__tooltipIcon {
    transform: scale(1.3);
  }
}

.PromoPlanCard__programmPay {
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  color: $c_text;

  display: flex;
  gap: 8.5px;
  align-items: center;
}

.PromoPlanCard__programmName {
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: $c_text;

  opacity: 0.8;
}

.PromoPlanCard__tooltipIcon {
  cursor: pointer;
}

.PromoPlanCard__tooltipContent {
  @include setFontStyle17();
  color: $c_text;
  max-width: 360px;
  width: max-content;
}

.PromoPlanCard__btns {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.PromoPlanCard__btnKnowPrice {
  @include setBtn_primaryNotShadow();
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding: 9px 0;
}

.PromoPlanCard__btnGetOrder {
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: $c_text;

  background: $c_body;
  padding: 9px 0;
  border: 1px solid $c_primary;
  border-radius: 10px;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: $c_primary;
    color: $c_body;
  }

  cursor: pointer;
}

@media screen and (max-width: 1400px) {
  .PromoPlanCard {
    grid-column: span 4;

    display: flex;
    flex-direction: column;
    height: max-content;
  }

  .PromoPlanCard__upContent {
    border-radius: 15px 15px 0 0;
  }

  .PromoPlanCard__downContent {
    gap: 32px;
    border-radius: 0 0 15px 15px;
  }

  .PromoPlanCard__view {
    gap: 32px;
    border-radius: 15px 15px 0 0;
    background: $c_body_hover;
  }

  .PromoPlanCard__viewParams {
  }

  .PromoPlanCard__programms {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .PromoPlanCard__UIPskTooltip {
    .PskTooltip__content {
      left: 40%;
      transform: translateX(-40%);
    }
  }

  .PromoPlanCard__programmItem:nth-child(2n-1) {
    .PromoPlanCard__UIPskTooltip {
      .PskTooltip__content {
        left: 90%;
        transform: translateX(-90%);
      }
    }
  }

  .PromoPlanCard__programmItem:first-child {
    grid-column: span 2;
    justify-self: start;
    width: 100%;
    padding: 0 0 15px 0;
    margin: 0 0 -1px 0;

    .PromoPlanCard__programmPay {
      font-size: 20px;
      gap: 11px;
    }

    .PromoPlanCard__programmName {
      font-size: 12px;
    }

    .PromoPlanCard__UIPskTooltip {
      .PskTooltip__content {
        background-color: $c_body;

        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .PromoPlanCard__programmPay {
    font-size: 12px;
    color: $c_text;

    display: flex;
    gap: 8.5px;
    align-items: center;
  }

  .PromoPlanCard__programmName {
    font-size: 10px;
    line-height: 100%;
    color: $c_text;

    opacity: 0.8;
  }

  .PromoPlanCard__btns {
    position: relative;
    right: 0;
    top: 0;

    margin: 5px 0 0 0;

    width: 100%;
  }

  .PromoPlanCard__btnKnowPrice,
  .PromoPlanCard__btnGetOrder {
    padding: 12.5px 0;
  }

  .PromoPlanCard__btnGetOrder {
  }
}

@media screen and (max-width: 1170px) {
  .PromoPlanCard {
    grid-column: span 4;
  }
}
</style>
