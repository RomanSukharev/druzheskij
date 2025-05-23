import { IResponseObjectsInfrastructureElement } from "@/types/ResponseType";

export type InfrastructureType = IInfrastructure | null;

export interface IInfrastructure {
  categories: IInfrastructureCategory[];
  complex_coords: [number, number];
  current_category: IInfrastructureCategory;
}

export interface IInfrastructureCategory {
  name_category: string;
  elements: IInfrastructureElement[];
}

export interface IInfrastructureElement extends IResponseObjectsInfrastructureElement {
  placemark_icon: string;
}
