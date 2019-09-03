import { ShopService } from '../services/shop/shop';

export const ShopController = {
  getShopDataByLocation: async (location: string) => {
    return await ShopService.getShopDataByLocation(location);
  },
};
