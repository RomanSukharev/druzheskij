<script lang="ts" setup>
import type { INavGroup } from "@/types/FrontTypes";

var links_header_mobile = useState<INavGroup[]>("links_header_mobile", () => []);

defineProps<{ is_hidden: boolean }>();
var emit = defineEmits(["close", "navMobileGetCall"]);

var handleClickBtnGetCall = () => {
  emit("navMobileGetCall");
};
</script>

<template>
  <div class="NavMobile" @click.self="$emit('close')">
    <div class="NavMobile__content" :class="{ NavMobile__content_hidden: is_hidden }">
      <nav class="NavMobile__navChapter">
        <template v-for="group of links_header_mobile">
          <div class="NavMobile__navChapterContainer" v-if="group.children">
            <p class="NavMobile__navChapterContainerTitle" v-if="group.title">{{ group.title }}</p>
            <ul class="NavMobile__navChapterUl">
              <li class="NavMobile__navChapterLi" v-for="link of group.children">
                <NuxtLink class="NavMobile__navChapterA" :href="link.href" @click="$emit('close')">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </nav>

      <div class="NavMobile__phonePanel">
        <button class="btn_dark NavMobile__btnGetCall" @click="handleClickBtnGetCall">Заказать звонок</button>
        <UISocialLinks class="NavMobile__social" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.NavMobile {
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  height: calc(100% - 56px);
  z-index: -1;

  background: rgba(88, 98, 103, 0.6);
}

.NavMobile__content {
  overflow: auto;
  max-height: 100%;
  background-color: $c_body_hover;
  padding: 20px 16px;
  animation: NavMobile__content 300ms ease-out;
}

@keyframes NavMobile__content {
  from {
    transform: translate(0, -100%);
  }
  to {
    transform: translate(0, 0);
  }
}

.NavMobile__content_hidden {
  animation: NavMobile__content_hidden 300ms ease-out;
  transform: translate(0, -100%);
}

@keyframes NavMobile__content_hidden {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, -100%);
  }
}

.NavMobile__navChapter {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
}

.NavMobile__navChapterContainer {
  padding: 30px 20px;
  background-color: #fff;
  border: 1px solid $c_border_light;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.NavMobile__navChapterContainerTitle {
  color: $c_text;
  opacity: 0.5;
  font-size: 14px;
  line-height: 120%;
}

.NavMobile__navChapterUl {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
}

.NavMobile__phonePanel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.NavMobile__navChapterLi {
  &:hover {
  }
}

.NavMobile__navChapterA {
  text-decoration: none;
  white-space: nowrap;
  color: $c_text;

  display: block;
  padding: 10px 0;
}

.NavMobile__social {
  path {
    fill: $c_text;
  }
}

.NavMobile__phoneNumber {
  @include setLink();
  margin: 0 30px 0 0;
}

.NavMobile__btnGetCall {
  @include setBtn_contrast();

  padding: 8px 36px;
}

@media screen and (max-width: 1170px) {
  .NavMobile {
    display: block;
  }

  .NavMobile__content {
    padding: 20px 16px 100px 16px;
  }
}

@media screen and (max-width: 740px) {
  .NavMobile__content {
    height: 100%;
  }

  @keyframes NavMobile__content {
    from {
      transform: translate(-100%, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }

  .NavMobile__content_hidden {
    transform: translate(-100%, 0);
  }

  @keyframes NavMobile__content_hidden {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-100%, 0);
    }
  }

  .NavMobile__navChapterUl {
    max-height: none;
    width: 100%;
  }
  .NavMobile__phoneNumber {
    width: max-content;
    display: block;
  }

  .NavMobile__navChapterUl {
    flex-direction: column;
  }

  .NavMobile__btnGetCall {
    font-size: 12px;
    padding: 10px 30px;
  }
}
</style>
