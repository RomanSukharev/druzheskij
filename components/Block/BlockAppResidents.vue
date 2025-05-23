<template>
  <section class="BlockAppResidents" id="smart_house">
    <div class="BlockAppResidents__textContent">
      <h2 class="BlockAppResidents__h2">ПРИЛОЖЕНИЕ ДЛЯ ЖИТЕЛЕЙ</h2>

      <p class="BlockAppResidents__p1">
        Оно помогает решать бытовые вопросы и&nbsp;контактировать с&nbsp;управляющей компанией.
      </p>

      <p class="BlockAppResidents__p2">
        За&nbsp;него не&nbsp;нужно платить&nbsp;&mdash; просто установить и&nbsp;зарегистрироваться. С&nbsp;этим поможем
        на&nbsp;выдаче ключей.
      </p>

      <div class="BlockAppResidents__info">
        <div class="BlockAppResidents__infoItem">
          <div class="BlockAppResidents__infoItemIcon1"></div>
          <p class="BlockAppResidents__infoItemP">Оплата счетов за квартиру</p>
        </div>

        <div class="BlockAppResidents__infoItem">
          <div class="BlockAppResidents__infoItemIcon2"></div>
          <p class="BlockAppResidents__infoItemP">Выезд мастера на дом</p>
        </div>

        <div class="BlockAppResidents__infoItem">
          <div class="BlockAppResidents__infoItemIcon3"></div>
          <p class="BlockAppResidents__infoItemP">Передача показаний счётчиков</p>
        </div>

        <div class="BlockAppResidents__infoItem">
          <div class="BlockAppResidents__infoItemIcon4"></div>
          <p class="BlockAppResidents__infoItemP">Удобный чат с&nbsp;управляющей компанией</p>
        </div>
      </div>
    </div>

    <picture class="BlockAppResidents__picture">
      <source
        class="BlockAppResidents__img"
        srcset="/img/BlockAppResidents/desktop.png"
        width="556"
        height="689"
        media="(min-width: 741px)"
      />

      <img class="BlockAppResidents__img" src="/img/BlockAppResidents/mobile.png" width="999" height="528" />
    </picture>
  </section>
</template>

<style lang="scss">
.BlockAppResidents {
  position: relative;
  @include setPaddingSides(var(--global_padding_content));
  padding-top: 106px;
  padding-bottom: 106px;

  display: flex;
  gap: 26%;
  position: relative;
}

.BlockAppResidents__textContent {
  flex-shrink: 0;
}

.BlockAppResidents__h2 {
  @include setFontStyle11();
  color: $c_primary;

  max-width: 400px;
  margin: 44px 0 40px 0;
}

.BlockAppResidents__p1 {
  @include setFontStyle12();
  color: $c_text;

  max-width: 446px;
  margin: 0 0 22px 0;
}

.BlockAppResidents__p2 {
  @include setFontStyle12();
  color: $c_text;

  max-width: 477px;
  margin: 0 0 192px 0;
}

.BlockAppResidents__info {
  display: grid;
  grid-template-columns: 90px 94px 126px 93px;
  gap: 20px;
}

.BlockAppResidents__infoItemP {
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
  color: $c_text;
}

.BlockAppResidents__infoItemIcon1 {
  height: 42.4px;

  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.81282 0H16.7597C18.2833 0 19.5725 1.29459 19.5725 2.82457V8.47371H17.5801V4.58992H1.99241V26.4803H17.6973V23.5381H19.6897V31.0703C19.6897 32.6002 18.4005 33.8948 16.8769 33.8948H2.81282C1.28921 33.8948 0 32.6002 0 31.0703V2.82457C0 1.29459 1.28921 0 2.81282 0ZM26.253 10.2391H9.14167C8.79006 10.2391 8.43846 10.3568 8.32126 10.5921C8.08686 10.7098 7.96966 11.0629 7.96966 11.416V13.299H27.425V11.416C27.425 11.0629 27.3078 10.8275 27.0734 10.5921C26.839 10.3568 26.4874 10.2391 26.253 10.2391ZM7.96966 15.8882V20.5958C7.96966 20.9489 8.08686 21.1843 8.32126 21.4196C8.55566 21.655 8.79006 21.7727 9.14167 21.7727H26.253C26.6046 21.7727 26.839 21.655 27.0734 21.4196C27.3078 21.1843 27.425 20.9489 27.425 20.5958V15.8882H7.96966Z" fill="%23ED6B5B"/></svg>');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 27.425px 33.895px;
}

