import React from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text, StatusBar, Alert } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/account';
import NavigationBar from '../components/NavigationBar';
import { devTools } from '../../server/services/dev';
import { LinearGradient } from 'expo-linear-gradient';
import ModalTextInput from '../components/ModalTextInput';

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

  handleOpenTextInput = (setting: string) => {
    this.setState({
      textInputActive: true,
      settingFocus: setting,
    });
  }

  handleChange = (event: string) => {
    this.setState({ text: event });
  }

  handleConfirm = () => {
    this.setState({
      textInputActive: false,
      settingFocus: '',
      text: '',
    });
  }

  handleCancel = () => {
    this.setState({
      textInputActive: false,
      settingFocus: '',
      text: '',
    });
  }

  handleAddShop = () => {
    Alert.alert('Are ye sure?', 'It\'s a bit fucking annoying to revert this so ya best be sure bitch!', [
      { text: 'Nope', onPress: () => console.log('Fucking knew it') },
      { text: 'Yus', onPress: () => devTools.addShopToDb() },
    ]);
  }

  render() {
    return (
      <LinearGradient
        style={ globalStyles.container }
        colors={['#536976', '#292E49']} >

        <StatusBar barStyle='light-content' />

        <SafeAreaView style={ globalStyles.container }>

          <NavigationBar
            navigation={ this.props.navigation }
            title={ 'My Account' }
            return={ 'DashBoard' }
          />

          <ScrollView contentContainerStyle={ globalStyles.scrollViewContainer }>

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
                  onPress={ () => this.props.navigation.navigate('Login', { skipAutoLogin: true }) } >
                  <Image
                    style={ styles.forwardIcon }
                    source={ require('../../../assets/icons/forward_dark.png') }
                  />
                </TouchableOpacity>
              </View>

            </View>

            <ModalTextInput
              visible={ this.state.textInputActive }
              textValue={ this.state.text }
              focus={ this.state.settingFocus }
              handleChange={ this.handleChange }
              handleConfirm={ this.handleConfirm }
              handleCancel={ this.handleCancel }
            />

          </ScrollView>

        </SafeAreaView>

      </LinearGradient>
    );
  }
}
