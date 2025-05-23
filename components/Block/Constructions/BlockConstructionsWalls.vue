<script setup lang="ts">
import BlockConstructionsCollapse from '@/components/Block/Constructions/BlockConstructionsCollapse.vue'

type KeyInfoType = 'one' | 'two' | 'three' | 'four' | 'five'

var idx = ref(0)

var active_info = computed(() => Object.keys(info).filter((k) => info[k as keyof typeof info]))
var active_img = computed(() => img_list[idx.value].src)


var info = reactive<any>({
  one: false,
  two: false,
  three: false,
  four: false,
  five: false
})

var img_list: { src: string }[] = [
  { src: '/img/BlockConstructions/6.png' },
  { src: '/img/BlockConstructions/7.png' },
  { src: '/img/BlockConstructions/8.png' },
  { src: '/img/BlockConstructions/9.png' },
  { src: '/img/BlockConstructions/10.png' },
  { src: '/img/BlockConstructions/11.png' }
]

var info_tab_list = [
  { name: 1, id: 1, key: 'one' },
  { name: 2, id: 2, key: 'two' },
  { name: 3, id: 3, key: 'three' },
  { name: 4, id: 4, key: 'four' },
  { name: 5, id: 5, key: 'five' }
]

var clickInfo = (key: KeyInfoType, val: number, evt: any) => {
  idx.value = (info[key] = evt) ? val : 0
  for (const key_info in info) (key_info !== key) && (info[key_info] = false)
}

var clickInfoTab = (i: {
  name: number,
  id: number,
  key: KeyInfoType
}) => clickInfo(i.key, (idx.value = idx.value === i.id ? 0 : i.id), idx.value === i.id)

var reset = () => {
  idx.value = 0
  for (const key_info in info) info[key_info as KeyInfoType] = false
}

onMounted(() => {
  if (window.innerWidth < 719) {
    idx.value = 1;
  }
})


</script>

