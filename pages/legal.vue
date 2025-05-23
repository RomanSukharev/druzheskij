<template>
  <div class="legal">
    <h3 class="legal__h">Подробные условия программ ипотеки</h3>
    <div class="legal__chapter">
      <h4 class="legal__subH">Ипотека с господдержкой для семей с детьми + цифровые сервисы</h4>
      <span style="font-size: 18px">
        Ставка&nbsp;6% годовых действует с&nbsp;даты заключения кредитного договора при подаче
        онлайн-заявки или использовании сервисов электронной регистрации и&nbsp;безопасных расчетов
        или дистанционной сделки. Заемщики&nbsp;&mdash; граждане&nbsp;РФ, имеющие ребенка-гражданина
        РФ, рожденного с&nbsp;01.01.2018&nbsp;г.&nbsp;по&nbsp;31.12.2024&nbsp;г., либо имеющие двоих
        и&nbsp;более детей, которые не&nbsp;достигли 18&nbsp;лет на&nbsp;дату заключения кредитного
        договора, либо заемщики с&nbsp;ребенком-инвалидом, рожденным не&nbsp;позднее
        31.12.2024&nbsp;г. Кредит предоставляется на&nbsp;приобретение у&nbsp;юр. лица (в&nbsp;том
        числе управляющей компании инвестиционного фонда) или ИП&nbsp;&mdash; первого собственника
        готового жилого помещения или на&nbsp;приобретение у&nbsp;юр. лица (за&nbsp;исключением
        управляющей компании инвестиционного фонда) жилого помещения, находящегося на&nbsp;этапе
        строительства, или на&nbsp;приобретение на&nbsp;вторичном рынке у&nbsp;физ. лица
        или&nbsp;юр. лица готового жилого помещения (в&nbsp;том числе с&nbsp;земельным участком),
        расположенных в&nbsp;сельских населенных пунктах на&nbsp;территории ДФО , или
        на&nbsp;приобретение готового жилья на&nbsp;вторичном рынке заемщиками, имеющими
        ребенка инвалида, у&nbsp;любого продавца&nbsp;&mdash; в&nbsp;случае расположения квартиры
        в&nbsp;субъекте&nbsp;РФ, на&nbsp;территории которого отсутствуют строящиеся многоквартирные
        дома. Сумма кредита для Москвы и&nbsp;области, Санкт-Петербурга и&nbsp;области
        до&nbsp;6&nbsp;млн руб., для остальных регионов&nbsp;&mdash; до&nbsp;6&nbsp;млн руб. Первый
        взнос&nbsp;&mdash; от&nbsp;30.1%. Валюта кредита&nbsp;&mdash; рубли. Срок кредита&nbsp;&mdash;
        от&nbsp;1&nbsp;до&nbsp;30&nbsp;лет. Условия действительны
        с&nbsp;20.09.2023&nbsp;г.&nbsp;до&nbsp;даты изменения банком условий кредитования. Банк ВТБ
        (ПАО) оказывает исключительно банковские услуги. Банк вправе отказать в&nbsp;предоставлении
        кредита без объяснения причин. Банк предоставляет кредит в&nbsp;случае, если заемщик
        (созаемщик/поручитель, при наличии) соответствует требованиям госпрограммы и&nbsp;Банка
        и&nbsp;предоставил полный пакет необходимых документов. Банк ВТБ (ПАО). Генеральная лицензия
        Банка России &#8470;&nbsp;1000.
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.legal {
  max-width: 1140px;

  font-family: "Inter";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: var(--text-primary, #171a21);
  // padding: 20px;
  @include setPaddingSides(var(--global_padding_content), 0);
  span {
    font-size: 16px;
  }

  a {
    color: $c_negative;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.01em;
    font-weight: 500;

    &:hover {
      text-decoration: none;
    }
  }
}

.legal__h {
  color: var(--text-primary, #171a21);
  /* десктоп/Н2 */
  font-family: "NeutralFace";
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 65px */
  text-transform: uppercase;
  // max-width: 70%;
  margin: 80px 0 30px 0;
}

.legal__subH {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  max-width: 80%;
  font-size: 25px;
  line-height: 130%;
  margin: 0 0 30px 0;
}

.legal__chapter {
  margin: 0 0 80px 0;
}

@media screen and (max-width: 1170px) {
  .legal {
    @include setPaddingSides(var(--global_padding_content));
  }
}

// @include setPaddingSides(var(--global_padding_content), 0);

@media screen and (max-width: 740px) {
  .legal {
    font-size: 14px;
  }

  .legal__h {
    width: 100%;
    font-size: 50px;
  }

  .legal__subH {
    width: 100%;
    font-size: 26px;
  }
}
</style>
