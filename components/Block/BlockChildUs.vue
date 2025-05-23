<template>
  <section class="BlockChildUs" id="child_us">
    <div class="BlockChildUs__discription">
      <h2 class="BlockChildUs__h2">
        вот&nbsp;бы
        <span class="BlockChildUs__h2Span">такие площадки</span>
        в&nbsp;наше детство
      </h2>
      <p class="BlockChildUs__p1">
        Для развлечения детей во&nbsp;дворе будут игровые комплексы. Тут и&nbsp;полазать,
        и&nbsp;покачаться, и&nbsp;поиграть с&nbsp;песком по&nbsp;классике.
      </p>
      <p class="BlockChildUs__p2">
        Оборудование сделано из&nbsp;дуба и&nbsp;лиственницы&nbsp;&mdash; очень стойких пород
        к&nbsp;влаге, разрушению и&nbsp;нашим сибирским морозам.
      </p>
    </div>

    <img class="BlockChildUs__img" src="/img/BlockChildUs.png" alt="" width="740" height="780" />
  </section>
</template>

<style lang="scss">

.BlockChildUs {
  @include setPaddingSides(var(--global_padding_content));
  @include setGridLayout();
  padding-top: var(--offset_chapter_sub);
  position: relative; //for helper
}

.BlockChildUs__discription {
  grid-column-start: 1;
  grid-column-end: 7;
  padding-top: 136px;
  
}

.BlockChildUs__h2 {
  @include setFontStyle1();
  color: $c_text;
  margin-bottom: 40px;
  max-width: 490px;
  flex-wrap: nowrap;
}

.BlockChildUs__h2Span {
  @include setFontStyle2();
  color: $c_primary;
}

.BlockChildUs__p1 {
  @include setFontStyle3();
  color: $c_text;
  margin-bottom: 24px;
  max-width: 395px;
}

.BlockChildUs__p2 {
  @include setFontStyle3();
  color: $c_text;
  max-width: 390px;
}

.BlockChildUs__img {
  display: block;
  max-width: 740px;
  width: 100%;
  height: 780px;
  object-fit: cover;
  grid-column-start: 7;
  grid-column-end: 13;
}

@media screen and (max-width: 1170px) {
  .BlockChildUs {
    @include setPaddingSides(0);
    padding-top: 0;
  }
  .BlockChildUs__discription {
    @include setPaddingSides(var(--global_padding_content));
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: 3;
    padding-top: 40px;
    padding-bottom: 100px;
  }

  .BlockChildUs__img {
    max-width: 100%;
    height: auto;
    min-height: 810px;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 2;
  }
}

@media screen and (max-width: 740px) {
  .BlockChildUs__discription{
    padding-top: 17px;
    padding-bottom: 70px;
  }
  .BlockChildUs__h2 {
    margin-bottom: 30px;
  }
  .BlockChildUs__p1 {
    margin-bottom: 34px;
  }
  .BlockChildUs__p2 {
    max-width: 226px;
    margin: 0 0 0 auto;
  }
  .BlockChildUs__img{
    min-height: 308px;
  }
}

@media screen and (max-width: 450px) {
 
  .BlockChildUs__img{
    min-height: auto;
    height: 310px;
    object-position: bottom;
  }
}
</style>
