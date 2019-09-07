import { IShopData } from '../../models/shop';
import { db } from '../api/db';

export const devTools = {
  addShopToDb: async () => {
    const data: IShopData = {
      name: 'Somewhere in France',
      location: {
        lat: -21.024696,
        long: 55.348017,
      },
    };

    db.collection('shops').add(data).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
  },
};
