import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  dashboardBarContainer: {
    marginTop: 20,
  },

  location: {
    height: 40,
    width: deviceWidth * 0.9,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  locationText: {
    color: '#fff',
    marginTop: 10,
  },

  locationIcon: {
    marginLeft: 5,
    marginTop: 5,
    width: 25,
    height: 25,
  },

  shopCardScrollContainer: {
    alignItems: 'center',
  },

  shopCardContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth * 0.9,
    height: 150,
    backgroundColor: '#f5f6fa',
    borderRadius: 5,
    flexDirection: 'row',
  },

  shopCardContentContainer: {
    padding: 15,
  },

  shopCardName: {
    fontSize: 20,
  },

  cardLogoStrip: {
    height: 150,
    width: 100,
    backgroundColor: 'green',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  ratingStarContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },

  ratingStar: {
    width: 25,
    height: 25,
  },

  numberOfReviewsText: {
    color: '#636e72',
    marginTop: 2,
    marginLeft: 5,
    alignSelf: 'center',
  },

});
