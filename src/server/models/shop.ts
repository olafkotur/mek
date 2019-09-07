import { ICoords } from './location';

export interface IShopData {
  name: string;
  location: ICoords;
}

export interface IShopDataWithDistance extends IShopData {
  distance: number;
}