<template>
  <div class="BlockConstructionsWalls" @click.self="reset">
    <div class="BlockConstructionsWallsContainer">
      <div class="BlockConstructionsWalls__imgWrap">
        <img v-for="(img, i) of img_list" :key="i" class="BlockConstructionsWalls__img"
          :class="{ is_active: img.src === active_img }" :src="img.src" alt="пол" width="533" height="487">
      </div>

      <div class="BlockConstructionsWalls__infoContainer" @click.self="reset">

        <div class="BlockConstructionsWalls__infoWrap BlockConstructionsWalls__infoWrap_1">
          <BlockConstructionsCollapse class="BlockConstructionsWalls__info BlockConstructionsWalls__info_1"
            :class="{ no_selected: idx !== 0 && !info.one }" :model-value="info.one"
            @update:modelValue="clickInfo('one', 1, $event)" title="Минераловатный утеплитель"
            content_text="Утеплитель не горит и хорошо защищает от морозов. Дополнительно — шумоизоляционные свойства за счёт волокнистой структуры." />

          <div @click="reset" class="BlockConstructionsWalls__line BlockConstructionsWalls__line_1"
            :class="{ no_selected: idx !== 0 && !info.one }"></div>
        </div>

        <div class="BlockConstructionsWalls__infoWrap BlockConstructionsWalls__infoWrap_2">
          <div class="BlockConstructionsWalls__line BlockConstructionsWalls__line_2" @click="reset"
            :class="{ no_selected: idx !== 0 && !info.two }"></div>

          <BlockConstructionsCollapse class="BlockConstructionsWalls__info BlockConstructionsWalls__info_2"
            :class="{ no_selected: idx !== 0 && !info.two }" :model-value="info.two"
            @update:modelValue="clickInfo('two', 4, $event)" title="Керамзитобетонные блоки"
            content_text="Материал с высокими теплоизоляционными свойствами и низким уровень водопоглощения. Такой дом проще отапливать из-за пористой структуры блока."
            title_for_label="В сингл-вилле и секциях 3-6" />

        </div>

        <div class="BlockConstructionsWalls__infoWrap BlockConstructionsWalls__infoWrap_3">
          <BlockConstructionsCollapse class="BlockConstructionsWalls__info BlockConstructionsWalls__info_3"
            :class="{ no_selected: idx !== 0 && !info.three }" :model-value="info.three"
            @update:modelValue="clickInfo('three', 2, $event)" title="Армирующая сетка"
            content_text="Сетка повышает сопротивляемость покрытия к внешним условиям — влаге, ветру и снегу. Это предотвращает осыпание и потрескивание штукатурки." />

          <div class="BlockConstructionsWalls__line BlockConstructionsWalls__line_3" @click="reset"
            :class="{ no_selected: idx !== 0 && !info.three }"></div>
        </div>


        <div class="BlockConstructionsWalls__infoWrap BlockConstructionsWalls__infoWrap_5">
          <BlockConstructionsCollapse class="BlockConstructionsWalls__info BlockConstructionsWalls__info_5"
            :class="{ no_selected: idx !== 0 && !info.five }" :model-value="info.five"
            @update:modelValue="clickInfo('five', 5, $event)" title="Кирпич"
            content_text="Жаропрочный материал с хорошими показателями водопоглощения и теплоёмкости. В доме будет сухо и тепло."
            title_for_label="В секциях 1, 2, 7, 8" />

          <div class="BlockConstructionsWalls__line BlockConstructionsWalls__line_5" @click="reset"
            :class="{ no_selected: idx !== 0 && !info.five }"></div>
        </div>


        <div class="BlockConstructionsWalls__infoWrap BlockConstructionsWalls__infoWrap_4">
          <div class="BlockConstructionsWalls__line BlockConstructionsWalls__line_4" @click="reset"
            :class="{ no_selected: idx !== 0 && !info.four }"></div>

          <BlockConstructionsCollapse class="BlockConstructionsWalls__info BlockConstructionsWalls__info_4"
            :class="{ no_selected: idx !== 0 && !info.four }" :model-value="info.four"
            @update:modelValue="clickInfo('four', 3, $event)" title="Декоративная штукатурка"
            content_text="Рельефный материал для финальной отделки дома. За счёт своей структуры обладает небольшими теплоизоляционными свойствами." />
        </div>

      </div>

      <div class="BlockConstructionsWalls__infoTabs">
        <div v-for="i in info_tab_list" :key="i.id" class="BlockConstructionsWalls__infoTab"
          :class="{ is_active: idx === i.id }" @click="clickInfoTab(i)">
          {{ i.name }}
        </div>
      </div>
      <BlockConstructionsCollapse v-if="idx === 2"
        class="BlockConstructionsWalls__info BlockConstructionsWalls__infoMobile BlockConstructionsWalls__info_1"
        model-value title="Армирующая сетка"
        content_text="Сетка повышает сопротивляемость покрытия к внешним условиям — влаге, ветру и снегу. Это предотвращает осыпание и потрескивание штукатурки." />
      <BlockConstructionsCollapse v-if="idx === 4"
        class="BlockConstructionsWalls__info BlockConstructionsWalls__infoMobile BlockConstructionsWalls__info_2"
        model-value title="Керамзитобетонные блоки"
        content_text="Материал с высокими теплоизоляционными свойствами и низким уровень водопоглощения. Такой дом проще отапливать из-за пористой структуры блока."
        title_for_label="В сингл-вилле и секциях 3-6" />
      <BlockConstructionsCollapse v-if="idx === 3"
        class="BlockConstructionsWalls__info BlockConstructionsWalls__infoMobile BlockConstructionsWalls__info_3"
        model-value title="Декоративная штукатурка"
        content_text="Рельефный материал для финальной отделки дома. За счёт своей структуры обладает небольшими теплоизоляционными свойствами." />
      <BlockConstructionsCollapse v-if="idx === 1"
        class="BlockConstructionsWalls__info BlockConstructionsWalls__infoMobile BlockConstructionsWalls__info_4"
        model-value title="Минераловатный утеплитель"
        content_text="Утеплитель не горит и хорошо защищает от морозов. Дополнительно — шумоизоляционные свойства за счёт волокнистой структуры." />
      <BlockConstructionsCollapse v-if="idx === 5"
        class="BlockConstructionsWalls__info BlockConstructionsWalls__infoMobile BlockConstructionsWalls__info_5"
        model-value title="Кирпич"
        content_text="Жаропрочный материал с хорошими показателями водопоглощения и теплоёмкости. В доме будет сухо и тепло."
        title_for_label="В секциях 1, 2, 7, 8" />

    </div>
  </div>
</template>

<style lang="scss">
.BlockConstructionsWalls {
  padding: 43px 66px;
  border: 1px solid rgba(75, 75, 75, 0.10);
  background-color: $c_body_hover;
  border-radius: 10px;
}

.BlockConstructionsWalls__imgWrap {
  position: relative;
  width: 533px;
  height: 487px;
}

.BlockConstructionsWalls__infoMobile {
  display: none;
}

