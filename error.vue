<script lang="ts" setup>
export interface IErrorPageNuxtProps {
  error: {
    statusCode: number;
  };
}

defineProps<IErrorPageNuxtProps>();
</script>

<template>
  <div class="PageError">
    <NuxtLayout :name="error.statusCode === 404 ? 'default' : false">
      <Page404 v-if="error.statusCode === 404" />
      <Page500 v-else />
    </NuxtLayout>
  </div>
</template>
