import { AsyncStorage } from 'react-native';
import { IShopData, IShopDataWithDistance } from '../models/shop';
import { DbService } from './db';
import { ICoords } from '../models/location';
import { config } from '../../config';
import { LocationService } from './location';
import _ from 'lodash';

export const ShopService = {
  getShopData: async (): Promise<IShopData[]> => {
    return await DbService.db.collection('shops').get().then((snapshot: any) => {
      const data: any = [];
      snapshot.forEach((doc: any) => data.push(doc.data()));
      return data;
    }).catch((err) => {
      console.warn(`getShopDataByLocation: Error ${err}`);
    });
  },

  storeShopData: async (data: IShopData[]) => {
    const exists = !!(await ShopService.retrieveShopData());
    if (exists) {
      await AsyncStorage.removeItem('shopData');
    }

    await AsyncStorage.setItem('shopData', JSON.stringify(data))
    .catch((err) => {
      console.warn(`storeShopData: Error ${err}`);
    });
  },

  retrieveShopData: async (): Promise<IShopData[] | boolean> => {
    const res = await AsyncStorage.getItem('shopData')
    .catch((err) => {
      console.warn(`retrieveShopData: Error ${err}`);
    });

    if (!res) {
      return false;
    }
    return JSON.parse(res);
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
    return _.chunk(filtered, config.request.nearbyLimit)[0];
  },
};
