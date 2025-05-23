import { IResponseObjectsDynamic } from "@/types/ResponseType";

export var initDynamics = (
  path: string,
  dynamics: Ref<IResponseObjectsDynamic[]>,
  dynamics_backend_data?: IResponseObjectsDynamic[]
) => {
  switch (path) {
    default:
      dynamics_backend_data && (dynamics.value = dynamics_backend_data);
  }
};
