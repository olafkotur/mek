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
});