.BlockConstructionsWalls__infoTabs {
  display: none;
}

.BlockConstructionsWallsContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

}

.BlockConstructionsWalls__img {
  position: absolute;
  transition: opacity .2s ease-in-out;
  opacity: 0;
}

.BlockConstructionsWalls__img.is_active {
  opacity: 1;
}

.BlockConstructionsWalls__line {
  position: relative;
  transition: opacity .2s ease-in-out;
  opacity: 1;

  &.no_selected {
    opacity: 0.3;
  }

  &:before {
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: $c_text_light;
  }

  &:after {
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: $c_text_light;
  }

  &_1 {
    width: 280px;
    height: 70px;
    margin-top: 30px;
    border-top-right-radius: 10px;
    border-right: 1px solid $c_text_light;
    border-top: 1px solid $c_text_light;
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:before {
      top: -3px;
      left: -3px;
    }

    &:after {
      bottom: -3px;
      right: -3px;
    }
  }

  &_2 {
    border-top-left-radius: 10px;
    width: 100%;
    height: 80px;
    margin-top: 30px;
    border-left: 1px solid $c_text_light;
    border-top: 1px solid $c_text_light;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:before {
      top: -3px;
      right: -3px;
    }

    &:after {
      bottom: -3px;
      left: -3px;
    }
  }

  &_3 {
    width: 100%;
    height: 1px;
    margin-bottom: 20px;
    margin-top: 30px;
    border-top: 1px solid $c_text_light;
    margin-left: -90px;

    &:before {
      top: -3px;
      left: -3px;
    }

    &:after {
      top: -3px;
      right: -3px;
    }
  }

  &_4 {
    width: 100%;
    height: 20px;
    margin-bottom: 20px;
    margin-top: 10px;
    border-bottom-right-radius: 10px;
    border-right: 1px solid #B2B3B3;
    border-bottom: 1px solid #B2B3B3;
    border-top: none;

    &:before {
      bottom: -3px;
      left: -3px;
    }

    &:after {
      top: -3px;
      right: -3px;
    }
  }

  &_5 {
    border-bottom-left-radius: 10px;
    height: 0px;
    width: 300px;
    border-left: 1px solid $c_text_light;
    border-bottom: 1px solid $c_text_light;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    margin-top: 30px;

    &:before {
      right: -3px;
      top: -3px;
    }

    &:after {
      top: -3px;
      left: -3px;
    }
  }
}

.BlockConstructionsWalls__infoWrap {
  display: flex;
  flex-wrap: nowrap;

  &_1 {
    align-items: flex-start;
    height: 200px
  }

  &_2 {
    align-items: flex-start;
    justify-content: flex-end;

  }

  &_3 {
    align-items: flex-start;
    margin-top: -30px;
  }

  &_4 {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row-reverse;
    margin-top: -60px;
  }

  &_5 {
    align-items: flex-start;
    flex-direction: row-reverse;
    height: 160px;
    margin-top: 30px;
    // margin-right: 70px;
  }

}

.BlockConstructionsWalls__infoContainer {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 190px;
}

.BlockConstructionsWalls__info {
  opacity: 1;

  &.no_selected {
    opacity: 0.3;
  }

  &_1 {
    max-width: 344px;
  }

  &_2 {
    max-width: 370px;
  }

  &_3 {
    max-width: 340px;
  }

  &_4 {
    max-width: 315px;
  }

  &_5 {
    max-width: 300px;
  }
}

@media (max-width: 1520px) {

  .BlockConstructionsWalls__infoContainer {
    column-gap: 180px;
  }

  .BlockConstructionsWalls__line {
    &_1 {
      width: 190px;
    }

    &_2 {
      width: 120px;
    }

    &_3 {
      width: 100%;
      height: 1px;
    }

    &_4 {
      height: 20px;
      width: 200px;
    }

  }

}

