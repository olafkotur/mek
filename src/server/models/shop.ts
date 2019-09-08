import { ICoords } from './location';

export interface IShopData {
  name: string;
  rating: number;
  location: ICoords;
}

export interface IShopDataWithDistance extends IShopData {
  distance: number;
}
