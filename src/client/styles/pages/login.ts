import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  logoIconLarge: {
    width: deviceWidth * 0.35,
    height: deviceWidth * 0.35,
    marginBottom: 10,
    alignSelf: 'center',
  },

  logoTextLarge: {
    width: deviceWidth * 0.4,
    height: deviceWidth * 0.15,
    marginBottom: 100,
    alignSelf: 'center',
  },

  loginTextInput: {
    height: 60,
    width: deviceWidth * 0.8,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
  },

  loginSignInButton: {
    height: 50,
    width: deviceWidth * 0.35 + 15,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginSignUpButton: {
    height: 50,
    width: deviceWidth * 0.35 + 15,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginSignUpButtonText: {
    color: '#fff',
  },

  loginForgotPasswordButton: {
    marginBottom: 40,
    alignSelf: 'flex-end',
    marginRight: 15,
    alignItems: 'flex-end',
  },

  loginForgotPasswordText: {
    color: '#fff',
  },
});
