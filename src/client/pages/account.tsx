import React from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/account';
import NavigationBar from '../components/NavigationBar';

interface IAccountProps {
  navigation: any;
}

export default class Account extends React.Component<IAccountProps> {

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
              onPress={ () => this.props.navigation.navigate('Login') } >
              <Text style={ styles.settingTitle }>Logout</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </SafeAreaView>
    );
  }
}
