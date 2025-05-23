import { IResponsePlansPlansItems } from "./ResponseType";

export interface INavLink {
  href: string;
  title: string;
  special?: boolean;
}

export interface INavGroup {
  title: string;
  children: INavLink[];
}

export interface IHouse {
  house_name: string;
  ready_date: string;
  anchor_link: string;
  links: INavLink[]; //ссылки на plans_groups (который в header в каталоге планировок)
  plans_groups: IPlansGroups[];
}

export interface IPlansGroups {
  type: string;
  link: string;
  plans: IResponsePlansPlansItems[];
}
