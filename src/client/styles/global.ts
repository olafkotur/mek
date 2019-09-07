import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  containerCenter: {
    flex: 1,
    backgroundColor: '#f5f6fa',
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

  scrollViewContainer: {
    marginTop: 40,
  },

  navBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: deviceWidth,
    height: 50,
  },

  navBarBackButton: {
    marginLeft: 10,
  },

  navBarTitleContainer: {
    left: 145, // HACK: This only works for the testing device
  },

  navBarTitle: {
    fontSize: 16,
  },

  infoBoxContainer: {
    width: deviceWidth,
    height: 50,
    top: deviceHeight - 50,
    backgroundColor: '#fc5c65',
    justifyContent: 'center',
  },

  infoBoxText: {
    marginLeft: 20,
    color: '#fff',
  },
});
