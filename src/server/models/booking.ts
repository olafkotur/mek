import { IShopData } from './shop';

export interface IBookingData {
  uid: string;
  description: string;
  bookingDate: Date;
  requestedDate: Date;
}

export interface IBookingWithShopData extends IBookingData {
  shopData: IShopData;
}
