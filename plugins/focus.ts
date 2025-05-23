import type { DirectiveBinding } from "nuxt/dist/app/compat/capi";

export interface IVFocusArg {
  min_width: number;
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el: HTMLDivElement, binding: DirectiveBinding<IVFocusArg>) {
      if (window.innerWidth >= binding.value.min_width) {
        el.tagName === "INPUT" ? el.focus() : (<HTMLElement>el.firstChild)!.focus();
      }
    },
  });
});
