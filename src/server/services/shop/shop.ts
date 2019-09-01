export default ShopService = {
  getShopDataByLocation: async (location) => {
    const data = [
      {
        name: 'National Tyres',
        rating: 4.2,
        numberOfReviews: 23,
        distance: 2.55,
      },
    ]
    return data;
  },
}