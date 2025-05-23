<script setup lang="ts">
var handleClickSubscribe = () => {
  ymReachGoal('click-btn_subscribe_more-flats') //ym_target - Клик кнопка - Подписаться - Больше о квартирах
}
</script>

<template>
  <section class="BlockMoreFlats" id="more_flats">
    <h3 class="BlockMoreFlats__h2">Больше о квартирах </h3>
    <p class="BlockMoreFlats__p">
      Подпишитесь на&nbsp;телеграм-канал, чтобы узнавать новости о&nbsp;проекте и&nbsp;актуальных акциях
      на&nbsp;квартиры.
    </p>

    <a href="https://t.me/mediadom72" target="_blank" class="BlockMoreFlats__btn" @click="handleClickSubscribe()"
      >Подписаться
    </a>

    <img class="BlockMoreFlats__plain" src="/img/BlockMoreFlats.svg" />
  </section>
</template>

<style lang="scss">
.BlockMoreFlats {
  margin-bottom: var(--offset_chapter);
  background: linear-gradient(180deg, #6fd4fc 0%, #2b9ef0 84.19%);
  @include setPaddingSides(var(--global_padding_content));
  margin-left: var(--global_padding_content);
  margin-right: var(--global_padding_content);
  padding: 50px 60px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.BlockMoreFlats__h2 {
  @include setFontStyle14();
  margin-bottom: 30px;
  color: $c_body;
}
.BlockMoreFlats__p {
  @include setFontStyle15();
  margin-bottom: 50px;
  max-width: 528px;
  color: $c_body;
}

.BlockMoreFlats__btn {
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  padding: 16px 120px;
  border-radius: 4px;
  color: #4b4b4b;
  border: none;
  background-color: $c_body;
  transition: all 0.3s;
  outline: none;
  text-decoration: none;
  &:hover {
    color: $c_body;
    background-color: #4b4b4b;
    cursor: pointer;
    transition: all 0.3s;
  }
}

.BlockMoreFlats__plain {
  position: absolute;
  top: -47px;
  right: 125px;
}

@media screen and (max-width: 1170px) {
  .BlockMoreFlats {
    padding: 50px 30px;
  }

  .BlockMoreFlats__plain {
    width: 402px;
    height: auto;
    top: 165px;
    right: 27px;
  }
}

@media screen and (max-width: 740px) {
  .BlockMoreFlats {
    padding: 40px 24px;
  }

  .BlockMoreFlats__plain {
    width: 174px;
    top: 250px;
    right: -13px;
  }
  .BlockMoreFlats__p {
    margin-bottom: 40px;
  }
  .BlockMoreFlats__btn {
    padding: 16px 60px;
    width: 100%;
  }
}
</style>
