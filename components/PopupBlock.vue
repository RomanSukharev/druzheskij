<script lang="ts" setup>
export interface IPopupBlockProps {
  component_name: string;
}

var props = defineProps<IPopupBlockProps>();
var emit = defineEmits(["close"]);

var is_popup_hidden = ref(false);
var component = resolveComponent(props.component_name);

var closePopup = () => {
  setTimeout(() => {
    emit("close");
  }, 400);
  is_popup_hidden.value = true;
};

usePopup(closePopup);
</script>

<template>
  <Suspense>
    <div @click.self="closePopup" class="PopupBlock">
      <div
        class="PopupBlock__content"
        :class="{ PopupBlock__content_hidden: is_popup_hidden }"
        @click.self="closePopup"
      >
        <header class="PopupBlock__contentHeader">
          <button
            @click="closePopup"
            :style="`${is_popup_hidden && 'display: none'}`"
            class="PopupBlock__btnClose"
          ></button>
        </header>

        <div class="PopupBlock__contentMain">
          <component :is="component" />
        </div>
      </div>
    </div>

    <template #fallback> <PskLoader /> </template>
  </Suspense>
</template>

<style lang="scss">
.PopupBlock {
  @include setRulesToRootNodePopup();
  @include setFlexCenter();
}

.PopupBlock__content {
  position: relative;
  width: max-content;
  max-height: 90%;
  display: flex;
  flex-direction: column;

  animation: PopupBlock__content 400ms ease-out;
  transform: translateY(0);

  overflow: hidden;
}

@keyframes PopupBlock__content {
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0);
  }
}

.PopupBlock__content_hidden {
  animation: PopupBlock__content_hidden 400ms ease-out;
  transform: translateY(100vh);
}

@keyframes PopupBlock__content_hidden {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100vh);
  }
}

.PopupBlock__contentHeader {
  background-color: $c_body;
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: flex-end;
}

.PopupBlock__btnClose {
  @include setBtnClose_dark();
  animation: PopupBlock__btnClose 800ms;
}

.PopupBlock__contentMain {
  overflow: auto;
}

@keyframes PopupBlock__btnClose {
  from {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media screen and (max-width: 740px) {
  .PopupBlock__contentHeader {
    padding: 10px;
  }
}
</style>
