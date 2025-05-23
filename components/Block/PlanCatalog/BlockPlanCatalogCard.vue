<script setup lang="ts">
import MortgagePrograms from '~/components/Part/PlanCard/MortgagePrograms'

import type { IPopupFormProps } from '@/components/PopupForm.vue'
import type { IResponsePlansPlansItems } from '@/types/ResponseType'
import type { IPopupVideoPlayerProps } from '@/components/Popup/VideoPlayer/PopupVideoPlayer.vue'
import type { IPopupCalcProps } from '@/components/Popup/PopupCalc.vue'

export interface IBlockPlanCatalogCardProps {
  plan: IResponsePlansPlansItems
}

var popup_form_props = useState<IPopupFormProps | null>('popup_form_props', () => null)
var popup_video_player_props = useState<IPopupVideoPlayerProps | null>("popup_video_player_props", () => null); //prettier-ignore
var popup_calc_props = useState<IPopupCalcProps | null>("popup_calc_props", () => null); //prettier-ignore
var props = defineProps<IBlockPlanCatalogCardProps>()

var title = computed(
  () =>
    `${
      props.plan.square
        ? cardTitleFromArticle.get(props.plan.type) + ' ' + props.plan.square
        : cardTitleFromArticle.get(props.plan.type)
    } м²`
)

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

var programs = computed(() => MortgagePrograms.getPrograms(props.plan))

var openVideo = (video_link: string) => {
  popup_video_player_props.value = {
    video: {
      link: video_link,
      autoplay: true,
    },
  }
}

var knowPrice = () => {
  var ym_params = {
    article: { [props.plan.article]: props.plan.square },
  }

  ymReachGoal("open_form-plan_know_price-main_catalog_" + props.plan.article.replace(/\//g, "_")); //prettier-ignore
  ymReachGoal('open_form-plan_know_price-main_catalog', ym_params) //ym_target - Код: Открыть форму - планировка "Узнать цену" - основной каталог квартир

  popup_form_props.value = {
    data: {
      text_header: 'Узнать условия',
      text_content:
        'Напишите имя и&nbsp;телефон, чтобы мы&nbsp;могли связаться. Расскажем подробнее про планировку, выгодные акции и&nbsp;подберем удобный способ оплаты.',
      text_btn: 'Оставить заявку',
      fields: {
        lead_title: `Оставить заявку (${props.plan.article} - ${props.plan.square} кв.м.) (ЗпКВ)`,
      },
      cbSuccessFetch: () => {
        ymReachGoal("send_form-plan_know_price-main_catalog_" + props.plan.article.replace(/\//g, "_")); //prettier-ignore
        ymReachGoal('send_form-plan_know_price-main_catalog', ym_params) //ym_target - Код: Отправить форму - планировка "Узнать цену" - основной каталог квартир
      },
      popup_notify_props_success: {
        text_content: 'Получили вашу заявку. Скоро свяжемся и&nbsp;подберём для вас выгодные условия покупки.',
        status: 'succes',
      },
    },
  }
}

var openCalcWidget = () => {
  popup_calc_props.value = {
    cost: +props.plan.cost,
    additional_comments: [`Планировка: ${props.plan.article} - ${props.plan.square} кв.м.`],
  }
}
</script>

<template>
  <article class="BlockPlanCatalogCard" :id="`plan_${plan.article}`">
    <div class="BlockPlanCatalogCard__topContent">
      <button
        class="BlockPlanCard__btnSeeVideo"
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

      <div class="BlockPlanCatalogCard__wrapperUICardGallery">
        <PartPlanCardGallery :images="plan.images" />
      </div>
    </div>

    <div class="BlockPlanCatalogCard__bottomContent">
      <div class="BlockPlanCatalogCard__bottomContentTop">
        <PartPlanCardHeading :title="title" :ready_date="plan.ready_date!" />
        <PartPlanCardPrograms :cost="+plan.cost" :programs="programs" />
      </div>

      <div class="BlockPlanCatalogCard__bottomContentBottom">
        <button class="BlockPlanCatalogCard__btnCaclMortgage" @click="openCalcWidget">Рассчитать ипотеку</button>
        <button class="BlockPlanCatalogCard__btnKnowPrice" @click="knowPrice">Узнать условия</button>
        <PartPlanCardRest class="BlockPlanCatalogCard__PartPlanCardRest" :remains_percent="plan.remains_percent" />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.BlockPlanCatalogCard {
  position: relative;

  scroll-margin-top: calc(var(--header-height) + 100px);

  max-width: 740px;
  min-width: 580px;
  width: 100%;
  height: 464px;
  background: #fff;
  border-radius: 15px;

  display: grid;
  grid-template-columns: 1fr 260px;
  justify-content: space-between;

  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 15px;
    border: 1px solid var(--border-muted, rgba(69, 69, 69, 0.1));
  }

  &:hover {
    background: #fff;
    box-shadow: 0 16px 36px 0 rgba(0, 0, 0, 0.08), 0 8px 8px 0 rgba(0, 0, 0, 0.05);
  }
}

.BlockPlanCatalogCard__topContent {
  position: relative;
  padding: 80px 20px 16px 20px;
  background-color: $c_body_hover;
  border-radius: 15px 0 0 15px;
}

.BlockPlanCard__btnSeeVideo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;

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

.BlockPlanCatalogCard__wrapperUICardGallery {
  position: relative;
  height: 100%;
}

.BlockPlanCatalogCard__bottomContent {
  padding: 20px;
  border-left: 1px solid rgba(69, 69, 69, 0.1);

  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
}

.BlockPlanCatalogCard__bottomContentTop {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

.BlockPlanCatalogCard__bottomContentBottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.BlockPlanCatalogCard__btnKnowPrice {
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  @include setBtn_primary();
  padding: 10px 0;
  border-radius: 10px;
}

.BlockPlanCatalogCard__btnCaclMortgage {
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

@media (max-width: 1279px) {
  .BlockPlanCatalogCard {
    scroll-margin-top: calc(var(--header-height) + 80px);
    max-width: 500px;
    min-width: 300px;
    grid-template-columns: 1fr;
    height: auto;
  }

  .BlockPlanCatalogCard__topContent {
    padding: 20px;
    padding-top: 84px;
    border-radius: 15px 15px 0 0;
  }

  .BlockPlanCatalogCard__wrapperUICardGallery {
    height: 300px;
  }

  .BlockPlanCard__btnSeeVideo {
    position: absolute;
  }

  .BlockPlanCatalogCard__bottomContent {
    border-left: none;
    border-top: 1px solid var(--border-muted);
  }

  .BlockPlanCatalogCard__bottomContentTop {
    gap: 32px;
  }
}

@media (max-width: 719px) {
  .BlockPlanCatalogCard {
    max-width: 100%;
    min-width: 288px;
  }
  .BlockPlanCatalogCard__topContent {
    padding-bottom: 16px;
  }
}
</style>
