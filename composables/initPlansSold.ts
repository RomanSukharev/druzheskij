import type { IResponseSold, IResponseSoldPlanItems } from "@/types/ResponseType";

export var initPlansSold = (
  path: string,
  plans_sold: Ref<IResponseSoldPlanItems[]>,
  plans_sold_backend: IResponseSold[]
) => {
  switch (path) {
    case "/":
      plans_sold.value = plans_sold_backend.reduce((res: IResponseSoldPlanItems[], arr) => {
        var plans = arr.properties.plans.reduce((res_plans: IResponseSoldPlanItems[], arr_plans) => {
          return [...res_plans, ...arr_plans.items];
        }, []);

        return [...res, ...plans];
      }, []);
      break;

    case "/promo":
      plans_sold.value = plans_sold_backend.reduce((res: IResponseSoldPlanItems[], arr) => {
        var plans = arr.properties.plans.reduce((res_plans: IResponseSoldPlanItems[], arr_plans) => {
          return [...res_plans, ...arr_plans.items];
        }, []);

        return [...res, ...plans];
      }, []);
      break;
    default:
  }
};
