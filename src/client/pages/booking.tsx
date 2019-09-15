import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import DropDownAlert from 'react-native-dropdownalert';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavigation from '../components/BottomNavigation';
import BookingContainer from '../components/BookingContainer';
import { IBookingWithShopData, IBookingData } from '../../server/models/booking';
import globalStyles from '../styles/global';
import styles from '../styles/pages/booking';
import { BookingService } from '../../server/services/booking';
import { ShopService } from '../../server/services/shop';
import { IShopData } from '../../server/models/shop';

interface IBookingProps {
  navigation: any;
}

interface IBookingState {
  data: IBookingWithShopData[];
}

export default class Booking extends React.Component<IBookingProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  state = {
    data: null,
  };

  dropDownAlertRef: any;

  componentWillMount = async () => {
    const bookingData: IBookingData[] = await BookingService.fetchBookingsFromDb();
    const shopData: IShopData[] = await ShopService.getShopData();

    const data = [];
    bookingData.forEach((booking: any, i) => {
      const filtered: IShopData = shopData.find((shop: IShopData) => shop.id === booking.shopId);
      booking.bookingDate = booking.bookingDate.toDate();
      booking.requestedDate = booking.requestedDate.toDate();
      data.push({ ...booking, shopData: filtered });
    });
    this.setState({ data });
  }

  render() {
    return (
        <LinearGradient
          style={ globalStyles.container }
          colors={['#536976', '#292E49']}>

          <StatusBar barStyle='light-content' />

          <SafeAreaView>

            <View style={ styles.bookingContainer }>

              { this.state.data && <BookingContainer data={ this.state.data } /> }

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
