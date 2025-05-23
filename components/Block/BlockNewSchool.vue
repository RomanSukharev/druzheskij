<script setup lang="ts">
const list: { number: string; text: string; flag?: boolean }[] = [
  { number: "2023", text: "год открытия школы" },
  { number: "16", text: "минут пешком" },
  {
    number: "1500",
    text: "мест для обучения<br />в&nbsp;одну смену",
    flag: true,
  },
];
</script>

<template>
  <section class="BlockNewSchool" id="new_school">
    <div class="BlockNewSchool__textWrap">
      <h2 class="BlockNewSchool__h">
        Новая школа&nbsp;— <br />
        уже готова
      </h2>
      <p class="BlockNewSchool__p1">
        Рядом открывается школа, и&nbsp;она не&nbsp;такая, в&nbsp;которых все мы&nbsp;учились. Например, там&nbsp;есть коворкинг, отдельные
        теннисные&nbsp;и&nbsp;шахматные зоны.
      </p>
      <p class="BlockNewSchool__p2">
        А&nbsp;ещё три разных спортзала: игровой, гимнастический и&nbsp;отдельный для боевых искусств с&nbsp;татами.
      </p>
    </div>
    <div class="BlockNewSchool__infoList">
      <div class="BlockNewSchool__infoItem" :class="{ red: item.flag }" v-for="item of list" :key="item.number">
        <p v-html="item.number"></p>
        <span v-html="item.text"></span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockNewSchool {
  position: relative;
  @include useLCWP();
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  background-color: $c_body;
  @include setGridLayout();
}

.BlockNewSchool__textWrap {
  grid-column: span 6;
  max-width: 470px;
}

.BlockNewSchool__infoList {
  align-self: center;
  grid-column: span 6;
  max-width: 568px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  grid-template-areas:
    "a a a a b"
    "c c c c c";
}

.BlockNewSchool__infoItem {
  border-radius: 15px;
  border: 1.485px solid rgba(138, 138, 138, 0.1);
  background: $c_body_hover;
  padding: 30px 22px;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  gap: 15px;

  p {
    color: $c_text;
    leading-trim: both;
    text-edge: cap;
    font-family: "NeutralFace";
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 98%; /* 58.8px */
  }

  span {
    leading-trim: both;

    text-edge: cap;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }

  &.red {
    p,
    span {
      color: $c_body;
    }

    background: $c_primary;
  }

  &:nth-child(1) {
    grid-area: a;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }
}

.BlockNewSchool__h {
  color: $c_text;
  @include setFontStyle1();
  text-transform: uppercase;
  margin-bottom: 40px;
}

.BlockNewSchool__p1,
.BlockNewSchool__p2 {
  @include setFontStyle3();
}

.BlockNewSchool__p1 {
  margin-bottom: 24px;
}

@media screen and (max-width: 1170px) {
  .BlockNewSchool__textWrap {
    grid-column: span 8;
    margin-bottom: 80px;
  }

  .BlockNewSchool__infoList {
    grid-column: span 8;
    max-width: 100%;
    grid-template-areas:
      "a a a b b"
      "c c c c c";
  }
}

@media screen and (max-width: 740px) {
  .BlockNewSchool__h {
    margin-bottom: 30px;
  }

  .BlockNewSchool__p1 {
    max-width: 300px;
  }
  .BlockNewSchool__p2 {
    max-width: 235px;
  }
  .BlockNewSchool__textWrap {
    margin-bottom: 40px;
    grid-column: span 4;
  }

  .BlockNewSchool__infoList {
    grid-column: span 4;
    grid-template-areas:
      "c c c c b"
      "a a a a a";
  }

  .BlockNewSchool__infoItem {
    padding: 23px 15px;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