@media (max-width: 1450px) {

  .BlockConstructionsWalls__infoContainer {
    column-gap: 150px;
  }

  .BlockConstructionsWalls__line {

    &_2 {
      width: 60px;
    }

    &_5 {
      width: 130px;
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 1343px) {

  .BlockConstructionsWalls__line {

    &_3 {
      margin-top: 10px;
      max-width: 260px;
      margin-right: 60px;
      margin-left: -60px;
    }

    &_4 {
      margin-left: -20px;
      margin-right: 30px;
    }
  }

  .BlockConstructionsWalls__infoWrap {

    &_2 {
      height: 50px;
    }

    &_3 {
      height: 50px;
    }

    &_4 {
      justify-content: flex-start;
      align-items: flex-start;
      // margin-top: 0;
    }

  }


  .BlockConstructionsWalls__info {

    &_1 {
      max-width: 350px;
    }

    &_2 {
      max-width: 320px;
    }

    &_3 {
      max-width: 315px;
      margin-top: -20px;
    }

    &_4 {
      max-width: 340px;
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 1152px) {

  .BlockConstructionsWalls__info {

    &_4 {
      max-width: 340px;
      // margin-bottom: 0;
    }
  }

  // .BlockConstructionsWalls__line {
  //   &_4 {
  //     margin-bottom: 50px;
  //   }
  // }

  .BlockConstructionsWalls {
    padding: 43px 35px;
  }

  .BlockConstructionsWalls__infoContainer {
    column-gap: 138px;
  }
}

@media (max-width: 1007px) {
  .BlockConstructionsWalls {
    padding: 43px 35px;
  }

  .BlockConstructionsWallsContainer {
    min-height: 922px;
  }

  .BlockConstructionsWalls__infoContainer {
    column-gap: 36px;
  }

  .BlockConstructionsWalls__imgWrap {
    max-width: 486px;
    height: 445px;
    margin-left: 150px;
  }

  .BlockConstructionsWalls__line {
    &_1 {
      width: 100px;
      height: 140%;
    }

    &_2 {
      margin-top: 0;
      width: 1px;
      height: 100%;
      margin-left: 35%;
      border-top: none;
    }

    &_3 {
      /* margin-bottom: 0; */
      width: 90px;
      display: flex;
      border-right: 1px solid #B2B3B3;
      border-bottom: 1px solid transparent;
      align-content: center;
      /* flex-wrap: wrap; */
      flex-direction: column-reverse;
      position: absolute;
      left: 35%;
      margin-left: 0px;
      margin-right: 0px;
    }

    &_4 {
      width: 100%;
      margin-left: -50px;
      margin-right: 0;
    }

    &_5 {
      width: 1px;
      height: 50px;
      margin-left: 60px;
      margin-top: -60px;
      margin-bottom: 0;

      &:before {
        top: 47px;
      }
    }
  }

  .BlockConstructionsWalls__infoWrap {

    &_1 {
      justify-content: space-between;
      align-items: flex-start;
    }

    &_2 {
      flex-direction: column-reverse;
      height: auto;
    }

    &_3 {
      height: max-content;
      margin-top: 30%;
    }

    &_4 {
      align-items: flex-start;
      grid-column-end: 0;
      grid-column-start: 1;
      margin-top: -40px;
    }

    &_5 {
      align-items: flex-start;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-end: 3;
      grid-row-start: 3;
      height: max-content;
      display: flex;
      flex-direction: column-reverse;
      width: max-content;
      margin-left: 100px;
    }
  }


  .BlockConstructionsWalls__info {

    &_1 {
      max-width: 230px;
    }

    &_2 {
      max-width: 280px;
    }

    &_3 {
      max-width: 280px;
    }

    &_4 {
      max-width: 230px;
    }

    &_5 {
      max-width: 240px;
    }

  }
}

@media (max-width: 719px) {

  .BlockConstructionsWalls__info {
    &_3 {
      margin-top: 16px;
    }
  }

  .BlockConstructionsWalls__infoWrap {
    display: none;
  }

  .BlockConstructionsWalls__infoTabs {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    gap: 8px;
    flex-wrap: nowrap;
  }

  .BlockConstructionsWalls__infoTab {
    cursor: pointer;
    flex: 0 1 25%;
    color: #454545;
    font-variant-numeric: lining-nums proportional-nums;
    // font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-transform: lowercase;
    border-radius: 12px;
    background-color: #FFFF;
    transition: background-color .2s ease-in-out;
    text-align: center;
    padding: 6px 0 4px 0;

    &.is_active {
      background-color: $c_primary;
      color: $c_body;
    }
  }

  .BlockConstructionsWalls {
    padding: 16px;
    background-color: #f6f6f6;
  }

  .BlockConstructionsWalls__imgWrap {
    width: 100%;
    max-width: 288px;
    max-height: 220px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  .BlockConstructionsWalls__infoContainer {
    display: none;
  }

  .BlockConstructionsWallsContainer {
    position: relative;
    min-height: 0;
    align-items: flex-start;
    flex-direction: column;
    // gap: 16px;
    justify-content: center;
  }

  .BlockConstructionsWalls__infoMobile {
    display: block;
    width: 100%;
    max-width: 100%;
  }
}
</style>