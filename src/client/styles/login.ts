import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  loginTextInput: {
    height: 40,
    width: deviceWidth * 0.8,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
  },

  loginSignInButton: {
    height: 40,
    width: deviceWidth * 0.35,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginSignUpButton: {
    height: 40,
    width: deviceWidth * 0.35,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginForgotPasswordButton: {
    marginBottom: 20,
  },
});
