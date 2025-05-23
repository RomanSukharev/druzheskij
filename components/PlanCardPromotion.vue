<script setup lang="ts">
import type { IResponseObjectsPromotionElement } from '@/types/ResponseType'
import type { IPopupFormProps } from '@/components/PopupForm.vue'
import type { IPopupGalleryProps } from '@/components/PopupGallery.vue'

var popup_form_props = useState<IPopupFormProps | null>('popup_form_props', () => null)
var popup_gallery_props = useState<IPopupGalleryProps | null>('popup_gallery_props', () => null)

interface IPlanPromotionElement extends IResponseObjectsPromotionElement {
  ready_date: string
  old_payment: number
}

var props = defineProps<{
  plan: IPlanPromotionElement
  promotion_title: string
  promotion_id: string
}>()

var id = computed(() => {
  if (props.promotion_id && props.plan.slug) return `${props.promotion_id}_${props.plan.slug}`

  return ''
})

var imgs = ref(
  props.plan.media.map((i) => ({
    src: i.file,
    title: i.name,
  }))
)

var handlerClickImg = (img_idx: number) => {
  popup_gallery_props.value = {
    imgs: imgs.value,
    current_img_idx: img_idx,
  }
}

var handleClickBtnKnowPrice = () => {
  var ym_target_chank = id.value.replace(/\//g, '_')
  var ym_params = {
    [props.promotion_title]: props.plan.slug || 'null',
  }

  ym_target_chank && ymReachGoal(`open-form_promotion-${ym_target_chank}`)
  ymReachGoal(`open-form_promotion`, ym_params)

  popup_form_props.value = {
    data: {
      text_header: 'Узнать цену',
      text_content:
        'Сказать вам точную стоимость мы сможем по телефону. После мы не будем беспокоить вас пустыми звонками, покупка квартиры — только ваше решение',
      text_btn: 'Узнать цену',
      fields: {
        lead_title: `Узнать подробнее - ${props.promotion_title} (${props.plan.name}) (ЗпСП)`,
      },
      cbSuccessFetch() {
        ym_target_chank && ymReachGoal(`send-form_promotion-${ym_target_chank}`)
        ymReachGoal(`send-form_promotion`, ym_params)
      },
    },
  }
}

var payment = computed(() => (props.plan.payment ? props.plan.payment.toLocaleString('fr') : ''))
var old_payment = computed(() => (props.plan.old_payment ? props.plan.old_payment.toLocaleString('fr') : ''))

var mortgage_old_title = computed(() =>
  props.plan.old_mortgage_rate ? `Ипотека ${props.plan.old_mortgage_rate} %` : 'Ипотека'
)
</script>

<template>
  <article class="PlanCardPromotion">
    <div class="PlanCardPromotion__anchor" :id="id"></div>
    <div class="PlanCardPromotion__isBrick">
      <div class="PlanCardPromotion__isBrickIcon"></div>
      <h5 class="PlanCardPromotion__isBrickH">Эта квартира в&nbsp;секции&nbsp;из&nbsp;кирпича</h5>
    </div>

    <div class="PlanCardPromotion__stickerMortgage">
      <div class="PlanCardPromotion__stickerMortgageValue">{{ plan.mortgage_rate }}%</div>
      <div class="PlanCardPromotion__stickerMortgageText">ипотека</div>
    </div>

    <div class="PlanCardPromotion__GalleryBox">
      <div class="PlanCardPromotion__CardGalleryBox">
        <UICardGallery :img_list="imgs" @clickImg="handlerClickImg" />
      </div>
    </div>

    <div class="PlanCardPromotion__infoBox">
      <h5 class="PlanCardPromotion__h">{{ plan.name }}</h5>
      <div class="PlanCardPromotion__timeFinish">{{ plan.deadline }}</div>
      <div class="PlanCardPromotion__description" v-html="plan.description || ''"></div>
    </div>

    <div class="PlanCardPromotion__payBox">
      <div class="PlanCardPromotion__contrastPayment">
        <div class="PlanCardPromotion__contrastPaymentNow">
          <h5 class="PlanCardPromotion__contrastPaymentTitle">Ипотека</h5>
          <div class="PlanCardPromotion__contrastPaymentValue">
            от {{ payment }}&nbsp;₽/мес
            <UIPskTooltip v-if="plan.text_tooltip">
              <div class="PlanCardPromotion__tooltip"></div>
              <template v-slot:content>
                <p class="PlanCardPromotion__tooltipContent" v-html="plan.text_tooltip"></p>
              </template>
            </UIPskTooltip>
          </div>
        </div>

        <div class="PlanCardPromotion__contrastPaymentOld">
          <h5 class="PlanCardPromotion__contrastPaymentTitleOld">{{ mortgage_old_title }}</h5>
          <div class="PlanCardPromotion__contrastPaymentValueOld">от {{ old_payment }}&nbsp;₽/мес</div>
        </div>
      </div>
      <button class="PlanCardPromotion__btnKnowPrice" @click="handleClickBtnKnowPrice">Узнать цену</button>
    </div>
  </article>
</template>

<style lang="scss">
.PlanCardPromotion {
  display: grid;
  grid-template-columns: 562fr 597fr;
  position: relative;

  border: 1px solid #bdbdbd;
  border-radius: 15px;

  background: linear-gradient(360deg, $c_body_hover 0%, $c_body 66.16%), $c_body;
}

.PlanCardPromotion__anchor {
  position: absolute;
  margin-top: -250px;
  padding-top: 250px;
  pointer-events: none;
}

.PlanCardPromotion__isBrick {
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 1;

  @include setFlexRowCenter(10px);
}

.PlanCardPromotion__isBrickIcon {
  @include setFlexCenter();

  width: 36px;
  height: 36px;
  background-color: #202335;
  background-image: url('/icons/icon_bricks.svg');
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0px 4.78661px 4.78661px rgba(0, 0, 0, 0.25);
}

.PlanCardPromotion__isBrickH {
  color: $c_text;

  max-width: 157px;
}

.PlanCardPromotion__stickerMortgage {
  position: absolute;
  right: 28px;
  top: -45px;

  height: 90px;
  width: 90px;
  background-color: $c_text;
  border-radius: 100%;

  @include setFlexCenter();
  gap: 4px;
  flex-direction: column;
}

.PlanCardPromotion__stickerMortgageValue {
  font-family: 'Asgard';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: $c_body;
  margin-top: -2px;
}

.PlanCardPromotion__stickerMortgageText {
  font-family: 'Lab Grotesque';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 0;
  color: $c_body;
}

.PlanCardPromotion__GalleryBox {
  position: relative;

  grid-row-start: 1;
  grid-row-end: 3;

  border-right: 1px solid #bdbdbd;
  padding: 60px 30px 30px 30px;
}

.PlanCardPromotion__CardGalleryBox {
  position: relative;
  height: 100%;
  width: 100%;
}

.PlanCardPromotion__infoBox {
  padding: 41px 30px 0 51px;
  border-bottom: 1px solid #bdbdbd;
}

.PlanCardPromotion__h {
  color: $c_text;

  padding-right: 70px;
  margin: 0 0 10px 0;
}

.PlanCardPromotion__timeFinish {
  color: $c_text;
  opacity: 0.5;

  margin: 0 0 20px 0;
}

.PlanCardPromotion__description {
  color: $c_text;

  max-width: 390px;

  height: 100px;
  overflow: auto;
}

.PlanCardPromotion__payBox {
  padding: 19px 5px 40px 51px;
  @include setFlexColumn(37px);
}
.PlanCardPromotion__contrastPayment {
  display: flex;
  gap: 15px;
  align-items: flex-end;
}

.PlanCardPromotion__contrastPaymentNow {
  width: 100%;
  @include setFlexColumn(5px);
}

.PlanCardPromotion__contrastPaymentTitle {
  color: $c_text;
}

.PlanCardPromotion__contrastPaymentValue {
  @include setFlexRowCenter(8px);
}

.PlanCardPromotion__contrastPaymentOld {
  width: 100%;
  @include setFlexColumn(10px);
  position: relative;
  bottom: 4px;
}

.PlanCardPromotion__contrastPaymentTitleOld {
  color: $c_text;
  opacity: 0.5;
}

.PlanCardPromotion__contrastPaymentValueOld {
  color: $c_text;
  opacity: 0.5;
}

.PlanCardPromotion__tooltip {
  @include setBtnQuestion_primary();
}

.PlanCardPromotion__tooltipContent {
  color: $c_text;

  width: 240px;
}

.PlanCardPromotion__btnKnowPrice {
  @include setBtn_primary();

  width: max-content;
  padding: 15px 52px;
  border-radius: 120px;
  grid-column: span 2;
}

@media screen and (max-width: 1170px) {
  .PlanCardPromotion {
    display: flex;
    flex-direction: column;
  }

  .PlanCardPromotion__stickerMortgage {
    transform: scale(0.7);
    right: 10px;
  }

  .PlanCardPromotion__GalleryBox {
    border-right: none;
    padding: 60px 30px 0px 30px;
  }

  .PlanCardPromotion__CardGalleryBox {
    padding-bottom: 50%;
  }

  .PlanCardPromotion__infoBox {
    padding: 40px 18px 20px 18px;
  }

  .PlanCardPromotion__timeFinish {
    margin: 0 0 20px 0;
  }

  .PlanCardPromotion__description {
    margin: 0 0 20px 0;
  }

  .PlanCardPromotion__payBox {
    padding: 20px 5px 40px 18px;
  }

  .PlanCardPromotion__tooltipContent {
    max-width: 260px;
  }

  .PlanCardPromotion__btnKnowPrice {
    padding: 15px 103px;
  }
}

@media screen and (max-width: 740px) {
  .PlanCardPromotion__h {
    margin: 0 0 4px 0;
  }

  .PlanCardPromotion__GalleryBox {
    padding: 60px 20px 0 20px;
  }

  .PlanCardPromotion__CardGalleryBox {
    padding-bottom: 100%;
  }

  .PlanCardPromotion__payBox {
    padding: 20px 18px 40px 18px;
  }

  .PlanCardPromotion__contrastPayment {
    gap: 5px;
  }

  .PlanCardPromotion__contrastPaymentOld {
    bottom: 7px;
    gap: 11px;
    width: 100px;
    flex-shrink: 0;
  }

  .PlanCardPromotion__btnKnowPrice {
    padding: 15px 0px;
    width: 100%;
  }
}
</style>
