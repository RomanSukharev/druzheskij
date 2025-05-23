<script setup lang="ts">
import { log } from 'console';

type KeyInfoType = 'one' | 'two' | 'three' | 'four'

var idx = ref(0)

var info = reactive({ one: false, two: false, three: false, four: false })

var active_info = computed(() => Object.keys(info).filter((k) => info[k as keyof typeof info]))
var active_img = computed(() => img_list[idx.value].src)

var img_list: { src: string }[] = [
  { src: '/img/BlockConstructions/1.png' },
  { src: '/img/BlockConstructions/2.png' },
  { src: '/img/BlockConstructions/3.png' },
  { src: '/img/BlockConstructions/4.png' },
  { src: '/img/BlockConstructions/5.png' },
]

var info_tab_list = [
  { name: 1, id: 1, key: 'one' },
  { name: 2, id: 2, key: 'two' },
  { name: 3, id: 3, key: 'three' },
  { name: 4, id: 4, key: 'four' },
]

var clickInfo = (key: KeyInfoType, val: number, evt: any) => {

  idx.value = (info[key] = evt) ? val : 0
  for (const key_info in info) key_info !== key && (info[key_info as KeyInfoType] = false)
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
  <div class="BlockConstructionsFloors" @click.self="reset">
    <div class="BlockConstructionsFloorsContainer">
      <div class="BlockConstructionsFloors__imgWrap">
        <img v-for="(img, idx) of img_list" :key="idx" class="BlockConstructionsFloors__img"
          :class="{ is_active: img.src === active_img }" :src="img.src" alt="пол" width="716" height="353">
      </div>

      <div class="BlockConstructionsFloors__infoContainer" @click.self="reset">
        <div class="BlockConstructionsFloors__infoWrap BlockConstructionsFloors__infoWrap_1">

          <BlockConstructionsCollapse class="BlockConstructionsFloors__info BlockConstructionsFloors__info_1"
            :class="{ no_selected: idx !== 0 && !info.one }" :model-value="info.one"
            @update:modelValue="clickInfo('one', 1, $event)" title="Цементно-песчаная стяжка"
            content_text="Ударопрочный материал, который обеспечивает первичное выравнивание пола. Покрытие не финальное, но облегчает дальнейшую работу с укладкой нужного материала на пол." />

          <div @click="reset" class="BlockConstructionsFloors__line BlockConstructionsFloors__line_1"
            :class="{ no_selected: idx !== 0 && !info.one }"></div>
        </div>


        <div class="BlockConstructionsFloors__infoWrap BlockConstructionsFloors__infoWrap_2">
          <div class="BlockConstructionsFloors__line BlockConstructionsFloors__line_2"
            :class="{ no_selected: idx !== 0 && !info.two }" @click="reset"></div>

          <BlockConstructionsCollapse class="BlockConstructionsFloors__info BlockConstructionsFloors__info_2"
            :class="{ no_selected: idx !== 0 && !info.two }" :model-value="info.two"
            @update:modelValue="clickInfo('two', 2, $event)" title="Звукоизоляционный материал"
            content_text="Используем вспененный полиэтилен. В основе его структуры маленькие ячейки, которые препятствуют звуковым волнам." />
        </div>

        <div class="BlockConstructionsFloors__infoWrap BlockConstructionsFloors__infoWrap_3">
          <BlockConstructionsCollapse class="BlockConstructionsFloors__info BlockConstructionsFloors__info_3"
            :class="{ no_selected: idx !== 0 && !info.three }" :model-value="info.three"
            @update:modelValue="clickInfo('three', 4, $event)" title="Армирующая сетка"
            content_text="Дополнительно укрепляет пол: препятствует появлению трещин и сохраняет монолит в целостности." />

          <div @click="reset" class="BlockConstructionsFloors__line BlockConstructionsFloors__line_3"
            :class="{ no_selected: idx !== 0 && !info.three }"></div>
        </div>


        <!-- :class="{ no_selected: idx !== 2 && idx !== 0 && !info.three }" :model-value="info.three"
            @update:modelValue="clickInfo('three', 2, $event)" -->

        <div class="BlockConstructionsFloors__infoWrap BlockConstructionsFloors__infoWrap_4">
          <div class="BlockConstructionsFloors__line BlockConstructionsFloors__line_4" @click="reset"
            :class="{ no_selected: idx !== 0 && !info.four }"></div>

          <BlockConstructionsCollapse class="BlockConstructionsFloors__info BlockConstructionsFloors__info_4"
            :class="{ no_selected: idx !== 0 && !info.four }" :model-value="info.four"
            @update:modelValue="clickInfo('four', 3, $event)" title="Монолитная плита перекрытия"
            content_text="Несущая конструкция с морозостойкими и противопожарными свойствами. Такая плита не плавится и не горит, а ещё сохраняет оптимальную температуру внутри здания." />
        </div>

      </div>

      <div class="BlockConstructionsFloors__infoTabs">
        <div v-for="i in info_tab_list" :key="i.id" class="BlockConstructionsFloors__infoTab"
          :class="{ is_active: idx === i.id }" @click="clickInfoTab(i)">
          {{ i.name }}
        </div>
      </div>

      <BlockConstructionsCollapse v-if="idx === 1"
        class="BlockConstructionsFloors__info BlockConstructionsFloors__infoMobile BlockConstructionsFloors__info_1"
        model-value title="Цементно-песчаная стяжка"
        content_text="Ударопрочный материал, который обеспечивает первичное выравнивание пола. Покрытие не финальное, но облегчает дальнейшую работу с укладкой нужного материала на пол." />
      <BlockConstructionsCollapse v-if="idx === 2"
        class="BlockConstructionsFloors__info BlockConstructionsFloors__infoMobile BlockConstructionsFloors__info_2"
        model-value title="Звукоизоляционный материал"
        content_text="Используем вспененный полиэтилен. В основе его структуры маленькие ячейки, которые препятствуют звуковым волнам." />
      <BlockConstructionsCollapse v-if="idx === 4"
        class="BlockConstructionsFloors__info BlockConstructionsFloors__infoMobile BlockConstructionsFloors__info_3"
        model-value title="Армирующая сетка"
        content_text="Дополнительно укрепляет пол: препятствует появлению трещин и сохраняет монолит в целостности." />
      <BlockConstructionsCollapse v-if="idx === 3"
        class="BlockConstructionsFloors__info BlockConstructionsFloors__infoMobile BlockConstructionsFloors__info_4"
        model-value title="Монолитная плита перекрытия"
        content_text="Несущая конструкция с морозостойкими и противопожарными свойствами. Такая плита не плавится и не горит, а ещё сохраняет оптимальную температуру внутри здания." />

    </div>
  </div>
</template>

<style lang="scss">
.BlockConstructionsFloors {
  padding: 43px 66px;
  background-color: $c_body_hover;
  border-radius: 10px;
  border: 1px solid rgba(75, 75, 75, 0.10);
}

.BlockConstructionsFloors__infoMobile {
  display: none;
}

.BlockConstructionsFloors__infoTabs {
  display: none;
}

.BlockConstructionsFloorsContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.BlockConstructionsFloors__line {
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
    width: 221px;
    height: 135px;
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
    width: 295px;
    height: 180px;
    margin-top: 30px;
    border-left: 1px solid $c_text_light;
    border-top: 1px solid $c_text_light;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:before {
      right: -3px;
      top: -3px;

    }

    &:after {
      bottom: -3px;
      left: -3px;
    }
  }

  &_3 {
    border-bottom-right-radius: 10px;
    width: 321px;
    height: 30px;
    margin-bottom: 30px;
    border-right: 1px solid $c_text_light;
    border-bottom: 1px solid $c_text_light;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;

    &:before {
      bottom: -3px;
    }

    &:after {
      top: -3px;
      right: -3px;
    }
  }

  &_4 {
    border-bottom-left-radius: 10px;
    height: 20px;
    width: 93px;
    margin-top: 40px;
    border-left: 1px solid $c_text_light;
    border-bottom: 1px solid $c_text_light;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;

    &:before {
      bottom: -3px;
      right: -2px;
    }

    &:after {
      top: -3px;
      left: -3px;
    }
  }
}

