import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowFlexContainer: {
    flexDirection: 'row',
  },

  logoLarge: {
    width: deviceWidth * 0.5,
    height: deviceWidth * 0.3,
    marginBottom: 50,
  },

});
