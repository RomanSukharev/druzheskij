<script lang="ts" setup>
useHead({
  script: [
    {
      innerHTML: `window._ab_id_=150891`,
      tagPosition: 'head',
    },
    {
      src: `https://cdn.botfaqtor.ru/one.js`,
      tagPosition: 'head',
    },
  ],
})
</script>

<template>
  <div>
    <BlockCoverPromo />
    <BlockBannerListContainer class="PromoBannerListContainer">
      <BlockBannerFamilyMortgage35 />
      <BlockBannerITMortgage25 />
      <BlockBannerInstallment />
    </BlockBannerListContainer>
    <PromoHouseList />
    <BlockPreFinishing />
  </div>
</template>

<style lang="scss">
.PromoBannerListContainer {
  padding-bottom: var(--offset_chapter);
}
</style>
