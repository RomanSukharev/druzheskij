import type { IResponseObjectsPromotion } from "@/types/ResponseType";
import { INavLink } from "~/types/FrontTypes";

export var initPromotions = (
  path: string,
  promotions: Ref<IResponseObjectsPromotion[]>,
  links_header: Ref<INavLink[]>,
  promotions_backend_data?: IResponseObjectsPromotion[]
) => {
  var links: INavLink[] = [];

  switch (path) {
    case "/":
      if (promotions_backend_data) {
        promotions.value = promotions_backend_data.filter((i) => i.elements.length);

        links = promotions.value.map((i) => ({
          href: `#${i.anchor_link}`,
          title: i.name_category,
          special: true,
        }));
      }
      break;

    default:
      if (promotions_backend_data) {
        promotions.value = promotions_backend_data.filter((i) => i.elements.length);

        links = promotions.value.map((i) => ({
          href: `/#${i.anchor_link}`,
          title: i.name_category,
          special: true,
        }));
      }
  }

  links[0] && links[0].title.length <= 13 && links_header.value.push(links[0]);
};
