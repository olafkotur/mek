import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  navigationContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.08,
    top: deviceHeight * 0.92,
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },

  navigationButton: {
    paddingHorizontal: deviceWidth * 0.125,
  },

 navigationIcon: {
    width: 30,
    height: 30,
  },

  navigationHighlight: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
});
