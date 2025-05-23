<script lang="ts" setup>
var MIN_VALUE_FOR_SHOW = 36

var props = withDefaults(defineProps<{ data: number }>(), {
  data: 0,
});
var style = computed(() => ({
  width: `${props.data}%`,
  background: props.data < 50 ? "#FF7060" : props.data < 90 ? "#FFA360" : "#23B732",
}));

var isShow = computed(() => props.data < MIN_VALUE_FOR_SHOW)
</script>

<template>
  <div v-if="isShow" class="ProgressLineForCard">
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
      <circle cx="3" cy="3.5" r="3" fill="#FFBB55"/>
    </svg>
    <h1 class="ProgressLineForCard__h"><i></i>Доступно {{ data }}% квартир данной планировки</h1>
  </div>
</template>

<style lang="scss">
.ProgressLineForCard {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ProgressLineForCard__lineActive {
  height: 100%;
  border-radius: 40px;
}

.ProgressLineForCard__h {
  font-family: 'Inter';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  color: $c_text;
  line-height: 150%;

}
</style>
