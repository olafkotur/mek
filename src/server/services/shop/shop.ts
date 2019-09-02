import { IShopData } from '../../models/shop';

export const ShopService = {
  getShopDataByLocation: async (location: string) => {
    const data: IShopData[] = [
      {
        name: 'National Tyres',
        rating: 4.2,
        numberOfReviews: 23,
        distance: 2.55,
      },
      {
        name: 'Mirek',
        rating: 5.0,
        numberOfReviews: 42,
        distance: 3.75,
      },
      {
        name: 'Andy',
        rating: 2,
        numberOfReviews: 17,
        distance: 1.04,
      },
    ];
    return data;
  },
};
