import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import globalStyles from '../styles/global';

interface IBottomNavigationProps {
  navigation: any;
  current: string;
}

export default class BottomNavigation extends React.Component<IBottomNavigationProps> {

  render() {
    return (
      <View style={ globalStyles.bottomNavigationContainer } >

        <TouchableOpacity
          style={ globalStyles.bottomNavigationButton }
          onPress={ () => {
            if (this.props.current !== 'Booking') {
              this.props.navigation.navigate('Booking');
            }
          }} >
          <Image
            style={ globalStyles.bottomNavigationIcon }
            source={ require('../../../assets/icons/calendar_light.png') }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={ globalStyles.bottomNavigationButton }
          onPress={ () => {
            if (this.props.current !== 'DashBoard') {
              this.props.navigation.navigate('DashBoard');
            }
          }} >
          <Image
            style={ globalStyles.bottomNavigationIcon }
            source={ require('../../../assets/icons/explore_light.png') }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={ globalStyles.bottomNavigationButton }
          onPress={ () => {
            if (this.props.current !== 'Account') {
              this.props.navigation.navigate('Account');
            }
          }} >
          <Image
            style={ globalStyles.bottomNavigationIcon }
            source={ require('../../../assets/icons/account_light.png') }
          />
        </TouchableOpacity>

      </View>
    );
  }
}
