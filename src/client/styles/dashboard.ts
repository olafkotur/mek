import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  location: {
    height: 40,
    width: deviceWidth * 0.8,
    marginBottom: 20,
    justifyContent: 'center',
  },

  accountButton: {
    marginLeft: 10,
    marginTop: 5,
  },

  accountButtonIcon: {
    width: 30,
    height: 30,
  },

  shopCardContainer: {
  },

  shopCardBox: {
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth * 0.8,
    height: 80,
  },

});
