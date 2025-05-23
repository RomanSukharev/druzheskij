import {
  IInfrastructure,
  IInfrastructureCategory,
  IInfrastructureElement,
  InfrastructureType,
} from "@/types/InfrastructureTypes";
import { IResponseObjectsInfrastructure } from "@/types/ResponseType";

/**
 * @description Конвертирует объект Infrastructure, который пришёл от бэка в удобный для фронта формат
 */
var convertInfrastructure = (
  infrastructure: IResponseObjectsInfrastructure[],
  complex_coords: [number, number]
): IInfrastructure => {
  var categories: IInfrastructureCategory[] = infrastructure.map((i) => ({
    name_category: i.name_category,
    elements: i.elements.map((el) => ({
      ...el,
      placemark_icon: i.image_object[0].file,
    })),
  }));

  categories = categories.filter((el) => el.elements.length);

  categories.unshift({
    name_category: "Все категории",
    elements: categories.reduce((res: IInfrastructureElement[], i) => [...res, ...i.elements], []),
  });

  return {
    complex_coords,
    categories: categories,
    current_category: categories[0],
  };
};

export var initInfrastructure = (
  path: string,
  infrastructure: Ref<InfrastructureType>,
  complex_coords: [number, number],
  infrastructure_backend_data?: IResponseObjectsInfrastructure[]
) => {
  switch (path) {
    default:
      infrastructure_backend_data &&
        (infrastructure.value = convertInfrastructure(infrastructure_backend_data, complex_coords));
  }
};
