<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<template>
  <section class="PagePanorama">
    <iframe
      width="100%"
      height="100%"
      frameborder="0"
      allow="xr-spatial-tracking; gyroscope; accelerometer"
      allowfullscreen
      scrolling="no"
      src="https://domdigital.viewin360.co/share/collection/7cz1N?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&inst=ru"
    ></iframe>
  </section>
</template>

<style lang="scss">
.PagePanorama {
  position: fixed;
  inset: 0;
}
</style>
