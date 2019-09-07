import { IShopData } from '../models/shop';
import { db } from '../services/api/db';

export const devTools = {
  addShopToDb: async () => {
    const data: IShopData = {
      name: 'Foobarium Leviosa',
      rating: 5,
      numberOfReviews: 17,
      distance: 42,
    };

    db.collection('shops').add(data).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
  },
};
