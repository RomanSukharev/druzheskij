import initDataBlockPromotionSever from "@/utils/initPageData/initDataBlockPromotionSever";
import initDataBlockPromotionPromo from "@/utils/initPageData/initDataBlockPromotionPromo";

import type {
  IResponse,
  IResponseSoldPlanItems,
  IResponseObjectsDynamic,
  IResponsePlansPlansItems,
} from "@/types/ResponseType";
import type { INavLink, INavGroup, IHouse } from "@/types/FrontTypes";
import type { IBlockPromotionSever } from "components/Block/Promotion/Sever/BlockPromotionSever.vue";
import type { IBlockPromotionPromo } from "components/Block/Promotion/Sever/IBlockPromotionPromo.vue";



export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path === from.path && process.client) return
  
  var is_loading = useState<boolean>("is_loading", () => false); //prettier-ignore

  var data = useState<IResponse>("data");
  // var infrastructure = useState<InfrastructureType>("infrastructure", () => null); //prettier-ignore
  var dynamics = useState<IResponseObjectsDynamic[]>("dynamics", () => []); //prettier-ignore
  // var promotions = useState<IResponseObjectsPromotion[]>("promotions", () => []); //prettier-ignore
  var houses = useState<IHouse[]>("houses", () => []); //prettier-ignore
  var links_plan_group = useState<INavGroup[]>("links_plan_group", () => []); //prettier-ignore
  var links_header = useState<INavLink[]>("links_header", () => []); //prettier-ignore
  var links_header_mobile = useState<INavGroup[]>("links_header_mobile", () => []); //prettier-ignore
  var link_logo_header = useState("link_logo_header", () => "/"); //prettier-ignore
  var plans_sold = useState<IResponseSoldPlanItems[]>("plans_sold", () => []); //prettier-ignore
  var terrace_plans = useState<IResponsePlansPlansItems[]>("terrace_plans", () => []); //prettier-ignore
  var data_block_promotion_sever = useState<IBlockPromotionSever>("data_block_promotion_sever", () => ({ house_list: [], min_payment: '' }));
  var data_block_promotion_promo = useState<IBlockPromotionPromo>("data_block_promotion_promo", () => ({ house_list: []}));
  try {
    is_loading.value = true;
    const path = to.path.toLocaleLowerCase()

    switch (path) {
      default:
        getIsNeedFetchData(path, from.path) && (data.value = (await $fetch("/api/data")) as IResponse) //prettier-ignore
        initHouses(path, houses, links_plan_group, data.value); //prettier-ignore
        initDataBlockPromotionSever(path, data_block_promotion_sever, links_plan_group, data.value)
        initDataBlockPromotionPromo(path, data_block_promotion_promo, links_plan_group, data.value)
        initTerracePlans(path, terrace_plans, data.value.payload.plans); //prettier-ignore
        initLinksHeader(path, links_header, link_logo_header, links_header_mobile, links_plan_group, houses); //prettier-ignore
        // initInfrastructure(to.path, infrastructure, data.value.payload.objects.map_objects, data.value.payload.objects.infrastructure); //prettier-ignore
        initDynamics(path, dynamics, data.value.payload.objects[0].dynamics); //prettier-ignore
        // initPromotions(to.path, promotions, links_header, data.value.payload.objects.promotion); //prettier-ignore
        initPlansSold(path, plans_sold, data.value.payload.sold); //prettier-ignore
        break;
    }
  } catch (error) {
    throw showError({ statusCode: 500 });
  } finally {
    is_loading.value = false;
  }
});

// ---------------------------------------------- HELPERS (start) ----------------------------------------------
//нужно ли запросить данные, чтобы заполнить data.value
var getIsNeedFetchData = (to: string, from: string) => {
  //объявляем какие страницы какой endpoint использую для data.value
  var endpoints = {
    default: ["/", "/legal", "/policy"],
  };

  var endpoint_needed = Object.entries(endpoints).find((i) => i[1].includes(to))?.[0] || "default"; //endpoint, с которого нужны данные для data.value
  var endpoint_used = Object.entries(endpoints).find((i) => i[1].includes(from))?.[0] || "default"; //endpoint, который использовался до редиректа

  return process.server || endpoint_used !== endpoint_needed; //prettier-ignore
};
// ---------------------------------------------- HELPERS (end) ----------------------------------------------