.BlockAppResidents__infoItemIcon2 {
  height: 42.4px;

  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.3892 1.95705L29.3192 4.89867C28.4988 5.72233 28.9676 6.54598 29.5536 7.25197C30.2568 7.95796 31.0772 8.42862 31.8976 7.4873L32.9524 8.54629C33.5384 9.13462 33.5384 9.95827 32.9524 10.4289L29.6708 13.7236C29.0848 14.3119 28.2644 14.3119 27.7956 13.7236L26.7408 12.6646C27.5612 11.8409 27.2096 11.0173 26.5064 10.3113C25.1 8.89929 24.3968 9.72294 23.342 10.7819L17.9507 16.3122L23.2248 21.6071C24.9828 21.0188 26.858 21.3718 28.2644 22.7838C29.6708 24.1957 30.1396 26.6667 29.202 28.4317L26.1548 25.3724C25.8032 25.0194 25.1 25.0194 24.7484 25.3724L23.8108 26.3137C23.4592 26.6667 23.4592 27.3727 23.8108 27.7257L26.858 30.785C24.9828 31.6086 22.756 31.2556 21.3496 29.726C19.9431 28.314 19.5915 26.3137 20.1775 24.6664L15.0207 19.4891L4.35543 30.5497C3.65222 31.2556 0.136199 27.7257 0.839404 27.0197L20.5291 7.8403C21.5839 6.78131 22.4044 5.60466 20.9979 4.31035C19.4743 2.7807 17.3647 2.89837 15.8411 3.01603L15.3723 2.31004C21.2323 -2.04357 25.2172 0.898061 26.3892 1.95705ZM8.10585 12.7822L6.46504 11.1349C4.70703 11.7232 2.83182 11.3703 1.42541 9.95827C0.0189977 8.54629 -0.449809 6.07532 0.487797 4.31035L3.53502 7.36964C3.88662 7.72263 4.58983 7.72263 4.94143 7.36964L5.87903 6.42832C6.23064 6.07532 6.23064 5.36933 5.87903 5.01634L2.83181 1.95705C4.70703 1.13339 6.93384 1.48639 8.34025 3.01603C9.74666 4.42801 10.0983 6.42832 9.51226 8.07563L13.4971 12.0762C13.2627 12.3116 12.9111 12.6646 12.6767 12.8999C11.5047 14.0765 9.39506 14.0765 8.10585 12.7822Z" fill="%23ED6B5B"/></svg>');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 33.392px 31.217px;
}

.BlockAppResidents__infoItemIcon3 {
  height: 42.4px;

  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="39" height="33" viewBox="0 0 39 33" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.8598 18.553C35.2114 18.7878 35.4458 19.2574 35.3286 19.7271V24.0713H36.9695C37.4383 24.0713 37.9071 24.3061 38.0243 24.7757C38.2587 25.2454 38.1415 25.715 37.9071 26.0673L34.391 31.703C33.9222 32.29 33.219 32.4074 32.633 31.9378C32.2814 31.703 32.1642 31.3507 32.1642 30.8811V26.5369H30.5234C30.0546 26.5369 29.5858 26.3021 29.4686 25.8324C29.2342 25.3628 29.3514 24.8932 29.5858 24.5409L33.219 18.7878C33.5706 18.2007 34.2738 18.0833 34.8598 18.553Z" fill="%23ED6B5B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.6105 8.8058C38.6105 11.5063 36.5009 13.6196 33.8052 13.6196C31.1096 13.6196 29 11.5063 29 8.8058C29 5.98795 31.93 2.11339 33.3364 0.234821C33.4536 0.117411 33.688 0 33.8052 0C33.9224 0 34.1568 0.117411 34.274 0.234821C35.6804 2.11339 38.6105 6.10536 38.6105 8.8058Z" fill="%23ED6B5B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3061 3.75977C19.1037 3.75977 24.6122 9.27807 24.6122 16.0879C24.6122 22.8977 19.1037 28.416 12.3061 28.416C5.50844 28.416 0 22.8977 0 16.0879C0 9.27807 5.50844 3.75977 12.3061 3.75977ZM16.6425 9.27807C17.3457 8.57361 18.4005 8.57361 18.9865 9.27807C19.6898 9.98253 19.6898 11.0392 18.9865 11.6263L15.0017 15.6182C15.0017 15.7357 15.0017 15.9705 15.0017 16.0879C15.0017 17.7316 13.7125 19.0232 12.0717 19.0232C10.4309 19.0232 9.14167 17.7316 9.14167 16.0879C9.14167 14.4441 10.4309 13.1526 12.0717 13.1526C12.1889 13.1526 12.4233 13.1526 12.5405 13.1526C12.7749 13.1526 16.6425 9.27807 16.6425 9.27807ZM5.39125 16.0879C5.39125 16.6749 4.92244 17.262 4.21924 17.262C3.63323 17.262 3.04723 16.7924 3.04723 16.0879C3.04723 13.5049 4.10204 11.2741 5.74285 9.51289C7.38366 7.86914 9.72767 6.81244 12.3061 6.81244C12.8921 6.81244 13.4781 7.28209 13.4781 7.98655C13.4781 8.57361 13.0093 9.16066 12.3061 9.16066C10.4309 9.16066 8.67286 9.98253 7.38366 11.1566C6.09445 12.4482 5.39125 14.0919 5.39125 16.0879Z" fill="%23ED6B5B"/></svg>');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 38.61px 32.228px;
}

