import React from 'react';
import { View, DatePickerIOS, TextInput, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/components/bookingForm';
import { IShopDataWithColor } from '../../server/models/shop';
import moment from 'moment';
import { IBookingData } from '../../server/models/booking';

interface IBookingFormProps {
  data: IShopDataWithColor;
  handleCloseAppointment: (data: IBookingData | null) => void;
}

interface IBookingFormState {
  showDatePicker: boolean;
  date: Date;
  description: string;
}

export default class BookingForm extends React.Component<IBookingFormProps> {

  state: IBookingFormState = {
    showDatePicker: false,
    date: new Date(),
    description: '',
  };

  handleDateChange = (date: Date) => {
    this.setState({ date });
  }

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleSendBooking = () => {
    if (!this.state.date || !this.state.description) {
      return false;
    }

    const data: IBookingData = {
      date: this.state.date,
      description: this.state.description,
    };
    this.props.handleCloseAppointment(data);
  }

  handleCancelBooking = () => {
    this.props.handleCloseAppointment(null);
  }

  render() {
    return (
      <View style={ styles.bookingFormContainer } >

        <TouchableOpacity
          style={ styles.bookingInput }
          onPress={ () => this.setState({ showDatePicker: !this.state.showDatePicker })} >
          <Text style={ styles.bookingInputText}>{ moment(this.state.date).format('D MMMM YYYY, hh:mm a') }</Text>
        </TouchableOpacity>

        { this.state.showDatePicker &&
          <DatePickerIOS
            date={ this.state.date }
            onDateChange={ this.handleDateChange }
          />
        }

        <TextInput
          multiline={ true }
          numberOfLines={ 5 }
          style={ styles.bookingInputBig }
          value={ this.state.description }
          onChangeText={ (e) => this.handleChange('description', e) }
          placeholder={ 'Description of what needs to be looked at' }
        />

        <View style={ styles.sendBookingButtonContainer }>
          <TouchableOpacity
            onPress={ () => this.handleSendBooking() }
            style={ styles.sendBookingButton }>
            <Text style={ styles.bookAppointmentText }>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.cancelBookAppointmentButton }
            onPress={ () => this.handleCancelBooking() } >
            <Text style={ styles.cancelBookAppointmentText }>Cancel</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
