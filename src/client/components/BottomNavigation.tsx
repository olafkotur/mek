import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../styles/components/bottomNavigation';

interface IBottomNavigationProps {
  navigation: any;
  current: string;
}

export default class BottomNavigation extends React.Component<IBottomNavigationProps> {

  render() {
    return (
      <View style={ styles.navigationContainer } >

        <TouchableOpacity
          style={ styles.navigationButton }
          onPress={ () => {
            if (this.props.current !== 'Booking') {
              this.props.navigation.navigate('Booking', { shouldTransition: false });
            }
          }} >
          <Image
            style={ styles.navigationIcon }
            source={ require('../../../assets/icons/calendar_light.png') }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.navigationButton }
          onPress={ () => {
            if (this.props.current !== 'DashBoard') {
              this.props.navigation.navigate('DashBoard', { shouldTransition: false });
            }
          }} >
          <Image
            style={ styles.navigationIcon }
            source={ require('../../../assets/icons/explore_light.png') }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.navigationButton }
          onPress={ () => {
            if (this.props.current !== 'Account') {
              this.props.navigation.navigate('Account', { shouldTransition: false });
            }
          }} >
          <Image
            style={ styles.navigationIcon }
            source={ require('../../../assets/icons/account_light.png') }
          />
        </TouchableOpacity>

      </View>
    );
  }
}
