import { IShopData } from './shop';

export interface IBookingData {
  date: Date;
  description: string;
}

export interface IBookingWithShopData extends IBookingData {
  shopData: IShopData;
}
