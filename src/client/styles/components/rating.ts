import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  starContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },

  star: {
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
