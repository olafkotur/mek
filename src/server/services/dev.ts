import { IShopData } from '../models/shop';
import { db } from './db';

const data1: IShopData = {
  name: 'Leicester',
  rating: 3.4,
  numberOfReviews: 14,
  address: {
    buildingName: '20',
    street: 'Church Street',
    city: 'Leicester',
    postCode: 'le14aj',
  },
  location: {
    lat: 52.637336,
    long: -1.133541,
  },
};

const data2: IShopData = {
  name: 'Manchester',
  rating: 4.1,
  numberOfReviews: 89,
  address: {
    street: 'Mosley Street',
    city: 'Manchester',
    postCode: 'm23jl',
  },
  location: {
    lat: 53.478789,
    long: -2.241414,
  },
};

const data3: IShopData = {
  name: 'Lancaster',
  rating: 1.2,
  numberOfReviews: 182,
  address: {
    buildingName: '23',
    street: 'Bath Street',
    city: 'Lancaster',
    postCode: 'la13pz',
  },
  location: {
    lat: 54.049073,
    long: -2.791673,
  },
};

export const devTools = {
  addShopToDb: async () => {
    const data: IShopData = data3;
    db.collection('shops').add(data).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
  },
};
