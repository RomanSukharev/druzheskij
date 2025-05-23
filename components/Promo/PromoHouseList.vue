<script setup lang="ts">
import { IHouse } from "@/types/FrontTypes";

var houses = useState<IHouse[]>("houses", () => []); //prettier-ignore
</script>

<template>
  <section class="PromoHouseList" id="house_list">
    <article class="PromoHouseList__article" v-for="house of houses">
      <div class="PromoHouseList__titleWrap" :id="house.anchor_link">
        <h3 class="PromoHouseList__h3">{{ house.house_name }}</h3>
        <p v-if="house.ready_date" class="PromoHouseList__p">Срок сдачи: {{ house.ready_date }}</p>
      </div>

      <PromoPlanCardList :house="house" />
    </article>
  </section>
</template>

<style lang="scss">
.PromoHouseList {
  position: relative;
  margin-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  @include setFlexColumn(150px);
}

.PromoHouseList__titleWrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
  @include useLCWP();
}

.PromoHouseList__h3 {
  font-family: NeutralFace;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: $c_text;

  margin: 0 0 5px 0;
}

.PromoHouseList__p {
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: $c_text;

  max-width: 120px;
}

@media screen and (max-width: 1170px) {
  .PromoHouseList {
    gap: 100px;
  }

  .PromoHouseList__titleWrap {
    align-items: flex-start;
    margin: 0 0 0 0;
  }

  .PromoHouseList__h3 {
    font-size: 40px;
    margin: 0 0 25px 0;
  }
}

@media screen and (max-width: 740px) {
  .PromoHouseList__titleWrap {
    flex-direction: column;
    margin: 0 0 0 0;
  }

  .PromoHouseList__h3 {
    font-size: 32px;
    line-height: 125%;
    margin: 0 0 8px 0;
  }

  .PromoHouseList__p {
    font-size: 14px;
    line-height: 120%;
    max-width: 100%;

    br {
      display: none;
    }
  }
}
</style>
