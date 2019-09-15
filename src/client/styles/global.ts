import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  keyboardAvoidContainerCenter: {
    flex: 1,
  },

  rowFlexContainer: {
    flexDirection: 'row',
  },

  lightText: {
    color: '#636e72',
  },
});
