<script setup lang="ts">
import BlockConstructionsWalls from "@/components/Block/Constructions/BlockConstructionsWalls.vue";
import BlockConstructionsFloors from "@/components/Block/Constructions/BlockConstructionsFloors.vue";

var tab_active = ref('Стены')
</script>

<template>
  <section id="how_we_build" class="BlockConstructions">
    <UITextContentIndependent class="BlockConstructions__UITextContentIndependent">
      <template #title>
        <h2 class="BlockConstructions__UITextContentIndependentH2">КАК МЫ СТРОИМ</h2>
      </template>

      <p class="BlockConstructions__UITextContentIndependentPl">Сингл-вилла строится из&nbsp;кирпича. Во&nbsp;втором
        доме
        мы&nbsp;комбинируем материалы&nbsp;&mdash; есть полностью кирпичные секции, а&nbsp;есть секции
        из&nbsp;керамзитоблоков. У&nbsp;них разная теплопроводность: кирпич чуть дольше сохраняет температуру.</p>
    </UITextContentIndependent>

    <ul class="BlockConstructions__tabList">
      <li class="BlockConstructions__tab " v-for="tab of ['Стены','Полы']" :key="tab"
        :class="{ BlockConstructions__tab_active: tab_active === tab }" @click="tab_active = tab">
        {{ tab }}
      </li>
    </ul>

    <BlockConstructionsWalls v-if="tab_active === 'Стены'" />
    <BlockConstructionsFloors v-if="tab_active === 'Полы'" />
  
  </section>
</template>

<style lang="scss">
.BlockConstructions {
  padding-left: var(--global_padding_content);
  padding-right: var(--global_padding_content);
  background-color: $c_body;
  padding-top: 150px;
  padding-bottom: 115px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: $c_text;
}

.BlockConstructions__tabList {
  margin-top: var(--header_height);
  margin-bottom: 32px;
  display: flex;
  list-style-type: none;
  gap: 12px;
  overflow: auto;

  @include hideScroll();
}

.BlockConstructions__tab {
  width: 110px;
  text-align: center;
  user-select: none;
  border-radius: 24px;
  background-color: $c_body_hover;
  padding: 12px 26px;
  cursor: pointer;
  flex-shrink: 0;

  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: $c_primary;
    color: $c_body;
  }
}

.BlockConstructions__tab_active {
  cursor: default;
  background: $c_primary;
  color: $c_body;
  pointer-events: none;

  &:hover {
    background: #000000;
  }
}

.BlockConstructions__UITextContentIndependent {
  margin-bottom: var(--stack-spacing-2xl);
}

.BlockConstructions__UITextContentIndependentH2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: var(--font_size_rule_1);
  line-height: var(--line_height_rule_3);
  color: #454545;
}

.BlockConstructions__UITextContentIndependentPl {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: var(--font_size_rule_3);
  line-height: var(--line_height_rule_3);
  color: #454545;
}
</style>