<script lang="ts" setup>
import { initYaMap } from "@/composables/initYaMap";
import {debounce} from "perfect-debounce";

var has_shift_key_handler = false;

var node_ref = ref<HTMLDivElement>()

var yamap_options = {center: [57.149237, 65.547393], zoom: 16, controls: [] };

var ya_map: any

const init = () => {
  ya_map = new ymaps.Map("sale_office_map", yamap_options);
  ya_map.behaviors.disable("scrollZoom");
  window.innerWidth >= 740 && ya_map.controls.add('zoomControl', {position: {right: '20px', top: '130px'}}); //prettier-ignore

  var placemark_main = new ymaps.Placemark(
      [57.148537, 65.550493],
      {
        balloonContent: `<div style="padding: 0px 10px 10px 10px" >г. Тюмень, ул. Новгородская, 10 Офис продаж ПСК Дом девелопмент</div>`,
        iconCaption: "Офис продаж ПСК Дом девелопмент",
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '/img/druzh_marker.png',
        iconImageSize: [66, 103],
        iconImageOffset: [-33, -90]
      }
  );
  ya_map.geoObjects.add(placemark_main);

  //------------------------- ОБРАБОТЧИКИ НА SHIFT (start) -------------------------
  if (!has_shift_key_handler) {
    has_shift_key_handler = true;

    document.addEventListener("keydown", (event) => {
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        ya_map.behaviors.enable("scrollZoom");
      }
    });

    document.addEventListener("keyup", (event) => {
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        ya_map.behaviors.disable("scrollZoom");
      }
    });
  }
  //------------------------- ОБРАБОТЧИКИ НА SHIFT (end) -------------------------
}

const handleResize = debounce(() => {
  if (window.innerWidth <= 740) {
    yamap_options.center = [57.148537, 65.550493]
  } else {
    yamap_options.center = [57.149237, 65.545593]
  }
}, 200)


onMounted(async () => {
  var is_ya_map_init = await initYaMap();
  if (is_ya_map_init) {
    ymaps.ready(init);
    await handleResize()
    window.addEventListener('resize', handleResize)
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="node_ref" class="SaleOfficeMap">
    <div
      id="sale_office_map"
      style="position: absolute; inset: 0;"
    ></div>

    <div class="SaleOfficeMap__coverHint">
      <div class="SaleOfficeMap__desktopHint">
        <h5 class="SaleOfficeMap__desktopHintText">
          Зажмите SHIFT <br />
          для изменения масштаба карты
        </h5>
        <img class="SaleOfficeMap__desktopHintIcon" :src="'icons/icon_keyboard.svg'" alt="" />
      </div>

      <div class="SaleOfficeMap__mobileHint"></div>
    </div>
  </div>
</template>

<style lang="scss">
.SaleOfficeMap {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.SaleOfficeMap__btnCloseFullSize {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 5px;
  border-radius: 50%;

  z-index: 10001;
}

.SaleOfficeMap:hover .SaleOfficeMap__coverHint {
  opacity: 0;
}

.SaleOfficeMap__coverHint {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
}

.SaleOfficeMap__desktopHint {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.SaleOfficeMap__desktopHintText {
  text-align: center;
  color: $c_body;
}

.SaleOfficeMap__mobileHint {
  display: none;
}

.SaleOfficeMap__btnOpenMap {
  padding: 10px;
  border-radius: 10px;
}

.SaleOfficeMap__Placemark {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: $c_primary;
  border: 2px solid $c_body;
  transform: scale(1.2);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    filter: invert(1);
  }
}

.ymaps-2-1-79-balloon__content {
  padding: 0 !important;
  margin: 0 !important;
}

.SaleOfficeMap__cardTitle {
  font-family: "LabGrotesque", Arial, sans-serif !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 14px !important;
  line-height: 17px !important;
  color: $c_text !important;
  padding: 0 30px 5px 10px !important;

  border-bottom: 1px solid rgb(195, 195, 195);
}

.SaleOfficeMap__ballonContent {
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.SaleOfficeMap__ballonContentItem {
  display: flex;
  gap: 2px;

  p {
    font-family: "LabGrotesque", Arial, sans-serif !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: $c_text !important;
  }

  img {
    width: 18px;
    height: 18px;
  }
}

@media screen and (max-width: 1650px) {
  .SaleOfficeMap__coverHint {
    justify-content: flex-end;
  }
  .SaleOfficeMap__desktopHint {
    margin-right: 15%;
  }
}

@media screen and (max-width: 1170px) {
  .SaleOfficeMap__coverHint {
    display: none;
  }

  .SaleOfficeMap:hover .SaleOfficeMap__coverHint {
    opacity: 1;
  }

  .SaleOfficeMap__desktopHint {
    display: none;
  }

  .SaleOfficeMap__mobileHint {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 740px) {
  .ymaps-2-1-79-image {
    transform: scale(0.7);
  }
}
</style>
