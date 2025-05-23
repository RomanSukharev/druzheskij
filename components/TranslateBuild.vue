<template>
  <section class="TranslateBuild" id="clear_finishing">
    <div class="TranslateBuild__textContent">
      <h1 class="TranslateBuild__h1">ПЕРЕВОДИМ СТРОИТЕЛЬНЫЙ <span class="TranslateBuild__h1Span">на&nbsp;понятный</span></h1>

      <p class="TranslateBuild__p">
        Стены выровняем по&nbsp;общему уровню, оштукатурим. Если будете клеить обои, то&nbsp;стены стоит загрунтовать.
      </p>
    </div>

    <picture class="TranslateBuild__picture">
      <source class="PskCover__img" srcset="/img/translate_build_desktop.svg" width="899" height="918" media="(min-width: 1171px)" />
      <source
        class="PskCover__img"
        srcset="/img/translate_build_tablet.svg"
        width="728"
        height="977"
        media="(min-width: 741px) and (max-width: 1171px)"
      />
      <img class="PskCover__img" src="/img/translate_build_mobile.svg" width="360" height="696" />
    </picture>

    <p class="TranslateBuild__info">
      Установим счётчики для воды, отопления, электричества и&nbsp;сделаем, чтобы они сами передавали показания.
    </p>
  </section>
</template>

<style lang="scss">
.TranslateBuild {
  padding-top: clamp(50px, 71px, 100px);
  display: flex;
  // justify-content: space-between;
  gap: 70px;
  @include setPaddingSides(var(--global_padding_content));
  position: relative;
}

.TranslateBuild__h1 {
  @include setFontStyle11();
  color: $c_text;

  max-width: 480px;
  margin: 80px 0 30px 0;
}

.TranslateBuild__h1Span {
  @include setFontStyle13();
  color: $c_primary;
  line-height: 60%;

  position: relative;
}

.TranslateBuild__p {
  @include setFontStyle12();
  color: $c_text;

  max-width: 405px;
}

.TranslateBuild__info {
  position: absolute;
  bottom: 2.8%;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: $c_text;

  max-width: 315px;
  padding: 16px 0 17px 65px;
  border-radius: 10px;
  border: 1px solid #eee;

  background: $c_body_hover;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="18" height="27" viewBox="0 0 18 27" fill="none"><path d="M8.74007 1.01215C9.6121 -0.156652 11.4658 0.455142 11.4658 1.91158V12.3349H15.9264C17.1682 12.3349 17.8805 13.7502 17.1409 14.7501L8.70362 26.0866C7.83159 27.2554 5.97339 26.639 5.97339 25.1871V14.7638H1.51733C0.270916 14.7638 -0.441393 13.3439 0.302804 12.3486L8.74007 1.01215Z" fill="%23ED6B5B"/></svg>');
  background-repeat: no-repeat;
  background-position: 30px 20px;
}

@media screen and (max-width: 1800px) {
  .TranslateBuild {
    gap: unset;
    justify-content: space-between;
  }

  .TranslateBuild__h1 {
    margin-right: -300px;
    position: relative;
    z-index: 1;
  }

  .TranslateBuild__p {
    margin-right: -300px;
    position: relative;
    z-index: 1;
  }
}

@media screen and (max-width: 1400px) {
  .TranslateBuild__picture {
    width: 100%;
  }

  .PskCover__img {
    width: 100%;
    height: auto;
  }

  .TranslateBuild__h1 {
    margin-right: -100px;
  }

  .TranslateBuild__p {
    margin-right: -100px;
  }
}

@media screen and (max-width: 1170px) {
  .TranslateBuild {
    flex-direction: column;
  }

  .TranslateBuild__h1 {
    margin: 100px 0 35px 0;
  }

  .TranslateBuild__picture {
    max-width: 728px;
    align-self: center;
    margin: 60px 0 62px 0;
  }

  .TranslateBuild__info {
    position: relative;
    bottom: auto;
  }
}

@media screen and (max-width: 740px) {
  .TranslateBuild__h1 {
    margin: 50px 0 20px 0;
  }

  .TranslateBuild__p {
    max-width: 290px;
  }

  .TranslateBuild__picture {
    margin: 50px 0 55px 0;
    @include setFullWidthInLCWP();
    align-self: auto;
  }
}
</style>
