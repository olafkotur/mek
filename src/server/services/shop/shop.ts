import { IShopData } from '../../models/shop';
import { db } from '../api/db';

export const ShopService = {
  getShopDataByLocation: async (location: string): Promise<IShopData[]> => {
    return await db.collection('shops').get().then((snapshot: any) => {
      const data: any = [];
      snapshot.forEach((doc: any) => data.push(doc.data()));
      return data;
    }).catch((err) => {
      console.warn(`getShopDataByLocation: Error ${err}`);
    });
  },
};
