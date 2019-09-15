import React from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text, StatusBar, Alert, KeyboardAvoidingView } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/account';
import HeadNavigation from '../components/HeadNavigation';
import { devTools } from '../../server/services/dev';
import { LinearGradient } from 'expo-linear-gradient';
import { AccountService } from '../../server/services/account';
import { IStatusWithCode } from '../../server/models/request';
import { DbService } from '../../server/services/db';
import DropDownAlert from 'react-native-dropdownalert';
import BottomNavigation from '../components/BottomNavigation';
import LargeTextInput from '../components/LargeTextInput';
import { SlackService } from '../../server/services/slack';

interface IAccountProps {
  navigation: any;
}

interface IAccountState {
  textInputActive: boolean;
  settingFocus: string;
  text: string;
}

export default class Account extends React.Component<IAccountProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  state: IAccountState = {
    textInputActive: false,
    settingFocus: '',
    text: '',
  };

  dropDownAlertRef: any;

  handleOpenTextInput = (setting: string) => {
    this.setState({
      textInputActive: true,
      settingFocus: setting,
    });
  }

  handleChange = (event: string) => {
    this.setState({ text: event });
  }

  handleConfirm = async () => {
    if (this.state.settingFocus === 'Password') {
      const res: IStatusWithCode = await AccountService.updateUserPassword(this.state.text);

      if (!res.status) {
        this.dropDownAlertRef.alertWithType('error', 'Uh-oh', DbService.formatErrorMessage(res.code));
        return false;
      }
      this.dropDownAlertRef.alertWithType('info', 'Updated', 'Your password has been updated');
    }
    else if (this.state.settingFocus === 'Feedback' && this.state.text) {
      const msg: string = `\`feedback\`\n\`\`\`${this.state.text}\`\`\``;
      SlackService.sendMessage(msg, 'report');
      this.dropDownAlertRef.alertWithType('info', 'Sent', 'Thank you, your feedback was sent directly to our slack channel');
    }

    this.handleCancel();
  }

  handleCancel = () => {
    this.setState({
      textInputActive: false,
      settingFocus: '',
      text: '',
    });
  }

  // DANGER: Remove before release
  handleAddShop = () => {
    Alert.alert('Are ye sure?', 'It\'s a bit fucking annoying to revert this so ya best be sure bitch!', [
      { text: 'Nope', onPress: () => console.log('Fucking knew it') },
      { text: 'Yus', onPress: () => devTools.addShopToDb() },
    ]);
  }

  render() {
    if (this.state.textInputActive) {
      return (
        <View style={ globalStyles.container }>
          <LargeTextInput
            textValue={ this.state.text }
            focus={ this.state.settingFocus }
            handleChange={ this.handleChange }
            handleConfirm={ this.handleConfirm }
            handleCancel={ this.handleCancel }
          />

          <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

        </View>
      );
    }
    else {
      return (
        <LinearGradient
          style={ globalStyles.container }
          colors={['#536976', '#292E49']} >

          <StatusBar barStyle='light-content' />

          <SafeAreaView style={ globalStyles.container }>

            <HeadNavigation
              title={ 'My Account' }
            />

            <ScrollView contentContainerStyle={ styles.scrollViewContainer }>

              <View style={ styles.groupSettingContainer }>

                <View style={ styles.settingContainerWithBorder } >
                  <View style={ styles.settingTextContainer } >
                    <Text style={ styles.settingText }>Add Shop</Text>
                  </View>
                  <TouchableOpacity
                    style={ styles.settingButton }
                    onPress={ () => this.handleAddShop() } >
                    <Image
                      style={ styles.forwardIcon }
                      source={ require('../../../assets/icons/forward_dark.png') }
                    />
                  </TouchableOpacity>
                </View>

                <View style={ styles.settingContainerWithoutBorder } >
                  <View style={ styles.settingTextContainer } >
                    <Text style={ styles.settingText }>Send Feedback</Text>
                  </View>
                  <TouchableOpacity
                    style={ styles.settingButton }
                    onPress={ () => this.handleOpenTextInput('Feedback') } >
                    <Image
                      style={ styles.forwardIcon }
                      source={ require('../../../assets/icons/forward_dark.png') }
                    />
                  </TouchableOpacity>
                </View>

              </View>

              {/* User settings */}
              <View style={ styles.groupSettingContainer }>

                <View style={ styles.settingContainerWithBorder } >
                  <View style={ styles.settingTextContainer } >
                    <Text style={ styles.settingText }>Change Password</Text>
                  </View>
                  <TouchableOpacity
                    style={ styles.settingButton }
                    onPress={ () => this.handleOpenTextInput('Password') } >
                    <Image
                      style={ styles.forwardIcon }
                      source={ require('../../../assets/icons/forward_dark.png') }
                    />
                  </TouchableOpacity>
                </View>

                <View style={ styles.settingContainerWithoutBorder } >
                  <View style={ styles.settingTextContainer } >
                    <Text style={ styles.settingText }>Logout</Text>
                  </View>
                  <TouchableOpacity
                    style={ styles.settingButton }
                    onPress={ () => this.props.navigation.replace('Login', { skipAutoLogin: true }) } >
                    <Image
                      style={ styles.forwardIcon }
                      source={ require('../../../assets/icons/forward_dark.png') }
                    />
                  </TouchableOpacity>
                </View>

              </View>

            </ScrollView>

          </SafeAreaView>

          <BottomNavigation
            current={ 'Account' }
            navigation={ this.props.navigation }
          />

          <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

        </LinearGradient>
      );
    }
  }
}
