<template>
  <section class="BlockPickLocation" id="infrastructure">
    <h3 class="BlockPickLocation__h2">
      ЛОКАЦИЮ <br />
      ВЫБИРАЛИ, <br />
      ЧТОБЫ ВЫ <br />
      ПЕРЕЕХАЛИ
    </h3>

    <p class="BlockPickLocation__p">
      на всё <br />
      готовое
    </p>
  </section>
</template>

<style lang="scss">
.BlockPickLocation {
  @include setPaddingSides(var(--global_padding_content));
  padding-top: 145px;
  padding-bottom: 145px;

  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="801" height="860" viewBox="0 0 801 860" fill="none"><path d="M52.9995 890.498C155 451.001 782.683 479.605 782.683 479.605L228.13 286.594C228.13 286.594 930.921 439.297 665.7 -301" stroke="%23F6F6F6" stroke-width="107.16" stroke-linejoin="bevel"/></svg>');
  background-repeat: no-repeat;
  background-position: 45% center;

  display: flex;
  flex-direction: column;
  gap: 150px;
  position: relative;


}

.BlockPickLocation__h2 {
  @include setFontStyle11();
  color: $c_text;
}

.BlockPickLocation__p {
  font-family: "PlayfairDisplay";
  font-size: var(--font_size_rule_2); /* 75px/60px/48px */
  font-style: italic;
  font-weight: 500;
  line-height: 100%; /* 75px */
  color: $c_primary;

  width: max-content;
  align-self: flex-end;
}

@media screen and (max-width: 1170px) {
  .BlockPickLocation {
    padding-top: 100px;
    padding-bottom: 100px;

    background-position: left top;
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="718" height="879" viewBox="0 0 718 879" fill="none"><path d="M-29.792 998.198C72.208 558.701 699.891 587.304 699.891 587.304L145.338 394.294C145.338 394.294 848.13 546.996 582.909 -193.301" stroke="%23F6F6F6" stroke-width="107.16" stroke-linejoin="bevel"/></svg>');
    gap: 344px;
  }

  .BlockPickLocation__p {
    position: relative;
    right: 3px;
  }
}

@media screen and (max-width: 740px) {
  .BlockPickLocation {
    padding-top: 60px;
    padding-bottom: 50px;

    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="358" height="612" viewBox="0 0 358 612" fill="none"><path d="M-38.2138 596.695C93.1054 362.873 347.177 422.069 347.177 422.069L36.6773 314C36.6773 314 430.177 399.5 281.677 -15" stroke="%23F6F6F6" stroke-width="60" stroke-linejoin="bevel"/></svg>');
    gap: 275px;
  }

  .BlockPickLocation__p {
    position: relative;
    right: 1px;
    line-height: 95%; /* 45.6px */
  }
}
</style>
