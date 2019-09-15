import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  barContainer: {
    marginTop: 15,
    flexDirection: 'row',
    width: deviceWidth,
  },

  backButton: {
    position: 'absolute',
    marginLeft: 10,
    width: 25,
    height: 25,
  },

  titleContainer: {
    width: deviceWidth,
  },

  title: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
