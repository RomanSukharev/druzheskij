// ------------------------------ Некоевые повторяющиеся типы (start) ---------------------------
export type ResponseMediaType = {
  id: number;
  name: string;
  type: string;
  file: string;
};

export type ResponseImageType = {
  name: string;
  path: string;
  previews: {
    extra_small: string;
    small: string;
    medium: string;
    large: string;
  };
};

export type ResponsePaymentType = {
  min_payment: string;
  sub_paument: string;
  inital_fee: string;
  mortgage: ResponseMortgageType;
};

export type ResponseMortgageType = {
  title: string;
  mortgage_uid: string;
  sub_period: number;
  base_rate: string | number | null;
  sub_rate: string | number | null;
  mortgage_term: number;
  mortgage_type: string;
  mortgage_program: string;
  mortgage_init_fee: number;
};
// ------------------------------ Некоевые повторяющиеся типы (end) ----------------------------

// ------------------------ Поехали описывать основной ответ от сервера ------------------------
export interface IResponse {
  payload: {
    objects: IResponseObjects[];
    plans: IResponsePlans[];
    sold: IResponseSold[];
  };
}

export interface IResponseObjects {
  name: string;
  title: string;
  image_url: unknown;
  logo_url: unknown;
  plan_url: unknown;
  address: unknown;
  geotag: unknown;
  class_type: string;
  houses_quantity: number;
  construction_material: unknown;
  total_square: string;
  common_square: string;
  inhabitants: number;
  infrastructure: IResponseObjectsInfrastructure[];
  dynamics: IResponseObjectsDynamic[];
  houses: IResponseObjectsHouse[];
  promotion: IResponseObjectsPromotion[];
  map_objects: [number, number];
}

export interface IResponseObjectsInfrastructure {
  name_category: string;
  image_object: ResponseMediaType[];
  elements: IResponseObjectsInfrastructureElement[];
}

export interface IResponseObjectsInfrastructureElement {
  name: string;
  map_mark: [number, number];
  car_time: number;
  public_transport_time: number;
  walking_time: number | null;
  cycling_time: number | null;
  scooter_time: number | null;
  taxi_cost: number | null;
  map_icon: ResponseMediaType[];
}

export interface IResponseObjectsDynamic {
  name: string;
  date: Date;
  publication_date: Date;
  link_video: string;
  preview: ResponseMediaType[];
}

export interface IResponseObjectsHouse {
  name: string;
  ready_date: string;
  title_for_site: string;
  plan_url: unknown;
  address: string;
  floors: number;
  construction_method: string;
  entrances: IResponseObjectsHouseEntrance[];
}

export interface IResponseObjectsHouseEntrance {
  name: string;
  plan_url: unknown;
  floors: number;
  flat_count: number;
  construction_material: unknown;
}

export interface IResponseObjectsPromotion {
  name_category: string;
  description: string | null;
  anchor_link: string;
  form: {
    button_label: string;
    header_text: string;
    content_text: string;
    button_text: string;
  } | null;
  elements: IResponseObjectsPromotionElement[];
}

export interface IResponseObjectsPromotionElement {
  name: string;
  slug: string | null;
  tags: string[];
  deadline: string;
  availability_percent: number;
  square: string;
  mortgage_rate: string;
  description: string;
  payment: number;
  mortgage_term: number;
  mortgage_name: string;
  old_mortgage_rate: string;
  old_payment: number;
  discount: number | null;
  discount_text: string | null;
  text_tooltip: string | null;
  media: ResponseMediaType[];
}

export interface IResponsePlans {
  house_data: IResponsePlansHouseData;
  plans: IResponsePlansPlans[];
}

export interface IResponsePlansHouseData {
  title_for_site: string;
  ready_date: string;
  address: string;
  floors: number;
  slug: string;
  construction_method: string;
}

export interface IResponsePlansPlans {
  type: string;
  code: string;
  items: IResponsePlansPlansItems[];
}

export interface IResponsePlansPlansItems {
  show: boolean;
  name: string;
  cost: string
  article: string;
  type: string;
  description: string;
  insolation: unknown | null;
  rooms: number;
  tags: string[];
  square: string;
  rating: string | null;
  rent_rating: unknown;
  window_to: unknown;
  video_review: string | null;
  title_for_site: string | null;
  loggia_square: unknown | null;
  images: ResponseImageType[];
  min_payment_gp: ResponsePaymentType | null;
  min_payment_fam: ResponsePaymentType | null;
  payments: ResponsePaymentType[];
  fact_init_fee_percent: number | null;
  public_cost: unknown | null;
  max_profit: string | null;
  min_sale_payment: unknown;
  remains_percent: number;
  remains_count: number;
  properties: Record<string, boolean> | null;
  is_in_brick_section: boolean;
  ready_date: string | null;
  min_payment_priority: {
    min_payment: string | null;
    sub_payment: string | null;
    initial_fee: string | null;
    mortgage: ResponseMortgageType | null;
  } | null;
  relatives: {
    uid: string;
    name: string;
    description: string;
    feature: {
      uid: string;
      title: string;
      feature_type: string;
      description: string;
      extra_text: string;
    };
    plan: {
      uid: string;
      name: string;
      article: string;
      show: boolean;
      square: string | null;
      rooms: number | null;
    };
  }[];
  features: {
    uid: string;
    title: string;
    feature_type: string;
    description: string;
    extra_text: string;
  }[];
}

export interface IResponseSold {
  properties: {
    type: string;
    plans: IResponseSoldPlans[];
  };
}

export interface IResponseSoldPlans {
  properties: {
    type: string;
    code: string;
  };
  items: IResponseSoldPlanItems[];
}

export interface IResponseSoldPlanItems {
  show: boolean;
  name: string;
  article: string;
  description: string;
  insolation: unknown | null;
  rooms: number;
  tags: string[] | null;
  square: string;
  rating: string | null;
  rent_rating: unknown;
  window_to: unknown;
  video_review: unknown | null;
  title_for_site: string | null;
  loggia_square: unknown | null;
  properties: unknown | null;
  images: ResponseImageType[];
}
