import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  location: {
    height: 40,
    width: deviceWidth * 0.8,
    marginBottom: 20,
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

  accountButton: {
    marginLeft: 10,
    marginTop: 5,
  },

  accountButtonIcon: {
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
  },

  shopCardContentContainer: {
    padding: 15,
  },

  ratingStarContainer: {
    flexDirection: 'row',
  },

  ratingStar: {
    width: 25,
    height: 25,
  },

});
