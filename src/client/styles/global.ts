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

  logoIconLarge: {
    width: deviceWidth * 0.35,
    height: deviceWidth * 0.35,
    marginBottom: 10,
  },

  logoTextLarge: {
    width: deviceWidth * 0.4,
    height: deviceWidth * 0.15,
    marginBottom: 100,
  },

  scrollViewContainer: {
    marginTop: 40,
  },

  navBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: deviceWidth,
    height: 60,
  },

  navBarBackButton: {
    marginLeft: 15,
    width: 25,
    height: 25,
  },

  navBarTitleContainer: {
    left: 130, // HACK: This only works for the testing device
  },

  navBarTitle: {
    fontSize: 16,
  },

  lightText: {
    color: '#636e72',
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

  loader: {
    height: '5%',
    width: '15%',
  },

  simpleLoaderContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
