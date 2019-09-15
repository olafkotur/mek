import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  inputContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.18,
    top: deviceHeight * 0.82,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  textInput: {
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

  inputText: {
    marginLeft: 20,
    color: '#fff',
  },

  confirmButton: {
    height: 40,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#0984e3',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  confirmButtonText: {
    color: '#fff',
  },

  cancelButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cancelButton: {
    width: 75,
    marginLeft: 10,
    justifyContent: 'center',
  },

  cancelText: {
    color: '#636e72',
    marginTop: 10,
  },

  transparentButton: {
    width: deviceWidth,
    height: deviceHeight * 0.8,
    bottom: deviceHeight * 0.2,
    backgroundColor: 'transparent',
  },
});
