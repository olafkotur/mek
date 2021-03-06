import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, Image, StatusBar } from 'react-native';
import { IShopDataWithColor, IShopData } from '../../server/models/shop';
import { LinearGradient } from 'expo-linear-gradient';
import { LocationService } from '../../server/services/location';
import { BookingService } from '../../server/services/booking';
import BookingForm from '../components/BookingForm';
import { IBookingData, IBookingWithShopData } from '../../server/models/booking';
import DropDownAlert from 'react-native-dropdownalert';
import globalStyles from '../styles/global';
import styles from '../styles/pages/shopDetails';
import { IStatusWithCode } from '../../server/models/request';

interface IShopDetailsProps {
  navigation: any;
}

interface IShopDetailsState {
  isBooking: boolean;
}

export default class ShopDetails extends React.Component<IShopDetailsProps> {

  static navigationOptions = {
    header: null,
  };

  state: IShopDetailsState = {
    isBooking: false,
  };

  scrollViewRef: any;
  dropDownAlertRef: any;
  data: IShopDataWithColor = this.props.navigation.getParam('shopDetailsData');

  handleShowInMaps = () => {
    LocationService.showInMapsWithCoords(this.data.location);
  }

  handleOpenAppointment = () => {
    const data = { ...this.data };
    delete data.color;
    this.setState({ isBooking: true });
    setTimeout(() => this.scrollViewRef.scrollToEnd(), 100);
  }

  handleCloseAppointment = async (d: IBookingData | null) => {
    if (!d) {
      this.setState({ isBooking: false });
      setTimeout(() => this.scrollViewRef.scrollTo({ x: 0, y: 0 }), 100);
      return false;
    }

    const res: IStatusWithCode = await BookingService.saveBookingInDb(d);
    if (!res) {
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', 'There was a problem with the booking, please try again');
      return false;
    }

    const data: IBookingWithShopData = {
      uid: d.uid,
      shopId: d.shopId,
      description: d.description,
      bookingDate: d.bookingDate,
      requestedDate: d.requestedDate,
      shopData: { ...this.data },
    };
    this.setState({ isBooking: false });
    setTimeout(() => this.scrollViewRef.scrollTo({ x: 0, y: 0 }), 100);

    BookingService.sendBookingMessageWithData(data);
    this.dropDownAlertRef.alertWithType('info', 'Sent', 'Your booking was successful');
  }

  render() {
    return (
      <LinearGradient
        style={ globalStyles.container }
        colors={['#536976', '#292E49']}>

        <StatusBar barStyle='light-content' />

        <SafeAreaView>

          <ScrollView
            ref={ (ref) => this.scrollViewRef = ref }
            showsVerticalScrollIndicator={ false }
            showsHorizontalScrollIndicator={ false } >

            <View style={ styles.shopDetailsContainer }>

              <TouchableOpacity
                onPress={ () => this.props.navigation.navigate('DashBoard', { transition: 'right' }) } >
                <Image
                  style={ styles.backButton }
                  source={ require('../../../assets/icons/back_dark.png') } />
              </TouchableOpacity>

              <View style={ { ...styles.mediaGalleryContainer, backgroundColor: this.data.color } }>
              </View>

              <View style={ globalStyles.rowFlexContainer }>
                <TouchableOpacity
                  onPress={ () => this.handleShowInMaps() }>
                  <Image
                    style={ styles.mapPinIcon }
                    source={ require('../../../assets/icons/map_pin_dark.png') }
                  />
                </TouchableOpacity>
                <Text style={ styles.shopName }>{ this.data.name }</Text>
              </View>

              <Text style={ styles.descriptionText }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Text>

            </View>

            <TouchableOpacity
              onPress={ () => this.handleOpenAppointment() }
              style={ styles.bookAppointmentButton }>
              <Text style={ styles.bookAppointmentText }>Book Appointment</Text>
            </TouchableOpacity>

            { this.state.isBooking &&
            <BookingForm
              data={ this.data }
              handleCloseAppointment={ this.handleCloseAppointment }
            /> }

          </ScrollView>

        </SafeAreaView>

        <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

      </LinearGradient>
    );
  }
}
