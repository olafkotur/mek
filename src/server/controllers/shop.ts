import { ShopService } from '../services/shop/shop';
import { ICoordsWithName } from '../models/location';

export const ShopController = {
  getShopDataByLocation: async (location: ICoordsWithName) => {
    return await ShopService.getShopDataByLocation(location);
  },
};
