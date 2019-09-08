import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/shopDetails';
import { IShopDataWithColor } from '../../server/models/shop';
import { LinearGradient } from 'expo-linear-gradient';
import { LocationService } from '../../server/services/location';
import { ICoords } from '../../server/models/location';

interface IShopDetailsProps {
  navigation: any;
}

export default class ShopDetails extends React.Component<IShopDetailsProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  data: IShopDataWithColor = this.props.navigation.getParam('shopDetailsData');

  handleShowInMaps = () => {
    LocationService.showInMapsWithCoords(this.data.location);
  }

  handleBookAppointment = () => {
    console.log(`Booking appointment for ${this.data.name}`);
  }

  render() {
    return (
      <LinearGradient
        style={ globalStyles.container }
        colors={['#536976', '#292E49']}>

        <SafeAreaView>

          <ScrollView
            showsVerticalScrollIndicator={ false }
            showsHorizontalScrollIndicator={ false }
            contentContainerStyle={ styles.shopDetailsScrollContainer }>

            <View style={ styles.shopDetailsContainer }>

              <TouchableOpacity
                onPress={ () => this.props.navigation.goBack() } >
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
              onPress={ () => this.handleBookAppointment() }
              style={ styles.bookAppointmentButton }>
              <Text style={ styles.bookAppointmentText }>Book Appointment</Text>
            </TouchableOpacity>

          </ScrollView>

        </SafeAreaView>

      </LinearGradient>
    );
  }
}
