import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  bookingFormContainer: {
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.3,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  bookingInputText: {
    color: '#636e72',
    textAlign: 'center',
  },

  bookingInput: {
    marginTop: 25,
    width: (deviceWidth * 0.8) - 12.5,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#636e72',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  bookingInputBig: {
    marginTop: 15,
    width: (deviceWidth * 0.8) - 12.5,
    height: (deviceHeight * 0.3) - (40 + 25 + 30 + 40 + 15),
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#636e72',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  sendBookingButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  sendBookingButton: {
    height: 40,
    marginTop: 15,
    marginLeft: 75,
    borderRadius: 5,
    backgroundColor: '#0984e3',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  bookAppointmentText: {
    color: '#fff',
  },

  cancelBookAppointmentButton: {
    width: 75,
    marginLeft: 10,
    justifyContent: 'center',
  },

  cancelBookAppointmentText: {
    color: '#636e72',
    marginTop: 10,
  },
});
