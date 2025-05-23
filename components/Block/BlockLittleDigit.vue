<template>
  <section class="BlockLittleDigit" id="little_digit">
    <div class="BlockLittleDigit__discription">
      <h2 class="BlockLittleDigit__h2">и&nbsp;ещё немного на&nbsp;языке цифр</h2>
      <p class="BlockLittleDigit__p">Мы&nbsp;тут всё посчитали, чтобы вы подробнее познакомились с&nbsp;домами.</p>
    </div>

    <div class="BlockLittleDigit__items">
      <div class="BlockLittleDigit__item One">
        <div style="display: flex; align-items: end">
          <p class="BlockLittleDigit__itemDigit">2,7</p>
          <p class="BlockLittleDigit__itemDigitSpan">м</p>
        </div>
        <p class="BlockLittleDigit__itemSub">
          высота потолков <br />
          в квартирах
        </p>
      </div>
      <div class="BlockLittleDigit__item Two">
        <div style="display: flex; align-items: end">
          <p class="BlockLittleDigit__itemDigitSpan">от</p>

          <p class="BlockLittleDigit__itemDigit">3</p>
        </div>
        <p class="BlockLittleDigit__itemSub">
          соседей <br />
          на этаже
        </p>
      </div>
      <div class="BlockLittleDigit__item Three">
        <p class="BlockLittleDigit__itemDigit">19</p>
        <p class="BlockLittleDigit__itemSub">
          коммерческих <br />
          помещений
        </p>
      </div>
      <div class="BlockLittleDigit__item Four">
        <p class="BlockLittleDigit__itemDigit">35</p>
        <p class="BlockLittleDigit__itemSub">
          квартир <br />
          в сингл-вилле
        </p>
      </div>
      <div class="BlockLittleDigit__item Red">
        <div style="display: flex; align-items: end">
          <p class="BlockLittleDigit__itemDigit">>50</p>
          <p class="BlockLittleDigit__itemDigitPercent">%</p>
        </div>
        <p class="BlockLittleDigit__itemSub">
          кирпичных секций <br />
          в проекте
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockLittleDigit {
  // background-color: grey;
  padding-top: 150px;
  padding-bottom: 150px;

  @include setPaddingSides(var(--global_padding_content));
  @include setGridLayout();
  position: relative;
}

.BlockLittleDigit__discription {
  grid-column-start: 1;
  grid-column-end: 7;
  padding-top: 70px;
}

.BlockLittleDigit__h2 {
  @include setFontStyle1();
  color: $c_text;
  margin-bottom: 40px;
  max-width: 452px;
}

.BlockLittleDigit__p {
  @include setFontStyle3();
  color: $c_text;
  max-width: 409px;
}

.BlockLittleDigit__items {
  grid-column-start: 7;
  grid-column-end: 13;
  max-width: 473px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.BlockLittleDigit__item {
  background-color: $c_body_hover;
  padding: 18px 15px;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  border-radius: 15px;
  border: 1px solid #eee;
}
.BlockLittleDigit__itemDigit {
  @include setFontStyle7();
  color: $c_text;
}
.BlockLittleDigit__itemSub {
  @include setFontStyle3();
  color: $c_text;
  font-size: 14px;
  margin-left: 15px;
}
.BlockLittleDigit__itemDigitPercent {
  @include setFontStyle7();
  font-size: 42px;
  color: $c_text;
}
.BlockLittleDigit__itemDigitSpan {
  @include setFontStyle7();
  font-size: 22px;
  color: $c_text;
  font-weight: 700;
}
.Red {
  border-radius: 15px;
  background: $c_primary;
  border: none;
  width: 100%;

  .BlockLittleDigit__itemDigit,
  .BlockLittleDigit__itemDigitPercent,
  .BlockLittleDigit__itemSub {
    color: $c_body;
  }
}

.One {
  width: 261px;
  .BlockLittleDigit__itemDigit {
    letter-spacing: -0.05em;
  }
}

.Two {
  width: 191px;
  .BlockLittleDigit__itemDigit {
    margin-left: 5px;
  }
}

.Three {
  width: 224px;
}

.Four {
  width: 228px;
}

@media screen and (max-width: 1170px) {
  .BlockLittleDigit {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .BlockLittleDigit__discription {
    padding-top: 0;
    margin-bottom: 80px;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .BlockLittleDigit__items {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 2;
    grid-row-end: 3;
    gap: 30px;
    max-width: 720px;
  }

  .BlockLittleDigit__item {
    padding: 28px 23px;
    border-radius: 22.881px;
  }

  .BlockLittleDigit__itemDigit {
    font-size: 91.52px;
  }
  .BlockLittleDigit__itemSub {
    font-size: 16px;
    margin-left: 22.881px;
  }

  .BlockLittleDigit__itemDigitPercent {
    font-size: 64.068px;
  }
  .BlockLittleDigit__itemDigitSpan {
    font-size: 33.559px;
  }

  .One {
    width: 398.136px;
  }

  .Two {
    width: 291.356px;
  }
  .Three {
    width: 341.695px;
  }
  .Four {
    width: 347.797px;
  }
}

@media screen and (max-width: 760px) {
  .BlockLittleDigit__items {
    max-width: 328px;
    gap: 20px;
    row-gap: 10px;
  }
  .BlockLittleDigit__item {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 15px;
    border-radius: 15px;
  }
  .BlockLittleDigit__itemDigit {
    font-size: 62px;
    line-height: 85%;
  }
  .BlockLittleDigit__itemDigitPercent {
    font-size: 42px;
  }
  .BlockLittleDigit__itemSub {
    font-size: 14px;
    margin-top: 15px;
    margin-left: 0;
  }
  .BlockLittleDigit__itemDigitSpan {
    font-size: 22px;
  }
  .One {
    width: 164px;
    order: 5;
  }

  .Two {
    width: 142px;
    order: 2;
  }
  .Three {
    width: 144px;
    order: 4;
  }
  .Four {
    width: 166px;
    order: 1;
  }
  .Red {
    order: 3;
  }
}

@media screen and (max-width: 740px) {
  .BlockLittleDigit {
    padding-top: 50px;
    padding-bottom: 70px;
  }

  .BlockLittleDigit__discription {
    margin-bottom: 48px;
  }
  .BlockLittleDigit__h2 {
    margin-bottom: 30px;
  }
  .BlockLittleDigit__p {
    max-width: 210px;
  }
}
</style>
