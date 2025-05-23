<template>
  <section class="BlockSeveralCases">
    <div class="BlockSeveralCases__textContent">
      <h2 class="BlockSeveralCases__h2">НЕСКОЛЬКО ДЕЛ <span class="BlockSeveralCases__h2Span">одновременно</span></h2>

      <p class="BlockSeveralCases__p1">
        Ещё ближе &laquo;Колумба&raquo; находится торговый центр &laquo;Плехановский&raquo;. В&nbsp;нём шесть пунктов
        доставки, магазины и&nbsp;два фитнес-клуба.
      </p>

      <p class="BlockSeveralCases__p2">
        Это значит, что в&nbsp;одном месте можно забрать заказ, купить продукты и&nbsp;сходить на&nbsp;тренировку. Идти,
        кстати, всего пять минут.
      </p>

      <div class="BlockSeveralCases__info">
        <div class="BlockSeveralCases__infoItem">
          <img class="BlockSeveralCases__infoItemTitle" src="/img/BlockSeveralCases/five.svg" width="119" height="21" />
          <p class="BlockSeveralCases__infoLabel">супермаркет</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img
            class="BlockSeveralCases__infoItemTitle"
            src="/img/BlockSeveralCases/ya_market.svg"
            width="131"
            height="19"
          />
          <p class="BlockSeveralCases__infoLabel">пункт выдачи</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img class="BlockSeveralCases__infoItemTitle" src="/img/BlockSeveralCases/ozon.svg" width="77" height="17" />
          <p class="BlockSeveralCases__infoLabel">пункт выдачи</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img
            class="BlockSeveralCases__infoItemTitle"
            src="/img/BlockSeveralCases/magnit.svg"
            width="84"
            height="15"
          />
          <p class="BlockSeveralCases__infoLabel">супермаркет</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img
            class="BlockSeveralCases__infoItemTitle"
            src="/img/BlockSeveralCases/postamat.svg"
            width="95"
            height="20"
          />
          <p class="BlockSeveralCases__infoLabel">постамат</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img
            class="BlockSeveralCases__infoItemTitle"
            src="/img/BlockSeveralCases/wildberries.svg"
            width="132"
            height="16"
          />
          <p class="BlockSeveralCases__infoLabel">пункт выдачи</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img class="BlockSeveralCases__infoItemTitle" src="/img/BlockSeveralCases/5post.svg" width="73" height="26" />
          <p class="BlockSeveralCases__infoLabel">постамат</p>
        </div>

        <div class="BlockSeveralCases__infoItem">
          <img class="BlockSeveralCases__infoItemTitle" src="/img/BlockSeveralCases/post.svg" width="120" height="18" />
          <p class="BlockSeveralCases__infoLabel">почтомат</p>
        </div>
      </div>
    </div>

    <div class="BlockSeveralCases__bubbles"></div>
  </section>
</template>

<style lang="scss">
.BlockSeveralCases {
  position: relative;

  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
  padding-top: 140px;
  padding-bottom: 140px;

  background-color: $c_primary;
}

.BlockSeveralCases__textContent {
  grid-column-start: 7;
  grid-column-end: 13;
}

.BlockSeveralCases__h2 {
  @include setFontStyle11();
  color: $c_body;

  margin: 0 0 35px 0;
}

.BlockSeveralCases__h2Span {
  @include setFontStyle13();
  line-height: 40%;
}

.BlockSeveralCases__p1 {
  @include setFontStyle12();
  color: $c_body;

  max-width: 500px;
  margin: 0 0 23px 0;
}

.BlockSeveralCases__p2 {
  @include setFontStyle12();
  color: $c_body;

  max-width: 520px;
  margin: 0 0 80px 0;
}

.BlockSeveralCases__info {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 80px 70px 70px;
}

.BlockSeveralCases__infoLabel {
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 138.1%;
  color: $c_text;
}

.BlockSeveralCases__bubbles {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 45vw;

  background-image: url(/img/BlockSeveralCases/bubbles_desktop.png);
  background-repeat: no-repeat;
  background-position: right top;
}

@media screen and (max-width: 1300px) {
  .BlockSeveralCases__info {
    grid-template-columns: 170px 170px 170px;
  }
}

@media screen and (max-width: 1170px) {
  .BlockSeveralCases {
    padding-top: 110px;
    padding-bottom: 75px;
  }

  .BlockSeveralCases__textContent {
    grid-column-start: 1;
    grid-column-end: 9;
    position: relative;
    z-index: 1;
  }

  .BlockSeveralCases__h2 {
    max-width: 400px;
    margin: 0 0 32px 0;
  }

  .BlockSeveralCases__h2Span {
    line-height: 60%;
  }

  .BlockSeveralCases__p1 {
    font-size: 14px;
  }

  .BlockSeveralCases__p2 {
    font-size: 14px;

    max-width: 480px;
    margin: 0 0 58px 0;
  }

  .BlockSeveralCases__info {
    grid-template-columns: 200px 200px 200px;
  }

  .BlockSeveralCases__bubbles {
    width: 100%;
    background-image: url(/img/BlockSeveralCases/bubbles_tablet.png);
    background-position: right top;
    bottom: auto;
    height: 255px;
  }
}

@media screen and (max-width: 740px) {
  .BlockSeveralCases {
    padding-top: 50px;
    padding-bottom: 70px;
  }

  .BlockSeveralCases__h2 {
    margin: 0 0 145px 0;
  }

  .BlockSeveralCases__p1 {
    line-height: 125%;

    max-width: 270px;
    margin: 0 0 20px 0;
  }

  .BlockSeveralCases__p2 {
    line-height: 125%;

    max-width: 260px;
    margin: 0 0 50px 0;
  }

  .BlockSeveralCases__info {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px 70px 70px 70px;
  }

  .BlockSeveralCases__infoLabel {
    font-size: 10.554px;
    line-height: 138.1%;
  }

  .BlockSeveralCases__bubbles {
    background-image: url(/img/BlockSeveralCases/bubbles_mobile.png);
  }
}
</style>
