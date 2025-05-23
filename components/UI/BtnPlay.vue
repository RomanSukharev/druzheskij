<template>
  <button class="BtnPlay">
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 0C7.62316 0 0 7.62316 0 17C0 26.3768 7.62316 34 17 34C26.3768 34 34 26.3768 34 17C34 7.62316 26.3768 0 17 0ZM22.4758 17.8589L14.4589 23.1916C13.7789 23.6568 12.8484 23.1558 12.8484 22.3326V11.6674C12.8484 10.8442 13.7789 10.3432 14.4589 10.8084L22.4758 16.1411C23.0842 16.5347 23.0842 17.4653 22.4758 17.8589Z"
        fill="white"
      />
    </svg>

    <span class="BtnPlay__text"><slot /></span>
  </button>
</template>

<style lang="scss">
.BtnPlay {
  @include setFlexRowCenter(5px);
  border: none;
  background: none;

  cursor: pointer;
  width: max-content;

  path {
    transition: fill 200ms ease-in-out;
  }

  &:hover {
    .BtnPlay__text {
      color: $c_body_hover;
    }

    path {
      fill: $c_body_hover;
    }
  }
}

.BtnPlay__text {
  color: $c_body;
  white-space: nowrap;
  transition: border-bottom 200ms ease-in-out, color 200ms ease-in-out;
}
</style>
