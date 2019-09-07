import { IShopData, IShopDataWithDistance } from '../../models/shop';
import { db } from '../api/db';
import { ICoords } from '../../models/location';
import { config } from '../../../config';
import { LocationService } from '../location/location';
import _ from 'lodash';

export const ShopService = {
  getShopData: async (): Promise<IShopData[]> => {
    return await db.collection('shops').get().then((snapshot: any) => {
      const data: any = [];
      snapshot.forEach((doc: any) => data.push(doc.data()));
      return data;
    }).catch((err) => {
      console.warn(`getShopDataByLocation: Error ${err}`);
    });
  },

  getShopDataByLocation: async (location: ICoords) => {
    const data: IShopData[] = await ShopService.getShopData();
    const dataWithDistance: IShopDataWithDistance[] = data.map((shop: IShopData) => {
      return {
        ...shop,
        distance: LocationService.calculateSimpleDistance(location, shop.location),
      };
    });

    const filtered: IShopData[] = _.sortBy(dataWithDistance, ['distance']);
    return filtered;
  },
};
