<script setup lang="ts">
import type { IProgram } from './MortgagePrograms'

export interface IPartPlanCardProgramsProps {
  cost?: number
  programs: IProgram[]
}

defineProps<IPartPlanCardProgramsProps>()
</script>

<template>
  <div class="PartPlanCardPrograms">
    <div class="PartPlanCardPrograms__cost" v-if="typeof cost === 'number' && !Number.isNaN(cost) && cost">
      <div class="PartPlanCardPrograms__costValue">от {{ cost.toLocaleString('fr') }}&nbsp;₽</div>
      <div class="PartPlanCardPrograms__costLabel">стоимость квартиры</div>
    </div>

    <div class="PartPlanCardPrograms__programPayment">
      <div class="PartPlanCardPrograms__programPaymentValue">от {{ programs[0].min_payment }}&nbsp;₽/мес</div>
      <UIPskTooltip class="PartPlanCardPrograms__UIPskTooltip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style="cursor: pointer"
        >
          <path
            d="M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7.7 10.5H6.3V6.3H7.7V10.5ZM7.7 4.9H6.3V3.5H7.7V4.9Z"
            fill="#B3BDD0"
          />
        </svg>
        <template #content>
          <p class="PartPlanCardPrograms__tooltipText" v-html="programs[0].tooltip"></p>
        </template>
      </UIPskTooltip>
    </div>
    <div class="PartPlanCardPrograms__programName">
      {{ programs[0].name }}
    </div>
  </div>
</template>

<style lang="scss">
.PartPlanCardPrograms__costValue {
  color: #ff7060;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
}

.PartPlanCardPrograms__costLabel {
  color: #586267;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  opacity: 0.8;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(69, 69, 69, 0.1);
  margin-bottom: 12px;
}

.PartPlanCardPrograms__program {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 24px;
}

.PartPlanCardPrograms__programPayment {
  display: flex;
  align-items: center;
  gap: 10px;
}

.PartPlanCardPrograms__programPaymentValue {
  color: #586267;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}

.PartPlanCardPrograms__programName {
  color: #586267;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  opacity: 0.8;
}

.PartPlanCardPrograms__tooltipText {
  @include setFontStyle4();
  color: $c_text;
  max-width: 300px;
  width: max-content;
}

@media (max-width: 1170px) {
  .PartPlanCardPrograms__costValue {
    color: #586267;
  }

  .PartPlanCardPrograms__programPaymentValue {
    color: #ff7060;
  }
}

</style>
