<script setup lang="ts">
import { getDateForDynamic } from '@/utils/getDateForDynamic'
import { IResponseObjectsDynamic } from "@/types/ResponseType";

const props = defineProps<{ item: IResponseObjectsDynamic }>()
const html = computed(() => {
  if (props.item.name) return props.item.name.replace(/[\s\,]/g, w => ({',': '', ' ': '<br />'}[w]) ?? '<br/>')
  return getDateForDynamic(props.item.publication_date)
})
</script>

<template>
  <p v-html="html"></p>
</template>