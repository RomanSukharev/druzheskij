import { INavLink, INavGroup, IHouse } from "@/types/FrontTypes";

export var initLinksHeader = (
  path: string,
  links_header: Ref<INavLink[]>,
  link_logo_header: Ref<string>,
  links_header_mobile: Ref<INavGroup[]>,
  links_plan_group: Ref<INavGroup[]>,
  houses: Ref<IHouse[]>
) => {
  var links_plan_group_header: INavGroup[] = links_plan_group.value.map((i) => ({
    ...i,
    title: `Квартиры/${i.title}`,
  }));

  var desktop_links = [
    { href: "#infrastructure", title: "Инфраструктура" },
    { href: "#house_list", title: "Планировки" },
    { href: "#singl-villa", title: "Сингл-Вилла" },
    { href: "#house", title: "Дом 1.1" },
    { href: "#about_company", title: "О застройщике" },
  ];

  var mobile_links = [
    {
      title: "О проекте",
      children: [
        { href: "#singl-villa", title: "Сингл-Вилла" },
        { href: "#house", title: "Дом 1.1" },
        { href: "#courtyards", title: "Дворы" },
        { href: "#paradnie", title: "Парадные" },
      ],
    },
    ...links_plan_group_header,
    {
      title: "Инфраструктура",
      children: [
        { href: "#malls", title: "Торговые центры" },
        { href: "#park_nearby", title: "Парк рядом" },
        { href: "#transport_interchange", title: "Транспортная развязка" },
        { href: "#education_and_leisure", title: "Образование и досуг" },
      ],
    },
    {
      title: "",
      children: [
        { href: "#clear_finishing", title: "Предчистовая отделка" },
        { href: "#smart_house", title: "Умный дом" },
        { href: "#dynamic", title: "Динамика строительства" },
        { href: "#about_company", title: "О застройщике" },
        { href: "#office_location", title: "Офис продаж" },
      ],
    },
  ];

  switch (path) {
    case "/": {
      link_logo_header.value = "#main";

      links_header.value = desktop_links;
      links_header_mobile.value = mobile_links;
      break;
    }

    case "/sever": {
      link_logo_header.value = "#main";

      links_header.value = [
        { href: "#plans", title: "Планировки" },
        { href: "#stocks", title: "Акции" },
      ];
      links_header_mobile.value = [...links_plan_group_header];

      break;
    }

    case "/promo": {
      link_logo_header.value = "#main";

      links_header.value = [
        { href: "#house_list", title: "Планировки" },
        { href: "#stocks", title: "Акции" },
      ];
      links_header_mobile.value = [
        {
          title: "",
          children: [
            { href: "#house_list", title: "Планировки" },
            { href: "#stocks", title: "Акции" },
          ],
        },
      ];

      break;
    }

    default: {
      link_logo_header.value = "/";

      links_header.value = getDesktopLinksToMainPage(desktop_links);
      links_header_mobile.value = getMobileLinksToMainPage(mobile_links);
    }
  }
};

var getDesktopLinksToMainPage = (links: INavLink[]): INavLink[] =>
  links.map((link) => ({ title: link.title, href: `/${link.href}` }));

var getMobileLinksToMainPage = (links: INavGroup[]): INavGroup[] =>
  links.map((link_group) => ({
    title: link_group.title,
    children: link_group.children.map((link) => ({ title: link.title, href: `/${link.href}` })),
  }));
