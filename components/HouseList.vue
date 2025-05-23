<script setup lang="ts">
import { IHouse } from "@/types/FrontTypes";

var houses = useState<IHouse[]>("houses", () => []); //prettier-ignore
</script>

<template>
  <section class="HouseList" id="house_list">
    <article class="HouseList__article" v-for="house of houses">
      <div class="HouseList__titleWrap" :id="house.anchor_link">
        <h3 class="HouseList__h3">{{ house.house_name }}</h3>
        <p v-if="house.ready_date" class="HouseList__p">Срок сдачи: {{ house.ready_date }}</p>
      </div>

      <PlanCardList :house="house" />
    </article>
  </section>
</template>

<style lang="scss">
.HouseList {
  position: relative;
  margin-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  @include setFlexColumn(150px);
}

.HouseList__titleWrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
  @include useLCWP();
}

.HouseList__h3 {
  font-family: NeutralFace;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: $c_text;

  margin: 0 0 5px 0;
}

.HouseList__p {
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: $c_text;

  max-width: 120px;
}

@media screen and (max-width: 1170px) {
  .HouseList {
    gap: 100px;
  }

  .HouseList__titleWrap {
    align-items: flex-start;
    margin: 0 0 0 0;
  }

  .HouseList__h3 {
    font-size: 40px;
    margin: 0 0 25px 0;
  }
}

@media screen and (max-width: 740px) {
  .HouseList__titleWrap {
    flex-direction: column;
    margin: 0 0 0 0;
  }

  .HouseList__h3 {
    font-size: 32px;
    line-height: 125%;
    margin: 0 0 8px 0;
  }

  .HouseList__p {
    font-size: 14px;
    line-height: 120%;
    max-width: 100%;

    br {
      display: none;
    }
  }
}
</style>
