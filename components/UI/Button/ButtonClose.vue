<template>
  <button class="ButtonClose">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
      <path
        d="M9.2 6.3 6.3 9.2 22.2 25l-16 16L9 43.8l16-16 16 16 2.8-2.9-16-15.9L43.7 9.2l-2.9-2.9L25 22.2Z"
        fill="#fff"
      />
    </svg>
  </button>
</template>

<style lang="scss">
.ButtonClose {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  padding: 4px;
  background: none;

  cursor: pointer;

  svg {
    width: 100%;
    height: auto;

    path {
      fill: $c_text;
    }
  }
}
</style>
