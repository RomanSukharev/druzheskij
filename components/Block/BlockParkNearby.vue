<template>
  <section class="BlockParkNearby" id="park_nearby">
    <div class="BlockParkNearby__discription">
      <h2 class="BlockParkNearby__h2">
        парк рядом и&nbsp;дышится <span class="BlockParkNearby__h2Span">легче</span>
      </h2>
      <p class="BlockParkNearby__p1">
        Что про него стоит знать: он&nbsp;большой и&nbsp;находится близко. Там двенадцать мангальных
        зон, а&nbsp;ещё есть площадки для игры в&nbsp;баскетбол и&nbsp;футбол.
      </p>
      <p class="BlockParkNearby__p2">
        В&nbsp;нём больше всего хвойных деревьев, поэтому гулять вдвойне полезнее из-за эфирного
        масла сосны в&nbsp;воздухе.
      </p>
      <div class="BlockParkNearby__digits">
        <div class="BlockParkNearby__digitsItem">
          <h4 class="BlockParkNearby__digitsH4">>150</h4>
          <p class="BlockParkNearby__digitsSub">гектаров площадь парка</p>
        </div>
        <div class="BlockParkNearby__digitsItem">
          <h4 class="BlockParkNearby__digitsH4">11</h4>
          <p class="BlockParkNearby__digitsSub">минут на машине</p>
        </div>
        <div class="BlockParkNearby__digitsItem">
          <h4 class="BlockParkNearby__digitsH4">12</h4>
          <p class="BlockParkNearby__digitsSub">мангальных зон</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockParkNearby {
  position: relative;
  background-image: url("/img/BlockParkNearby/desktop.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center bottom;
}
.BlockParkNearby__discription {
  padding-top: var(--offset_chapter);
  padding-bottom: 232px;
  @include setPaddingSides(var(--global_padding_content), 0);
}

.BlockParkNearby__h2 {
  @include setFontStyle1();
  color: $c_body;
  margin-bottom: 35px;
  max-width: 460px;
}

.BlockParkNearby__h2Span {
  @include setFontStyle13();
  color: $c_body;
  line-height: 0;
}

.BlockParkNearby__p1 {
  @include setFontStyle12();
  color: $c_body;
  max-width: 525px;
  margin-bottom: 24px;
}

.BlockParkNearby__p2 {
  @include setFontStyle12();
  color: $c_body;
  max-width: 480px;
  margin-bottom: 60px;
}

.BlockParkNearby__digits {
  display: flex;
  gap: 40px;
}
.BlockParkNearby__digitsH4 {
  @include setFontStyle7();
  color: $c_body;
}

.BlockParkNearby__digitsSub {
  @include setFontStyle9();
  color: $c_body;
}

@media screen and (max-width: 1920px) {
  .BlockParkNearby {
    background-size: auto 100%;
  }
}

@media screen and (max-width: 1170px) {
  .BlockParkNearby__discription {
    padding-bottom: var(--offset_chapter);
    width: fit-content;
    // filter: ;
    backdrop-filter: blur(1.6px);
  }

  .BlockParkNearby__h2 {
    max-width: 290px;
    margin-bottom: 40px;
  }

  .BlockParkNearby__h2Span {
    line-height: 0;
    position: relative;
    top: 5px;
  }
  .BlockParkNearby__p2 {
    margin-bottom: 55px;
  }
  .BlockParkNearby {
    background-size: auto;
    background-position: 60% bottom;
  }
}

@media screen and (max-width: 740px) {
  .BlockParkNearby {
    background-image: url("/img/BlockParkNearby/mobile.png");
    background-position: center bottom;
    background-size: auto 100%;
  }
  .BlockParkNearby__discription {
    padding-bottom: 565px;
    backdrop-filter: blur(0);
  }

  .BlockParkNearby__h2 {
    max-width: 250px;
    margin-bottom: 30px;
    margin-bottom: 20px;
  }

  .BlockParkNearby__h2Span {
    line-height: 0;
    position: relative;
    top: -5px;
  }

  .BlockParkNearby__p1 {
    margin-bottom: 18px;
    max-width: 270px;
  }

  .BlockParkNearby__p2 {
    margin-bottom: 57px;
    max-width: 270px;
  }

  .BlockParkNearby__digits {
    justify-content: space-between;
    max-width: 280px;
    flex-wrap: wrap;
    row-gap: 45px;
  }

  .BlockParkNearby__digitsH4 {
    margin-bottom: 5px;
  }
}

// @mixin setFontStyle13()
</style>
