import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  locationInput: {
    height: 40,
    width: deviceWidth * 0.8,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
  },

  locationButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    marginLeft: 10,
    marginTop: 10,
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
