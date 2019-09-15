import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  textInput: {
    marginTop: 30,
    height: 50,
    width: (deviceWidth * 0.9) - 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#636e72',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingHorizontal: 10,
  },

  textInputLarge: {
    marginTop: 30,
    height: deviceHeight * 0.25,
    width: (deviceWidth * 0.9) - 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#636e72',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingTop: 15,
  },

  confirmButton: {
    width: 100,
    height: 40,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },

  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
