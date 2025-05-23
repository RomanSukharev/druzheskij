<script setup lang="ts">
import type { IResponseSoldPlanItems } from "types/ResponseType";

var plans_sold = useState<IResponseSoldPlanItems[]>("plans_sold", () => []);
</script>

<template>
  <section class="SoldPlans" v-if="plans_sold.length">
    <h3 class="SoldPlans__h3">Проданные квартиры</h3>
    <div class="SoldPlans__planList" v-grabscroll>
      <SoldPlan class="SoldPlans__SoldPlan" v-for="plan of plans_sold" :plan="plan" />
    </div>
  </section>
</template>

<style lang="scss">
.SoldPlans {
  background-color: $c_body_hover;
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
}
.SoldPlans__h3 {
  @include setFontStyle1();
  color: $c_text;
  margin-bottom: 80px;
  padding-left: var(--global_padding_content);
}

.SoldPlans__planList {
  display: flex;
  gap: 40px;
  overflow: auto;
  @include hideScroll();
  padding-left: var(--global_padding_content);
  padding-right: var(--global_padding_content);
}

.SoldPlans__SoldPlan {
  flex-shrink: 0;
}

@media screen and (max-width: 1170px) {
  .SoldPlans__planList {
    gap: 20px;
  }
}

@media screen and (max-width: 740px) {
  .SoldPlans__h3 {
    margin: 80px 0 40px 0;
  }
}
</style>
