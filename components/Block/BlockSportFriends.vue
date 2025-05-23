<template>
  <section class="BlockSportFriends" id="sport_friends">
    <div class="BlockSportFriends__discription">
      <h2 class="BlockSportFriends__h2">
        дружеский
        <span class="BlockSportFriends__h2Span">к&nbsp;спорту</span>
      </h2>
      <p class="BlockSportFriends__p1">
        Тренировки не&nbsp;всегда даются легко, поэтому окружение должно помогать, а&nbsp;не&nbsp;наоборот. Для этого
        во&nbsp;дворе будет комплекс для&nbsp;занятий на&nbsp;выносливость, силу и&nbsp;координацию.
      </p>
      <p class="BlockSportFriends__p2">
        Такие комплексы делают с&nbsp;японской роботизированной сваркой, поэтому качество&nbsp;&mdash; стабильно
        высокое.
      </p>

      <p class="BlockSportFriends__labelsP">А&nbsp;вот, кто ещё выбирает такое:</p>
      <div class="BlockSportFriends__labels">
        <img class="BlockSportFriends__label worldClass" src="/img/BlockSportFriends/world_class.svg" alt="" />
        <img class="BlockSportFriends__label ufc" src="/img/BlockSportFriends/ufc.svg" alt="" />
        <img class="BlockSportFriends__label zenit" src="/img/BlockSportFriends/zenit.svg" alt="" />
      </div>
    </div>

    <img class="BlockSportFriends__img" src="/img/BlockSportFriends/friends_sport.png" width="1920" height="1080" />
  </section>
</template>

<style lang="scss">
.BlockSportFriends {
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);

  @include setPaddingSides(var(--global_padding_content));
  @include setGridLayout();
  position: relative;
}

.BlockSportFriends__discription {
  margin-top: -10px;
  grid-column-start: 8;
  grid-column-end: 13;
}

.BlockSportFriends__h2 {
  @include setFontStyle1();
  color: $c_text;
  margin-bottom: 35px;
  max-width: 490px;
  flex-wrap: nowrap;
}

.BlockSportFriends__h2Span {
  @include setFontStyle2();
  color: $c_primary;
  line-height: 0%;
  letter-spacing: 0em;
}

.BlockSportFriends__p1 {
  @include setFontStyle3();
  color: $c_text;
  margin-bottom: 24px;
  max-width: 450px;
}

.BlockSportFriends__p2 {
  @include setFontStyle3();
  color: $c_text;
  max-width: 370px;
}

.BlockSportFriends__labelsP {
  margin-top: 184px;
  margin-bottom: 13px;
  @include setFontStyle3();
  color: $c_text;
}
.BlockSportFriends__labels {
  display: flex;
  gap: 30px;
}

.BlockSportFriends__img {
  display: block;
  max-width: 740px;
  width: 100%;
  height: 695px;
  object-fit: cover;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
}

@media screen and (max-width: 1170px) {
  .BlockSportFriends {
    @include setPaddingSides(0);
    padding-top: 0px;
    padding-bottom: 100px;
  }
  .BlockSportFriends__discription {
    @include setPaddingSides(var(--global_padding_content));
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: 3;
    padding-top: 40px;
  }

  .BlockSportFriends__h2 {
    margin-bottom: 35px;
  }

  .BlockSportFriends__h2Span {
    line-height: var(--line_height_rule_2);
  }

  .BlockSportFriends__p1 {
    max-width: 480px;
  }
  .BlockSportFriends__p2 {
    max-width: 490px;
  }

  .BlockSportFriends__labelsP {
    margin-top: 59px;
    margin-bottom: 13px;
  }

  .BlockSportFriends__img {
    max-width: 100%;
    height: auto;
    min-height: 721px;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 2;
  }
}

@media screen and (max-width: 740px) {
  .BlockSportFriends {
    padding-bottom: 70px;
  }
  .BlockSportFriends__discription {
    padding-top: 21px;
    margin-top: 0;
  }
  .BlockSportFriends__h2 {
    margin-bottom: 20px;
  }

  .BlockSportFriends__h2Span {
    line-height: 0;
    position: relative;
    top: -5px;
  }

  .BlockSportFriends__p1 {
    margin-bottom: 20px;
    max-width: 285px;
  }
  .BlockSportFriends__p2 {
    max-width: 260px;
    margin: 0 0 auto;
  }
  .BlockSportFriends__img {
    min-height: 308px;
  }
  .BlockSportFriends__labelsP {
    margin-top: 70px;
    margin-bottom: 10px;
  }
  .BlockSportFriends__labels {
    gap: 20px;
  }

  .worldClass {
    width: 78.9px;
  }

  .ufc {
    width: 80.5px;
  }
  .zenit {
    width: 60.5px;
  }
}

@media screen and (max-width: 450px) {
  .BlockSportFriends__img {
    min-height: auto;
    height: 251px;
    object-position: center;
  }
}
</style>
