<template>
  <section class="BlockInFriendlyWay" id="in_friendly_way">
    <div class="BlockInFriendlyWay__img">
      <picture>
        <source
          class="BlockInFriendlyWay__picture"
          width="768"
          height="631"
          srcset="/img/BlockInFriendlyWay/hands_pad.webp"
          media="(max-width: 1170px)"
        />
        <img
          class="BlockInFriendlyWay__picture"
          width="1000"
          height="1220"
          src="/img/BlockInFriendlyWay/hands.webp"
          alt="картинка с руками"
        />
      </picture>
    </div>
    <h2 class="BlockInFriendlyWay__h">по-новому&nbsp;&mdash; <br /><span>по-дружески</span></h2>
    <div class="BlockInFriendlyWay__pContainer">
      <p class="BlockInFriendlyWay__p">
        Новый дом&nbsp;&mdash; это не&nbsp;только другая квартира. Это ещё и&nbsp;окружение соседей, готовых помочь. Всё
        потому, что переезд объединяет.
      </p>
      <p class="BlockInFriendlyWay__p">
        Представьте, все делятся опытом ремонта и&nbsp;инструментами для него. Договариваются, когда лучше
        не&nbsp;шуметь, и&nbsp;советуют мастеров.
      </p>
      <p class="BlockInFriendlyWay__p">
        Мы&nbsp;тоже помогли с&nbsp;ремонтом, про&nbsp;это&nbsp;и&nbsp;рассказываем дальше.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.BlockInFriendlyWay {
  position: relative;
  @include useLCWP();
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  @include setGridLayout();
  background-color: $c_primary;
}

.BlockInFriendlyWay__img {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 10;

  img,
  source {
    display: block;
    width: 100%;
    height: auto;
  }
}

.BlockInFriendlyWay__pContainer {
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 6;
  grid-row-end: 8;

  p {
    color: $c_body;
    @include setFontStyle3();
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
}

.BlockInFriendlyWay__h {
  margin-bottom: 40px;
  grid-column-start: 7;
  grid-column-end: 12;
  grid-row-start: 3;
  grid-row-end: 6;
  @include setFontStyle1();
  color: $c_body;

  span {
    @include setFontStyle13();
  }
}

@media screen and (max-width: 1370px) {
  .BlockInFriendlyWay__pContainer {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 7;
    grid-row-end: 9;
  }

  .BlockInFriendlyWay__h {
    grid-column-start: 6;
    grid-column-end: 12;
    grid-row-start: 3;
    grid-row-end: 6;
  }
}

@media screen and (max-width: 1170px) {
  .BlockInFriendlyWay__pContainer {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 6;
    grid-row-end: 12;
  }

  .BlockInFriendlyWay__h {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .BlockInFriendlyWay__img {
    margin: 0 -20px 60px;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 4;
    grid-row-end: 5;
  }
}

@media screen and (max-width: 740px) {
  .BlockInFriendlyWay__pContainer {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 12;
  }

  .BlockInFriendlyWay__h {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .BlockInFriendlyWay__img {
    margin: 0 -16px 35px;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .BlockInFriendlyWay__p {
    max-width: 254px;
  }
}
</style>
