<script lang="ts" setup>
export interface IExternalLinkPrimaryProps {
  href?: string;
  target?: "_blank";
  icon_size: string
}

defineProps<IExternalLinkPrimaryProps>();
</script>

<template>
  <a class="ExternalLinkPrimary" :href="href" :target="target">
    <slot />
    <svg
      class="ExternalLinkPrimary__svg"
      :width="icon_size"
      :height="icon_size"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M11.7 13.7 18 7.4V11h2V4h-7v2h3.6l-6.3 6.3 1.4 1.4Z" fill="#002c5c" />
      <path
        d="M19 18v-4h-2v4H6V7h4V5H6a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2Z"
        fill="#002c5c"
      />
    </svg>
  </a>
</template>

<style lang="scss">
.ExternalLinkPrimary {
  @include setFlexRowCenter(5px);
  text-decoration: none;
  position: relative;

  cursor: pointer;
  transition: border-color 300ms ease-in-out, color 300ms ease-in-out;

  path {
    transition: fill 300ms ease-in-out, stroke 300ms ease-in-out;
  }
  &:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: -2px;
    height: 1px;
    background-color: $c_primary;
    width: 100%;
  }

  &:hover {
    color: $c_primary_hover;
    border-color: $c_primary_hover;

    &:before {
      display: none;
    }
    path {
      fill: $c_primary_hover;
    }
  }
}
</style>