.BlockAppResidents__infoItemIcon4 {
  height: 42.4px;

  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="33" height="29" viewBox="0 0 33 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2513 19.9427L7.50085 22.5235C7.26644 22.6408 7.14924 22.6408 6.91484 22.5235C6.68044 22.4062 6.56325 22.2889 6.56325 22.0543V18.8869H4.33641C1.87519 18.8869 0 16.8926 0 14.5464V4.34047C0 1.87696 1.99239 0 4.33641 0H22.3854C24.8466 0 26.7218 1.99427 26.7218 4.34047V14.5464C26.7218 17.01 24.7294 18.8869 22.3854 18.8869H14.5329C13.3609 18.8869 12.3061 19.2388 11.2513 19.9427ZM14.0641 24.8697C13.3609 24.8697 12.7749 24.2832 12.7749 23.5793C12.7749 22.8755 13.3609 22.2889 14.0641 22.2889H16.0565C16.7597 22.2889 17.4629 22.4062 18.1661 22.6408C18.8693 22.8755 19.4553 23.1101 20.0413 23.5793L22.737 25.4563V22.4062H26.9562C27.7766 22.4062 28.597 22.0543 29.183 21.4677C29.769 20.8812 30.1206 20.06 30.1206 19.2388V10.4406C30.1206 9.73673 30.7066 9.15018 31.4098 9.15018C32.113 9.15018 32.699 9.73673 32.699 10.4406V19.2388C32.699 20.7639 32.113 22.1716 31.0582 23.2274C30.0034 24.2832 28.597 24.8697 27.0734 24.8697H25.4326V26.7467C25.4326 27.0986 25.3154 27.4505 25.1982 27.6852C25.081 27.9198 24.7294 28.1544 24.495 28.389C24.1434 28.5063 23.909 28.6236 23.5574 28.6236C23.2058 28.6236 22.8541 28.5063 22.6197 28.2717L18.8693 25.6909C18.5177 25.4563 18.0489 25.2217 17.5801 25.1043C17.1113 24.987 16.7597 24.8697 16.1737 24.8697H14.0641ZM7.14926 7.74246C8.08686 7.74246 8.79006 8.44632 8.79006 9.3848C8.79006 10.3233 8.08686 11.0271 7.14926 11.0271C6.21165 11.0271 5.50842 10.3233 5.50842 9.3848C5.39122 8.44632 6.21165 7.74246 7.14926 7.74246ZM13.3609 7.74246C14.2985 7.74246 15.0017 8.44632 15.0017 9.3848C15.0017 10.3233 14.2985 11.0271 13.3609 11.0271C12.4233 11.0271 11.7201 10.3233 11.7201 9.3848C11.7201 8.44632 12.5405 7.74246 13.3609 7.74246ZM19.6897 7.74246C20.6273 7.74246 21.3305 8.44632 21.3305 9.3848C21.3305 10.3233 20.6273 11.0271 19.6897 11.0271C18.7521 11.0271 18.0489 10.3233 18.0489 9.3848C18.0489 8.44632 18.7521 7.74246 19.6897 7.74246Z" fill="%23ED6B5B"/></svg>');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 32.699px 28.624px;
}

.BlockAppResidents__img {
  display: block;
}

@media screen and (max-width: 1600px) {
  .BlockAppResidents {
    gap: 0;
    justify-content: space-between;
  }
}