.BlockConstructionsFloors__infoWrap {
  display: flex;
  flex-wrap: nowrap;

  &_1 {
    align-items: flex-start;
  }

  &_2 {
    align-items: flex-start;
    margin-top: 28px;
  }

  &_3 {
    margin-bottom: 24px;
    align-items: flex-start;
  }

  &_4 {
    justify-content: flex-end;
    align-items: flex-start;
    margin-right: -20px;
  }

}

.BlockConstructionsFloors__infoContainer {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 190px;
}

.BlockConstructionsFloors__info {
  opacity: 1;

  &.no_selected {
    opacity: 0.3;
  }

  &_1 {
    max-width: 390px;
  }

  &_2 {
    max-width: 350px;
  }

  &_3 {
    max-width: 249px;
  }

  &_4 {
    max-width: 370px;
    margin-top: 30px;
  }


}

.BlockConstructionsFloors__imgWrap {
  position: relative;
  width: 716px;
  height: 353px;
  margin: 71px 0 28px 0;
}

.BlockConstructionsFloors__img {
  width: 100%;
  height: auto;
  position: absolute;
  transition: opacity .2s ease-in-out;
  opacity: 0;
}

.BlockConstructionsFloors__img.is_active {
  opacity: 1;
}


@media (max-width: 1599px) {
  .BlockConstructionsFloors__info {
    opacity: 1;

    &.no_selected {
      opacity: 0.3;
    }

    &_1 {
      max-width: 324px;
    }

    &_2 {
      max-width: 310px;
    }

    &_3 {
      max-width: 309px;
    }

    &_4 {
      // max-width: 307px;
    }
  }

  .BlockConstructionsFloors__line {

    &_1 {
      width: 221px;
      height: 112px;
    }

    &_2 {
      width: 210px;
      height: 180px;
    }

    &_3 {
      margin-top: 20px;
      height: 10px;
    }

    &_4 {
      width: 35px;
    }
  }
}

