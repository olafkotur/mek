import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  cardContainer: {
    height: 100,
    width: deviceWidth * 0.9,
  },

  bottomBorder: {
    borderBottomColor: '#636e72',
    borderBottomWidth: 1,
  },
});
