import type { INavGroup, INavLink, IHouse } from "@/types/FrontTypes";
import type { IResponse, IResponsePlans } from "@/types/ResponseType";

export var initHouses = (path: string, houses: Ref<IHouse[]>, links_plan_group: Ref<INavGroup[]>, plans_backend_data: IResponse) => {
  switch (path) {
    default:
      if (plans_backend_data.payload.plans) {
        houses.value = plans_backend_data.payload.plans
          .map((house) => ({
            house_name: house.house_data.title_for_site,
            anchor_link: house.house_data.slug,
            ready_date: house.house_data.ready_date,
            links: getLinks(house, "#"),
            plans_groups: getPlansGroups(house),
          }))
          .reverse();

        links_plan_group.value = getLinksGroupPlans(houses.value);
      }
  }
};

// ------------------------------------- HELPERS (start) -------------------------------------
var getLinks = (house: IResponsePlans, path_start: "/#" | "#"): INavLink[] =>
  house.plans.map((i) => ({
    href: path_start + house.house_data.slug.replace('.', '') + "-" + i.code,
    title: i.type,
  }));

var getPlansGroups = (house: IResponsePlans): IHouse["plans_groups"] =>
  house.plans.map((i) => ({
    link: `${house.house_data.slug.replace('.', '') + "-" + i.code}`,
    type: i.type,
    plans: i.items.sort((a, b) => +a.square - +b.square).filter((plan) => !plan.features.find((i) => i.title === "TR")),
  }));

var getLinksGroupPlans = (houses: IHouse[]): INavGroup[] =>
  houses.reduce((res: INavGroup[], house) => [...res, { title: house.house_name, children: house.links }], []);
// -------------------------------------- HELPERS (end) --------------------------------------
