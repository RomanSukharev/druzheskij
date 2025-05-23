<template>
  <section class="BlockLeadBuild" id="about_company">
    <h2 class="BlockLeadBuild__h2">КСТАТИ: ЛИДЕР ЗАСТРОЙЩИКОВ*</h2>

    <p class="BlockLeadBuild__p">
      <span class="BlockLeadBuild__pSpan">*</span>Циан рассчитал, что мы&nbsp;&mdash; лидер среди застройщиков. За&nbsp;весь прошлый год
      и&nbsp;по&nbsp;всей области.
    </p>

    <div class="BlockLeadBuild__info">
      <div class="BlockLeadBuild__infoItem">
        <h5 class="BlockLeadBuild__infoItemH5">5</h5>
        <p class="BlockLeadBuild__infoItemP">звезд за&nbsp;сдачу домов&nbsp;в&nbsp;срок</p>
      </div>

      <div class="BlockLeadBuild__infoItem">
        <h5 class="BlockLeadBuild__infoItemH5">17</h5>
        <p class="BlockLeadBuild__infoItemP">домов запустили за&nbsp;2&nbsp;прошлых&nbsp;года</p>
      </div>

      <div class="BlockLeadBuild__infoItem_primary">
        <h5 class="BlockLeadBuild__infoItemH5_primary">100+</h5>
        <p class="BlockLeadBuild__infoItemP_primary">домов построили и&nbsp;сдали&nbsp;за&nbsp;23&nbsp;года</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockLeadBuild {
  @include setGridLayout();
  @include setPaddingSides(var(--global_padding_content));
  padding-top: var(--offset_chapter);
  padding-bottom: var(--offset_chapter);
  position: relative;
}

.BlockLeadBuild__h2 {
  font-family: NeutralFace;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: $c_text;

  grid-column-start: 1;
  grid-column-end: 13;

  max-width: 480px;
  margin: 0 0 40px 0;
}

.BlockLeadBuild__p {
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: $c_text;

  grid-column-start: 7;
  grid-column-end: 13;

  max-width: 560px;
  margin: 0 0 80px 0;
}

.BlockLeadBuild__info {
  grid-column-start: 1;
  grid-column-end: 13;

  display: flex;
  gap: 40px;
  gap: 2.6%;
  justify-content: space-between;
  width: 100%;
}

.BlockLeadBuild__infoItem {
  width: 100%;
  padding: 35px 30px;

  background-color: $c_body_hover;
  border-radius: 15px;
  border: 1px solid #eee;
}

.BlockLeadBuild__infoItem_primary {
  width: 100%;
  padding: 35px 30px;

  background-color: $c_primary;
  border-radius: 15px;
}

.BlockLeadBuild__infoItemH5 {
  font-family: NeutralFace;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 98%;
  color: $c_text;

  margin: 4px 0 0 0;
}

.BlockLeadBuild__infoItemH5_primary {
  font-family: NeutralFace;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 98%;
  color: $c_body;

  margin: 4px 0 0 0;
}

.BlockLeadBuild__infoItemP {
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: $c_text;
}

.BlockLeadBuild__infoItemP_primary {
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: $c_body;
}

@media screen and (max-width: 1170px) {
  .BlockLeadBuild {
    padding-top: 100px;
    padding-bottom: 136px;
  }

  .BlockLeadBuild__h2 {
    font-size: 40px;
    grid-column-end: 9;
  }

  .BlockLeadBuild__p {
    grid-column-start: 1;
    grid-column-end: 9;
  }

  .BlockLeadBuild__pSpan {
    display: none;
  }

  .BlockLeadBuild__info {
    grid-column-end: 9;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 2.6%;
  }

  .BlockLeadBuild__infoItem_primary {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .BlockLeadBuild__infoItemH5,
  .BlockLeadBuild__infoItemH5_primary {
    font-size: 80px;
  }

  .BlockLeadBuild__infoItemP,
  .BlockLeadBuild__infoItemP_primary {
    font-size: 16px;
    margin: 4px 0 0 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockLeadBuild {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .BlockLeadBuild__h2 {
    font-size: 29px;
    line-height: 131%;

    grid-column-end: 5;
    margin: 0 0 26px 0;
  }

  .BlockLeadBuild__p {
    font-size: 14px;
    line-height: 125%;

    grid-column-end: 5;
    margin: 0 0 38px 0;
    max-width: 300px;
  }

  .BlockLeadBuild__info {
    grid-column-end: 5;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px 6%;
  }

  .BlockLeadBuild__infoItem {
    padding: 20px 13px 20px 15px;
    grid-column: span 2;
  }

  .BlockLeadBuild__infoItem_primary {
    padding: 20px 13px 20px 15px;
    grid-column: span 4;
  }

  .BlockLeadBuild__infoItemH5,
  .BlockLeadBuild__infoItemH5_primary {
    font-size: 62px;

    margin: 0 0 0 0;
  }

  .BlockLeadBuild__infoItemP,
  .BlockLeadBuild__infoItemP_primary {
    font-size: 14px;
    line-height: 125%;

    max-width: 200px;
    margin: 0 0 0 0;
  }
}
</style>
