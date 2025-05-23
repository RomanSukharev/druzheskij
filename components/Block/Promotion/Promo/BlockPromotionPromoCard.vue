<script setup lang="ts">
import type { IResponsePlansPlansItems } from 'types/ResponseType'
import type { IPopupPromoProps } from '@/components/PopupPromo.vue'
import type { IPopupVideoPlayerProps } from 'components/Popup/VideoPlayer/PopupVideoPlayer.vue'

interface IPlanPromotionElement extends IResponsePlansPlansItems {
  ready_date: string
  old_payment: number
}

export interface IBlockPromotionPromoCardProps {
  plan: IPlanPromotionElement
}

var popup_promo_props = useState<IPopupPromoProps | null>('popup_promo_props', () => null)
var popup_video_player_props = useState<IPopupVideoPlayerProps | null>("popup_video_player_props", () => null); //prettier-ignore

var props = defineProps<IBlockPromotionPromoCardProps>()
var title = computed(() => `${cardTitleFromArticle.get(props.plan.type)}`)
var images = computed(() =>
  props.plan.images.map((i) => ({
    ...i,
    name: '',
  }))
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
</script>

<template>
  <article class="BlockPromotionSeverCard" :id="`plan_${plan.article}`">
    <div class="BlockPromotionSeverCard__topContent">
      <button
        class="BlockPromoPlanCard__btnSeeVideo"
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

      <div class="BlockPromotionSeverCard__wrapperUICardGallery">
        <PartPlanCardGallery :images="images" />
      </div>
    </div>

    <div class="BlockPromotionSeverCard__bottomContent">
      <div class="BlockPromotionSeverCard__bottomContentTop">
        <PartPlanCardHeading :title="title" :ready_date="plan.ready_date!" />
        <PartPlanCardPrograms :cost="+plan.old_payment" :programs="plan.programs" />
      </div>

      <div class="BlockPromotionSeverCard__bottomContentBottom">
        <button class="BlockPromotionSeverCard__btnKnowPrice" @click="knowPrice">Узнать условия</button>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.BlockPromotionSeverCard {
  position: relative;

  scroll-margin-top: calc(var(--header-height) + 100px);

  max-width: 740px;
  width: 100%;
  height: 464px;
  background: #fff;
  border-radius: 15px;

  display: grid;
  grid-template-columns: 480px 1fr;
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

.BlockPromotionSeverCard__topContent {
  position: relative;
  padding: 80px 20px 16px 20px;
  background-color: $c_body_hover;
  border-radius: 15px 0 0 15px;
}

.BlockPromoPlanCard__btnSeeVideo {
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

.BlockPromotionSeverCard__wrapperUICardGallery {
  position: relative;
  height: 100%;
}

.BlockPromotionSeverCard__bottomContent {
  padding: 20px;
  border-left: 1px solid rgba(69, 69, 69, 0.1);

  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
}

.BlockPromotionSeverCard__bottomContentTop {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

.BlockPromotionSeverCard__bottomContentBottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.BlockPromotionSeverCard__btnKnowPrice {
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

@media (max-width: 900px) {
  .BlockPromotionSeverCard {
    scroll-margin-top: calc(var(--header-height) + 80px);

    grid-template-columns: 1fr;
    height: auto;
  }

  .BlockPromotionSeverCard__topContent {
    padding: 20px;
    border-radius: 15px 15px 0 0;
  }

  .BlockPromotionSeverCard__wrapperUICardGallery {
    height: 300px;
  }

  .BlockPromoPlanCard__btnSeeVideo {
    position: static;
    margin-bottom: 32px;
  }

  .BlockPromotionSeverCard__bottomContent {
    border-left: none;
    border-top: 1px solid var(--border-muted);
  }
}
</style>
