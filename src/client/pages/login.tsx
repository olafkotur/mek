import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import DropDownAlert from 'react-native-dropdownalert';
import { LoginService } from '../../server/services/login';
import globalStyles from '../styles/global';
import styles from '../styles/login';
import { IStatusWithCode } from '../../server/models/request';
import { DbService } from '../../server/services/db';
import Loader from '../components/Loader';
import { LinearGradient } from 'expo-linear-gradient';

interface ILoginProps {
  navigation: any;
}

interface ILoginState {
  isUpdating: boolean;
  email: string | null;
  password: string | null;
}

export default class Login extends React.Component<ILoginProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  state: ILoginState = {
    isUpdating: true,
    email: null,
    password: null,
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
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', DbService.formatErrorMessage(res.code));
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
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', DbService.formatErrorMessage(res.code));
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
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', DbService.formatErrorMessage(res.code));
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
        <LinearGradient
          colors={['#536976', '#292E49']}>

          <KeyboardAvoidingView
            contentContainerStyle={ globalStyles.containerCenter }
            behavior={ 'padding' }
            enabled >

            <StatusBar barStyle='light-content' />

            <Image
              source={ require('../../../assets/logo/logo_icon_transparent.png') }
              style={ globalStyles.logoIconLarge }
            />

            <Image
              source={ require('../../../assets/logo/logo_text_transparent.png') }
              style={ globalStyles.logoTextLarge }
            />

            <TextInput
              style={ styles.loginTextInput }
              value={ this.state.email }
              onChangeText={ (e) => this.handleChange('email', e) }
              placeholder={ 'email' }
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#636e72'}
              secureTextEntry={false}
            />

            <TextInput
              style={ styles.loginTextInput }
              value={ this.state.password }
              placeholder={ 'password' }
              onChangeText={ (e) => this.handleChange('password', e) }
              secureTextEntry={ true }
              keyboardType={'default'}
              autoCapitalize={'none'}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#636e72'}
            />

            <TouchableOpacity
              style={ styles.loginForgotPasswordButton }
              onPress={ () => this.handleRecoveryEmail() } >
              <Text style={ styles.loginForgotPasswordText }>Forgot Password</Text>
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
                <Text style={ styles.loginSignUpButtonText }>Register</Text>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>

          <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

      </LinearGradient>
      );
    }
  }
}
