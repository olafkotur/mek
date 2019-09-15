import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../styles/components/bookingContainer';
import { IBookingWithShopData } from '../../server/models/booking';
import BookingCard from './BookingCard';

interface IBookingContainerProps {
  data: IBookingWithShopData[];
}

export default class BookingContainerContainer extends React.Component<IBookingContainerProps> {

  bookings: JSX.Element[] = [];

  updateBookings = () => {
    this.bookings = [];
    this.props.data.forEach((data: any, i: number) => {
      this.bookings.push(
        <BookingCard
          key={`book-${i}`}
          data={{ ...data }}
          borderVisible={ i === this.props.data.length - 1 ? false : true }
        />,
      );
    });
  }

  render() {
    this.updateBookings();
    return (
      <ScrollView
        contentContainerStyle={ styles.scrollContainer }
        showsVerticalScrollIndicator={ false }
        showsHorizontalScrollIndicator={ false } >
        { this.bookings }
      </ScrollView>
    );
  }
}
