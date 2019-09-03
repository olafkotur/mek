import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import DropDownAlert from 'react-native-dropdownalert';
import { LoginController } from '../../server/controllers/login';
import globalStyles from '../styles/global';
import styles from '../styles/login';
import { IStatusWithMessage } from '../../server/models/request';

interface ILoginProps {
  navigation: any;
}

export default class Login extends React.Component<ILoginProps> {

  state = {
    email: 'olafkotur97@gmail.com', // TODO: Default to null
    password: 'Poly0981123', // TODO: Default to null
  };

  dropDownAlertRef: any;

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleSignIn = async () => {
    if (!this.state.email || !this.state.password) {
      return false;
    }

    const res: IStatusWithMessage = await LoginController.signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
    );

    if (!res.status) {
      this.dropDownAlertRef.alertWithType('error', 'Error', res.message);
      return false;
    }

    this.props.navigation.navigate('DashBoard');
  }

  handleCreateUser = async () => {
    if (!this.state.email || !this.state.password) {
      return false;
    }

    const res: IStatusWithMessage = await LoginController.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password,
    );

    if (!res.status) {
      this.dropDownAlertRef.alertWithType('error', 'Error', res.message);
      return false;
    }

    this.props.navigation.navigate('DashBoard');
  }

  handleRecoveryEmail = async () => {
    if (!this.state.email) {
      return false;
    }

    const res: IStatusWithMessage = await LoginController.sendPasswordRecoveryEmail(this.state.email);

    if (!res.status) {
      this.dropDownAlertRef.alertWithType('error', 'Error', res.message);
      return false;
    }
  }

  render() {
    return (
      <View style={ globalStyles.container }>

        <TextInput
          style={ styles.loginTextInput }
          value={ this.state.email }
          onChangeText={ (e) => this.handleChange('email', e) }
          placeholder={ 'email' }
        />

        <TextInput
          style={ styles.loginTextInput }
          value={ this.state.password }
          placeholder={ 'password' }
          onChangeText={ (e) => this.handleChange('password', e) }
          secureTextEntry={ true }
        />

        <TouchableOpacity
          style={ styles.loginForgotPasswordButton }
          onPress={ () => this.handleRecoveryEmail() } >
          <Text>Forgot Password</Text>
        </TouchableOpacity>

        <View style={ globalStyles.rowFlexContainer } >
          <TouchableOpacity
            style={ styles.loginSignInButton }
            onPress={ () => this.handleSignIn() } >
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.loginSignUpButton }
            onPress={ () => this.handleCreateUser() } >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>

        <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

      </View>
    );
  }
}
