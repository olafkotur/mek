import { ICoords } from './location';

export interface IShopAddress {
  buildingName?: string;
  street: string;
  city: string;
  postCode: string;
}

export interface IShopData {
  id: number;
  name: string;
  rating: number;
  numberOfReviews: number;
  description: string;
  address: IShopAddress;
  location: ICoords;
}

export interface IShopDataWithColor extends IShopData {
  color: string;
}

export interface IShopDataWithDistance extends IShopData {
  distance: number;
}
