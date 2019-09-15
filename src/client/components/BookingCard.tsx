import React from 'react';
import moment from 'moment';
import { Text, View, TouchableOpacity } from 'react-native';
import { IBookingData } from '../../server/models/booking';
import globalStyles from '../styles/global';
import styles from '../styles/components/bookingCard';

interface IBookingCardProps {
  key: string;
  data: IBookingData;
  borderVisible: boolean;
}

export default class BookingCard extends React.Component<IBookingCardProps> {

  render() {
    return (
      <View style={ this.props.borderVisible ? styles.bottomBorder : {} } >

        <TouchableOpacity
          style={ styles.cardContainer } >
            <Text>{ moment(this.props.data.date).format('dddd, DD/MM/YY') }</Text>
            <Text>{ moment(this.props.data.date).format('hh:mm a') }</Text>
            <Text>{ this.props.data.shopName }</Text>

        </TouchableOpacity>

      </View>
    );
  }
}
