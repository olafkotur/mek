import { IShopData } from '../../models/shop';
import { db } from '../api/db';

export const devTools = {
  addShopToDb: async () => {
    const data: IShopData = {
      name: 'China',
      location: {
        lat: 35.562484,
        long: 103.836305,
      },
    };

    db.collection('shops').add(data).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
  },
};
