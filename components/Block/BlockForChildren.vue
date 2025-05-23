<script lang="ts" setup>
import gsap from 'gsap'

var BlockForChildren_node = ref<HTMLElement>()
const list: { infoItemH: string; infoItemTime: string; infoItemP: string }[] = [
  {
    infoItemH: 'Счастливое детство',
    infoItemTime: '8 минут',
    infoItemP: 'корпуса №8-9',
  },
  {
    infoItemH: 'Белка',
    infoItemTime: '5 минут',
    infoItemP: 'частный детский сад',
  },
  {
    infoItemH: 'Детский сад №166',
    infoItemTime: '16 минут',
    infoItemP: 'корпус №3',
  },
  {
    infoItemH: 'Умный Джо',
    infoItemTime: '7 минут',
    infoItemP: 'детский центр',
  },
  {
    infoItemH: 'Резиденция детства',
    infoItemTime: '19 минут',
    infoItemP: 'частный детский сад',
  },
]

onMounted(() => {
  gsap.fromTo(
    BlockForChildren_node.value!.querySelector('.BlockForChildren__content'),
    {
      scale: 0.8,
      borderRadius: '80px',
    },
    {
      scale: 1,
      borderRadius: '0px',

      scrollTrigger: {
        trigger: BlockForChildren_node.value,
        start: 'top bottom',
        end: 'top 35%',
        scrub: 1,
      },
    }
  )
})
</script>

<template>
  <section class="BlockForChildren" ref="BlockForChildren_node">
    <div class="BlockForChildren__content" id="for_children">
      <div class="BlockForChildren__textContent">
        <h2 class="BlockForChildren__h2">ТЕМ, КТО ПОМЛАДШЕ</h2>

        <p class="BlockForChildren__p">
          Детские сады должны быть рядом, чтобы можно было отводить и&nbsp;забирать ребенка пешком. Тут таких шесть
          штук.
        </p>

        <div class="BlockForChildren__info">
          <div class="BlockForChildren__infoItem" v-for="item of list" :key="item.infoItemH">
            <h5 class="BlockForChildren__infoItemH">{{ item.infoItemH }}</h5>
            <div class="BlockForChildren__infoItemTime">{{ item.infoItemTime }}</div>
            <div class="BlockForChildren__infoItemP">{{ item.infoItemP }}</div>
          </div>
        </div>
      </div>

      <picture class="BlockForChildren__picture">
        <source
          class="BlockForChildren__img"
          srcset="/img/BlockForChildren/desktop.png"
          width="1840"
          height="1039"
          media="(min-width: 1171px)"
        />
        <source
          class="BlockForChildren__img"
          srcset="/img/BlockForChildren/tablet.png"
          width="728"
          height="540"
          media="(min-width: 741px) and (max-width: 1171px)"
        />
        <img class="BlockForChildren__img" src="/img/BlockForChildren/mobile.png" width="360" height="360" />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
.BlockForChildren__content {
  @include setPaddingSides(var(--global_padding_content));
  position: relative;
  padding-top: 125px;
  padding-bottom: 125px;
  background-color: $c_body_hover;

  display: grid;
  grid-template-columns: max-content 1fr;
}

.BlockForChildren__textContent {
  margin: 25px 0 0 0;
}

.BlockForChildren__h2 {
  @include setFontStyle11();
  color: $c_text;

  max-width: 370px;
  margin: 0 0 40px 0;
}

.BlockForChildren__p {
  @include setFontStyle12();
  color: $c_text;

  max-width: 410px;
  margin: 0 0 80px 0;
}

.BlockForChildren__info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.BlockForChildren__infoItem {
  display: grid;
  grid-template-columns: 220px 100px;
}

.BlockForChildren__infoItemH {
  @include setFontStyle6();
  color: #525d63;
}

