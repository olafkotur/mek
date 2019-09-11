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
    marginTop: 15,
    flexDirection: 'row',
    width: deviceWidth,
  },

  navBarBackButton: {
    position: 'absolute',
    marginLeft: 10,
    width: 25,
    height: 25,
  },

  navBarTitleContainer: {
    width: deviceWidth,
  },

  navBarTitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
  },

  lightText: {
    color: '#636e72',
  },

  modalInputContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.2,
    top: deviceHeight * 0.8,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  modalTextInput: {
    marginTop: 15,
    height: 50,
    width: (deviceWidth * 0.7) - 12.5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#636e72',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingHorizontal: 10,
  },

  modalInputText: {
    marginLeft: 20,
    color: '#fff',
  },

  modalInputButton: {
    height: 40,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#0984e3',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  modalTransparentButton: {
    width: deviceWidth,
    height: deviceHeight * 0.8,
    bottom: deviceHeight * 0.2,
    backgroundColor: 'transparent',
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
