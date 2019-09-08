import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import DropDownAlert from 'react-native-dropdownalert';
import { LoginService } from '../../server/services/login';
import globalStyles from '../styles/global';
import styles from '../styles/login';
import { IStatusWithCode } from '../../server/models/request';
import { formatErrorMessage } from '../../server/services/api/db';
import Loader from '../components/Loader';

interface ILoginProps {
  navigation: any;
}

interface ILoginState {
  isUpdating: boolean;
  email: string;
  password: string;
}

export default class Login extends React.Component<ILoginProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  state: ILoginState = {
    isUpdating: true,
    email: 'olafkotur97@gmail.com', // TODO: Default to null
    password: 'Poly0981123', // TODO: Default to null
  };

  dropDownAlertRef: any;

  componentDidMount = async () => {
    if (this.props.navigation.getParam('skipAutoLogin')) {
      this.setState({ isUpdating: false });
      return false;
    }

    const res: IStatusWithCode = await LoginService.attemptAutomaticSignIn();
    if (!res.status) {
      this.setState({ isUpdating: false });
      return false;
    }

    this.props.navigation.replace('DashBoard');
  }
  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleSignIn = async () => {
    if (!this.state.email || !this.state.password) {
      return false;
    }

    const res: IStatusWithCode = await LoginService.signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
    );

    if (!res.status) {
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', formatErrorMessage(res.code));
      return false;
    }

    this.props.navigation.replace('DashBoard');
  }

  handleCreateUser = async () => {
    if (!this.state.email || !this.state.password) {
      return false;
    }

    const res: IStatusWithCode = await LoginService.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password,
    );

    if (!res.status) {
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', formatErrorMessage(res.code));
      return false;
    }

    this.props.navigation.navigate('DashBoard');
  }

  handleRecoveryEmail = async () => {
    if (!this.state.email) {
      return false;
    }

    const res: IStatusWithCode = await LoginService.sendPasswordRecoveryEmail(this.state.email);

    if (!res.status) {
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', formatErrorMessage(res.code));
      return false;
    }
    this.dropDownAlertRef.alertWithType('info', 'Sent', `Recovery email was successfully sent to ${this.state.email}`);
  }

  render() {
    if (this.state.isUpdating) {
      return <Loader />;
    }
    else {
      return (
        <View style={ globalStyles.containerCenter }>

          <Image
            source={ require('../../../assets/logo.png') }
            style={ globalStyles.logoLarge }
          />

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
}