@media (max-width: 1343px) {
  .BlockConstructionsFloorsContainer {
    min-height: 675px;
  }

  .BlockConstructionsFloors__infoContainer {
    column-gap: 138px;
  }

  .BlockConstructionsFloors__info {

    &.no_selected {
      opacity: 0.3;
    }

    &_1 {
      max-width: 324px;
    }

    &_2 {
      max-width: 300px;
    }

    &_3 {
      max-width: 309px;
    }

    &_4 {
      max-width: 357px;
    }
  }

  .BlockConstructionsFloors__infoWrap {


    &_4 {
      margin-left: 30px;
      align-items: flex-start;
      flex-direction: column;
    }

  }

  .BlockConstructionsFloors__line {

    &_1 {
      width: 191px;
      height: 222px;
    }

    &_2 {
      width: 76px;
      height: 280px;
    }

    &_3 {
      width: 153px;
      height: 30px;
      margin-top: 0;
    }

    &_4 {
      margin-bottom: -30px;
      margin-left: 85px;
      margin-top: 35px;
      height: 100%;
      width: 1px;
    }
  }
}

@media (max-width: 1007px) {
  .BlockConstructionsFloors {
    padding: 43px 35px;
  }

  .BlockConstructionsFloorsContainer {
    min-height: 695px;
  }

  .BlockConstructionsFloors__infoContainer {
    column-gap: 0;
    grid-template-rows: 1fr 1fr;
  }

  .BlockConstructionsFloors__info {

    &.no_selected {
      opacity: 0.3;
    }

    &_1 {
      width: 305px;
    }

    &_2 {
      max-width: 330px;
    }

    &_3 {
      max-width: 230px;
    }

  }

  .BlockConstructionsFloors__infoWrap {
    &_1 {
      flex-direction: column;
    }

    &_2 {
      gap: 0;
      flex-direction: column-reverse;
      justify-content: flex-end;
    }

    &_3 {
      align-items: flex-end;
    }

    &_4 {
      margin-left: 0;
      max-width: 350px;
      align-items: flex-start;
      flex-direction: column;
    }

  }

  .BlockConstructionsFloors__line {

    &_1 {
      margin-top: 0;
      margin-left: 65%;
      width: 1px;
      height: 100%;
      margin-bottom: 90px;
    }

    &_2 {
      margin-top: 0;
      margin-left: 20%;
      width: 1px;
      height: 165px;
    }

    &_3 {
      width: 30px;
      height: 50%;
      margin-bottom: 140px
    }

    &_4 {
      margin-top: 80px;
      // margin-bottom: 0;
      margin-left: 50%;
      height: 80%;
      width: 1px;
    }
  }
}

@media (max-width: 780px) {

  .BlockConstructionsFloors__line {

    &_1 {
      margin-top: 0;
      margin-left: 65%;
      width: 1px;
      height: 60px;
      margin-bottom: 90px;
    }

    &_2 {
      margin-top: 0;
      margin-left: 20%;
      width: 1px;
      height: 130px;
    }

    &_3 {
      width: 30px;
      height: 50%;
      margin-bottom: 140px
    }

    &_4 {
      margin-top: 60px;
      // margin-bottom: 0;
      margin-left: 50%;
      height: 80%;
      width: 1px;
    }
  }
}

@media (max-width: 719px) {
  .BlockConstructionsFloors__infoWrap {
    display: none;
  }

  .BlockConstructionsFloors__info {

    &_4 {
      margin-top: 16px;
    }
  }

  .BlockConstructionsFloors__infoTabs {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    gap: 8px;
    flex-wrap: nowrap;
  }

  .BlockConstructionsFloors__infoTab {
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

  .BlockConstructionsFloors {
    padding: 16px;
    background-color: $c_body_hover;
  }

  .BlockConstructionsFloors__imgWrap {
    // width: 100%;
    // height: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 350px;
    max-height: 220px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .BlockConstructionsFloors__infoContainer {
    display: none;
  }

  .BlockConstructionsFloorsContainer {
    position: relative;
    min-height: 0;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  .BlockConstructionsFloors__infoMobile {
    display: block;
    width: 100%;
    max-width: 100%;
  }
}
</style>