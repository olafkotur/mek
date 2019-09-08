import { ICoords } from './location';

export interface IShopAddress {
  buildingName?: string;
  street: string;
  city: string;
  postCode: string;
}

export interface IShopData {
  name: string;
  rating: number;
  numberOfReviews: number;
  address: IShopAddress;
  location: ICoords;
}

export interface IShopDataWithDistance extends IShopData {
  distance: number;
}
