import React from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/account';
import NavigationBar from '../components/NavigationBar';
import { devTools } from '../../server/services/dev';

interface IAccountProps {
  navigation: any;
}

export default class Account extends React.Component<IAccountProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  handleAddShop = async () => {
    await devTools.addShopToDb();
  }

  render() {
    return (
      <SafeAreaView style={ globalStyles.container }>
        <NavigationBar
          navigation={ this.props.navigation }
          title={ 'My Account' }
          return={ 'DashBoard' }
        />

        <ScrollView contentContainerStyle={ globalStyles.scrollViewContainer }>

          <View style={ styles.groupSettingContainer }>
            <TouchableOpacity
              style={ styles.settingButton }
              onPress={ () => this.props.navigation.navigate('Login', { skipAutoLogin: true }) } >
              <Text style={ styles.settingTitle }>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={ styles.groupSettingContainer }>
            <TouchableOpacity
              style={ styles.settingButton }
              onPress={ () => this.handleAddShop() } >
              <Text style={ styles.settingTitle }>Add Shop</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </SafeAreaView>
    );
  }
}
