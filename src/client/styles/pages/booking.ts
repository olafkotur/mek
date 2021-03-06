import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  bookingContainer: {
    marginTop: 30,
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.8,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
