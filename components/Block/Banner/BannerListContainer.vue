<template>
  <section class="BannerListContainer" id="stocks" >
    <slot />
  </section>
</template>

<style lang="scss">
.BannerListContainer {
  margin: 210px 0 0 0;
  @include useLCWP();
  display: flex;
  flex-direction: column;
  gap: 60px;
}

@media screen and (max-width: 1170px) {
  .BannerListContainer {
    margin: 150px 0 0 0;
    gap: 30px;
  }
}
</style>
