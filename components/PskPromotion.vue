<script setup lang="ts">
import type { IPopupFormProps } from "@/components/PopupForm.vue";
import type { IResponseObjectsPromotion } from "@/types/ResponseType";

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null);

var props = defineProps<{ promotion: IResponseObjectsPromotion }>();

var handleClickBtnPromotionForm = () => {
  if (!props.promotion.form) return;

  var ym_params = {
    [props.promotion.name_category]: "Основная форма",
  };

  ymReachGoal(`open-form_promotion-${props.promotion.anchor_link}`);
  ymReachGoal(`open-form_promotion`, ym_params);

  popup_form_props.value = {
    data: {
      text_header: props.promotion.form.header_text,
      text_content: props.promotion.form.content_text,
      text_btn: props.promotion.form.button_text,
      fields: {
        lead_title: `${props.promotion.form.header_text} (ЗпСП)`,
      },
      cbSuccessFetch() {
        ymReachGoal(`send-form_promotion-${props.promotion.anchor_link}`);
        ymReachGoal(`send-form_promotion`, ym_params);
      },
    },
  };
};
</script>

<template>
  <section class="PskPromotion">
    <h3 class="PskPromotion__h3" :id="promotion.anchor_link">
      {{ promotion.name_category }}
    </h3>

    <div class="PskPromotion__plansList">
      <PlanCardPromotion
        v-for="plan of promotion.elements"
        :plan="plan"
        :promotion_id="promotion.anchor_link"
        :promotion_title="promotion.name_category"
      />

      <button
        class="PskPromotion__btn"
        v-if="promotion.form?.button_label"
        @click="handleClickBtnPromotionForm"
      >
        {{ promotion.form.button_label }}
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.PskPromotion {
  padding-top: var(--offset_chapter);
}

.PskPromotion__h3 {

  text-align: center;
  @include useLCWP();
  margin-bottom: 100px;
}

.PskPromotion__plansList {
  @include setPaddingSides(var(--global_padding_content_small));
  @include setFlexColumn(60px);
}

.PskPromotion__btn {
  @include setBtn_primary();

  padding: 30px 0;
  border-radius: 100px;
}

@media screen and (max-width: 1170px) {
  .PskPromotion__h3 {
    margin-bottom: 40px;
  }

  .PskPromotion__plansList {
    gap: 40px;
  }

  .PskPromotion__btn {
    padding: 20px 0;
  }
}

@media screen and (max-width: 740px) {
  .PskPromotion__h3 {
    margin-bottom: 54px;
  }
}
</style>
