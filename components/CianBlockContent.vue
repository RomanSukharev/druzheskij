<template>
  <div class="CianBlockContent">
    <p class="CianBlockContent__p">
      &laquo;Лидер среди застройщиков&raquo;&nbsp;&mdash; определено на&nbsp;основании рейтинга
      Застройщиков Тюменской области по&nbsp;данным &laquo;Циан&raquo; по&nbsp;состоянию
      на&nbsp;декабрь {{new Date().getFullYear() - 1}}&nbsp;года. Рейтинг составлен на&nbsp;основе количества показов объявлений
      покупателям недвижимости на&nbsp;&laquo;Циан&raquo;, просмотров карточек&nbsp;ЖК
      и&nbsp;показов медийной рекламы. Лидером считается компания, входящая в&nbsp;первую тройку
      рейтинга. Подробная информация на&nbsp;сайте
      <a class="CianBlockContent__a" href="https://info.cian.ru/new-tyumen" target="_blank"
        >https://info.cian.ru/new-tyumen</a
      >
    </p>
  </div>
</template>

<style lang="scss" >

.CianBlockContent__p {

  color: $c_text;
}

.CianBlockContent {
  max-width: 600px;
  background-color: $c_body;
  margin: 0 auto;
  padding: 0px 50px 50px 50px;
}

.CianBlockContent__a {
  @include setLinkExternal_primary();
}

@media screen and (max-width: 740px) {
  .CianBlockContent {
    padding: 0px 30px 30px 30px ;
  }
}
</style>