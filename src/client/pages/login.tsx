import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { LoginController } from '../../server/controllers/login';
import globalStyles from '../styles/global';
import styles from '../styles/login';

interface ILoginProps {
  navigation: any;
}
export default class Login extends React.Component<ILoginProps> {

  state = {
    email: 'olaf', // TODO: Default to null
    password: 'test', // TODO: Default to null
  };

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleForgotPassword = async () => {
    if (!this.state.email) {
      alert('Please enter your email to enter recovery');
      return false;
    }

    const res = await LoginController.sendPasswordRecoveryEmail(this.state.email);
    if (!res) {
      alert('There was a problem with resetting your email, please try again');
    }
    alert('Email has been successfully sent, please follow the instructions in your inbox');
  }

  handleLogin = async () => {
    if (!this.state.email || !this.state.password) {
      alert('Please enter username and password');
      return false;
    }

    const res = await LoginController.loginWithUserNameAndPassword(this.state.email, this.state.password);
    if (!res) {
      console.log('There was a problem with logging in, please try again');
      return false;
    }
    this.props.navigation.navigate('DashBoard');
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

        <Button
          title={ 'Can\'t remember' }
          onPress={ () => this.handleForgotPassword() }
        />

        <Button
          title={ 'Login / Register' }
          onPress={ () => this.handleLogin() }
        />
      </View>
    );
  }
}