.BlockForChildren__infoItemTime {
  @include setFontStyle10();
  color: $c_primary;

  padding: 0 0 0 20px;

  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none"><path d="M10.5072 7C8.23407 6.16981 7.35112 4.35849 6.82512 3.92453C6.67483 3.77359 6.4494 3.67925 6.13004 3.60377C5.99854 3.56604 5.97975 3.32075 6.11125 3.24528C6.7124 2.98113 7.12569 2.39623 7.12569 1.69811C7.12569 0.773585 6.37426 0 5.43496 0C4.49566 0 3.74422 0.754717 3.74422 1.69811C3.74422 2.35849 4.11994 2.92453 4.66473 3.20755C4.81502 3.28302 4.7023 3.49057 4.5708 3.49057C3.68786 3.54717 2.80492 4.11321 2.57949 4.35849C1.54626 5.24528 0.700893 6.60377 0.0621699 8.09434C-0.0693319 8.41509 0.00581178 8.81132 0.306387 8.98113C0.682107 9.22641 1.0954 9.03773 1.24569 8.64151C1.79048 7.18868 2.99278 5.86792 3.72543 5.30189C3.78179 5.26415 3.87572 5.30189 3.87572 5.37736V8.83019C3.87572 9.56604 3.76301 10.3019 3.51879 10.9811C2.82371 12.9811 1.39597 14.5849 0.569391 15.5094C0.306387 15.8113 0.250029 16.2453 0.494247 16.566C0.813608 17 1.43355 17 1.77169 16.6226C2.80492 15.434 4.94652 13.0566 5.45374 10.5283C5.47253 10.434 5.58524 10.3962 5.6416 10.4528C6.1864 10.9057 7.98985 12.6226 8.74129 16.3019C8.81643 16.6792 9.19215 17 9.56787 17C10.1127 16.9811 10.4696 16.4528 10.3381 15.9434C9.9248 14.4717 9.06065 11.6415 7.33234 9.84906C7.05055 9.54717 6.86269 9.15094 6.86269 8.71698V6.24528C6.86269 6.18868 6.93783 6.16981 6.97541 6.20755C7.80199 7.15094 8.854 7.90566 10.0375 8.32076C10.4508 8.4717 10.9017 8.24528 10.9956 7.79245C11.0332 7.45283 10.8265 7.13208 10.5072 7Z" fill="%23586267"/></svg>');
  background-repeat: no-repeat;

  position: relative;
  top: -2px;
}

.BlockForChildren__infoItemP {
  @include setFontStyle10();
  color: #525d63;
}

.BlockForChildren__picture {
  margin: 0 -85px 0 0;
  align-self: center;
  justify-self: end;
}

.BlockForChildren__img {
  display: block;
  width: 100%;
  max-width: 956px;
  height: auto;
}

@media screen and (max-width: 1170px) {
  .BlockForChildren__content {
    grid-template-columns: 1fr;
    gap: 50px;

    padding-top: 100px;
    padding-bottom: 101px;
  }

  .BlockForChildren__p {
    margin: 0 0 59px 0;
  }

  .BlockForChildren__info {
    flex-wrap: wrap;
    gap: 30px 20px;
    height: 200px;
    width: max-content;
  }

  .BlockForChildren__picture {
    margin: 0;

    align-self: auto;
    justify-self: auto;
  }

  .BlockForChildren__img {
    @include setFullWidthInLCWP();
    max-width: none;
  }
}

@media screen and (max-width: 740px) {
  .BlockForChildren__content {
    padding-top: 50px;
    padding-bottom: 31px;
    gap: 20px;
  }

  .BlockForChildren__h2 {
    margin: 0 0 30px 0;
  }

  .BlockForChildren__p {
    max-width: 280px;
    margin: 0 0 46px 0;
  }

  .BlockForChildren__info {
    height: max-content;
    flex-wrap: nowrap;
    gap: 25px;
    width: 100%;
  }

  .BlockForChildren__infoItem {
    grid-template-columns: 200px 1fr;
  }

  .BlockForChildren__infoItemH {
    font-size: 14px;
  }

  .BlockForChildren__infoItemTime {
    font-size: 12px;
    text-align: right;

    justify-self: end;
    top: 0px;
    left: 0px;
    padding: 0 0 0 20px;
    width: 80px;

    background-position: 8px 0;
  }

  .BlockForChildren__infoItemP {
    font-size: 12px;
  }
}
</style>
