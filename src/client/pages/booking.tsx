import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import DropDownAlert from 'react-native-dropdownalert';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavigation from '../components/BottomNavigation';
import BookingContainer from '../components/BookingContainer';
import globalStyles from '../styles/global';
import styles from '../styles/pages/booking';

interface IBookingProps {
  navigation: any;
}

export default class Booking extends React.Component<IBookingProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  dropDownAlertRef: any;

  // TODO: Add service for booking data
  data = [
    {
      date: new Date(),
      description: 'Uno',
    },
    {
      date: new Date(),
      description: 'Duo',
    },
    {
      date: new Date(),
      description: 'Trio',
    },
  ];

render() {
    return (
        <LinearGradient
          style={ globalStyles.container }
          colors={['#536976', '#292E49']}>

          <StatusBar barStyle='light-content' />

          <SafeAreaView>

            <View style={ styles.bookingContainer }>

              <BookingContainer data={ this.data } />

            </View>

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