@media screen and (max-width: 1300px) {
  .BlockAppResidents {
    gap: 40px;
  }

  .BlockAppResidents__img {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 1170px) {
  .BlockAppResidents {
    padding-top: 100px;
    padding-bottom: 100px;

    flex-direction: column;
  }

  .BlockAppResidents__h2 {
    max-width: 317px;
    margin: 0 0 40px 0;
  }

  .BlockAppResidents__p2 {
    margin: 0 0 60px 0;
  }

  .BlockAppResidents__picture {
    align-self: center;
  }

  .BlockAppResidents__img {
    max-width: 555px;
    margin: 40px 0 0 0;
  }
}

@media screen and (max-width: 740px) {
  .BlockAppResidents {
    padding-top: 50px;
    padding-bottom: 0px;
  }

  .BlockAppResidents__h2 {
    margin: 0 0 30px 0;
  }

  .BlockAppResidents__p1 {
    max-width: 218px;
  }

  .BlockAppResidents__p2 {
    max-width: 262px;
    margin: 0 0 37px 0;
  }

  .BlockAppResidents__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .BlockAppResidents__infoItem {
    display: grid;
    grid-template-columns: 38px 1fr;
    grid-template-rows: 30px;

    &:last-child {
      margin-top: -3px;
    }
  }

  .BlockAppResidents__infoItemP {
    align-self: center;
  }

  .BlockAppResidents__infoItemIcon1 {
    background-position: 6px 5px;
    background-size: 17.905px 22.037px;
  }

  .BlockAppResidents__infoItemIcon2 {
    background-position: 3px 5px;
    background-size: 21.801px 20.301px;
  }

  .BlockAppResidents__infoItemIcon3 {
    background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.1318 11.1453C24.3313 11.263 24.4643 11.4984 24.3978 11.7338V13.9115H25.3289C25.595 13.9115 25.861 14.0292 25.9275 14.2646C26.0605 14.5 25.994 14.7354 25.861 14.912L23.8658 17.737C23.5998 18.0313 23.2007 18.0902 22.8682 17.8547C22.6687 17.737 22.6022 17.5605 22.6022 17.325V15.1474H21.6711C21.4051 15.1474 21.139 15.0297 21.0725 14.7943C20.9395 14.5589 21.006 14.3234 21.139 14.1469L23.2007 11.263C23.4002 10.9687 23.7993 10.9098 24.1318 11.1453Z" fill="%23ED6B5B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26 5.52586C26 6.91379 24.9024 8 23.5 8C22.0976 8 21 6.91379 21 5.52586C21 4.07759 22.5244 2.08621 23.2561 1.12069C23.3171 1.06034 23.439 1 23.5 1C23.561 1 23.6829 1.06034 23.7439 1.12069C24.4756 2.08621 26 4.13793 26 5.52586Z" fill="%23ED6B5B"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 0C14.7476 0 19 4.25238 19 9.5C19 14.7476 14.7476 19 9.5 19C4.25238 19 0 14.7476 0 9.5C0 4.25238 4.25238 0 9.5 0ZM12.8476 4.25238C13.3905 3.70952 14.2048 3.70952 14.6572 4.25238C15.2 4.79524 15.2 5.60952 14.6572 6.06191L11.581 9.1381C11.581 9.22857 11.581 9.40952 11.581 9.5C11.581 10.7667 10.5857 11.7619 9.31905 11.7619C8.05238 11.7619 7.05715 10.7667 7.05715 9.5C7.05715 8.23333 8.05238 7.23809 9.31905 7.23809C9.40953 7.23809 9.59049 7.23809 9.68096 7.23809C9.86192 7.23809 12.8476 4.25238 12.8476 4.25238ZM4.16191 9.5C4.16191 9.95238 3.80001 10.4048 3.25715 10.4048C2.80477 10.4048 2.35239 10.0429 2.35239 9.5C2.35239 7.50952 3.16667 5.79048 4.43334 4.43333C5.70001 3.16667 7.50952 2.35238 9.5 2.35238C9.95238 2.35238 10.4048 2.71429 10.4048 3.25714C10.4048 3.70952 10.0429 4.1619 9.5 4.1619C8.05238 4.1619 6.69524 4.79524 5.7 5.7C4.70476 6.69524 4.16191 7.9619 4.16191 9.5Z" fill="%23ED6B5B"/></svg>');
    background-position: 0px 5px;
    background-size: 26px 19px;
  }

  .BlockAppResidents__infoItemIcon4 {
    background-position: 3px 6px;
    background-size: 21.348px 18.67px;
  }

  .BlockAppResidents__picture {
    width: 100%;
  }

  .BlockAppResidents__img {
    margin: 15px auto 0 auto;
    width: 100%;
    height: auto;
  }
}
</style>
