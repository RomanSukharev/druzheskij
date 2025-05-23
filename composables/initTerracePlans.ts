import type { IResponsePlans, IResponsePlansPlansItems } from "types/ResponseType";

export var initTerracePlans = (
  path: string,
  terrace_plans: Ref<IResponsePlansPlansItems[]>,
  houses: IResponsePlans[]
) => {
  switch (path) {
    default:
      terrace_plans.value = houses.reduce((acc: IResponsePlansPlansItems[], house) => {
        const plans_with_terrace = house.plans.reduce(
          (res: IResponsePlansPlansItems[], plan_group) => {
            const plans_with_terrace = plan_group.items.filter((plan) =>
              plan.features.find((i) => i.title === "TR")
            );
            return [...res, ...plans_with_terrace];
          },
          []
        );

        return [...acc, ...plans_with_terrace];
      }, []);
  }

  if (terrace_plans.value.length > 2) {
    terrace_plans.value = terrace_plans.value.slice(0, 2);
  }
};
