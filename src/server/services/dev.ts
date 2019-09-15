import { IShopData } from '../models/shop';
import { DbService } from './db';

export const devTools = {
  addShopsToDb: () => {
    DbService.db.collection('shops').add(data1).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
    DbService.db.collection('shops').add(data2).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
    DbService.db.collection('shops').add(data3).catch((err: any) => {
      console.log(`addShopToDb: Error ${err}`);
    });
  },
};

// Testing data
const data1: IShopData = {
  id: 32432,
  name: 'Leicester',
  rating: 3.4,
  numberOfReviews: 14,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
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
  id: 9871,
  name: 'Manchester',
  rating: 4.1,
  numberOfReviews: 89,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
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
  id: 983712,
  name: 'Lancaster',
  rating: 1.2,
  numberOfReviews: 182,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
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
