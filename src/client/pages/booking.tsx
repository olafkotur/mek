import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import globalStyles from '../styles/global';
import DropDownAlert from 'react-native-dropdownalert';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavigation from '../components/BottomNavigation';

interface IBookingProps {
  navigation: any;
}

export default class Booking extends React.Component<IBookingProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  dropDownAlertRef: any;

  render() {
    return (
        <LinearGradient
          style={ globalStyles.container }
          colors={['#536976', '#292E49']}>

          <StatusBar barStyle='light-content' />

          <SafeAreaView style={{ justifyContent: 'flex-start'}}>

            {/* Content */}

          </SafeAreaView>

          <BottomNavigation
            current={ 'Booking' }
            navigation={ this.props.navigation }
          />

          <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

        </LinearGradient>
    );
  }
}
