<script setup lang="ts"></script>

<template>
  <section class="BlockSecondHouse" id="house">
    <div class="BlockSecondHouse__discription">
      <img class="BlockSecondHouse__mark" src="/img/BlockSecondHouse/mask.svg" />

      <div class="BlockSecondHouse__txt">
        <h2 class="BlockSecondHouse__h2">
          второй дом — <br />
          <span class="BlockSecondHouse__h2Span">побольше</span>
        </h2>

        <p class="BlockSecondHouse__p">
          Он&nbsp;с&nbsp;мастер-спальнями, террасами и&nbsp;всем вот этим. Тут восемь секций, половина из&nbsp;них
          &mdash; кирпичные.
        </p>
        <p class="BlockSecondHouse__p">
          Фасад первых этажей такой&nbsp;же, как у&nbsp;сингл-виллы, из&nbsp;лицевого керамического кирпича.
        </p>
        <p class="BlockSecondHouse__p">
          Цветов у&nbsp;окрашенной штукатурки уже три: марсала, гейнсборо и&nbsp;графитно-черный.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockSecondHouse {
  position: relative;
  display: block;
  background-image: url('/img/BlockSecondHouse/BlockSecondHouse.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
}

.BlockSecondHouse__discription {
  position: relative;
  width: fit-content;
  padding: var(--offset_chapter) 0;
  margin-left: var(--global_padding_content);
  left: -42px;
}

.BlockSecondHouse__txt {
  position: absolute;
  top: 49.5%;
  left: 59.2%;
  transform: translate(-50%, -50%);
  max-width: 430px;
  width: 100%;
}

.BlockSecondHouse__h2 {
  @include setFontStyle1();
  color: $c_text;
  margin-bottom: 35px;
}

.BlockSecondHouse__h2Span {
  @include setFontStyle2();
  color: $c_primary;
  line-height: 0;
}

.BlockSecondHouse__p {
  @include setFontStyle3();
  max-width: 363px;
  color: $c_text;
  margin-bottom: 24px;

  &:nth-child(3) {
    max-width: 350px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 1170px) {
  .BlockSecondHouse__discription {
    left: 0px;
    padding: 102px 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockSecondHouse {
    overflow: hidden;
    background-position: 70% bottom;
  }
  .BlockSecondHouse__discription {
    padding: 50px 0 450px 0;
  }
  .BlockSecondHouse__mark {
    position: absolute;
    top: -10.2%;
    left: -70%;
    max-width: 570px;
  }
  .BlockSecondHouse__txt {
    position: relative;
    top: 0px;
    left: 0;
    transform: translate(0%, 0%);
  }

  .BlockSecondHouse__h2 {
    margin-bottom: 28px;
  }

  .BlockSecondHouse__p {
    max-width: 255px;
    margin-bottom: 24px;

    &:nth-child(3) {
      max-width: 246px;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .BlockSecondHouse__bgImg {
    object-position: 87%;
  }
}
</style>
