import React from 'react';
import moment from 'moment';
import { Text, View, TouchableOpacity } from 'react-native';
import { IBookingWithShopData } from '../../server/models/booking';
import globalStyles from '../styles/global';
import styles from '../styles/components/bookingCard';

interface IBookingCardProps {
  key: string;
  data: IBookingWithShopData;
  borderVisible: boolean;
}

export default class BookingCard extends React.Component<IBookingCardProps> {

  render() {
    return (
      <View style={ styles.bottomBorder } >

        <TouchableOpacity
          style={ styles.cardContainer } >
            <Text>{ moment(this.props.data.requestedDate).format('dddd, DD/MM/YY') }</Text>
            <Text>{ moment(this.props.data.requestedDate).format('hh:mm a') }</Text>
            <Text>{ this.props.data.shopData.name }</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
