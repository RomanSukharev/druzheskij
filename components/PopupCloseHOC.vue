<script lang="ts" setup>
var props = withDefaults(defineProps<{ timeout?: number }>(), { timeout: 300 })
var emit = defineEmits(['close'])

var is_popup_hidden = ref(false)

var closePopup = () => {
  is_popup_hidden.value = true

  setTimeout(() => {
    emit('close')
  }, props.timeout)
}

usePopup(closePopup)
</script>

<template>
  <div class="Popup" @click.self="closePopup">
    <slot :closePopup="closePopup" :is_popup_hidden="is_popup_hidden" />
  </div>
</template>

<style lang="scss">
.Popup {
  @include setRulesToRootNodePopup();
  @include setFlexCenter();
  padding: 0 16px;
  @media screen and (max-width: 359px) {
    padding: 0;
  }
}
</style>