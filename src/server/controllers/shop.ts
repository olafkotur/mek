import ShopService from '../services/shop/shop';

export default ShopController = {
  getShopDataByLocation: async (location) => {
    return await ShopService.getShopDataByLocation(location);
  },
}