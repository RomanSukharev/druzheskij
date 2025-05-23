<script setup lang="ts">
import type { IResponseSoldPlanItems } from "@/types/ResponseType";
import type { IPopupFormProps } from "@/components/PopupForm.vue";
import type { IPopupGalleryProps } from "@/components/PopupGallery.vue";

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null);
var popup_gallery_props = useState<IPopupGalleryProps | null>("popup_gallery_props", () => null);

var props = defineProps<{ plan: IResponseSoldPlanItems }>();

var type_flat = computed(() => props.plan.article?.split('/')?.[0] || '')

var handleClickBtn = () => {
  popup_form_props.value = {
    data: {
      text_header: "Подобрать планировку",
      text_content:
        "Оставьте свои контакты и&nbsp;мы&nbsp;перезвоним, чтобы рассказать о&nbsp;похожих планировках и&nbsp;подобрать доступные варианты.",
      text_btn: "Отправить заявку",
      fields: {
        lead_title: `Подобрать похожую квартиру (${props.plan.article} - ${props.plan.square} кв.м.) (ЗпКВ)`,
      },
      popup_notify_props_success: {
        status: "succes",
        text_btn: "Понятно",
        text_content:
          "Получили вашу заявку. Перезвоним в&nbsp;ближайшее время, чтобы рассказать о&nbsp;похожих планировках",
        max_width: 600,
      },
    },
  };
};

var handlerClickImg = () => {
  if (!props.plan.images?.[0]?.path) return;

  popup_gallery_props.value = {
    imgs: [{ src: props.plan.images?.[0]?.path, title: "" }],
  };
};
</script>

<template>
  <article class="SoldPlan" :id="`sold_plan_${plan.article}`">
    <div class="SoldPlan__text">
      <p>{{type_flat}}</p>
      <p v-if="plan.square">{{plan.square}} М<sup>2</sup></p>
    </div>
    <div class="SoldPlan__CardGalleryBox">
      <img class="SoldPlan__img" :src="plan.images?.[0]?.path" @click="handlerClickImg" />
    </div>

    <button class="SoldPlan__btn" @click="handleClickBtn">Подобрать похожую</button>
  </article>
</template>

<style lang="scss">
.SoldPlan {
  border-radius: 15px;
  background: $c_body;
  position: relative;
  width: 480px;
  padding: 29px 20px 39px;
}


.SoldPlan__CardGalleryBox {
  position: relative;
  padding-bottom: 70%;
}

.SoldPlan__text {
  margin-bottom: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    color: $c_text;
    font-family: 'NeutralFace';
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
  }
  sup {
    font-family: 'NeutralFace';
    position: relative;
    font-size: 14px;
    top: 3px;
  }
}

.SoldPlan__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;

  cursor: pointer;
}

.SoldPlan__btn {
  @include setBtn_primaryNotShadow();

  padding: 10px 26px;
  border-radius: 10px;
  margin-top: 40px;
}



@media screen and (max-width: 740px) {
  .SoldPlan {
    width: 254px;
  }
  .SoldPlan__text {
    margin-bottom: 30px;
  }

  .SoldPlan__btn {
    margin-top: 30px;
  }

  .SoldPlan__CardGalleryBox {
    padding-bottom: 100%;
  }
}
</style>
