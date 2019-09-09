import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({

  shopDetailsContainer: {
    marginTop: deviceWidth * 0.05,
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.85,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
  },

  bookAppointmentButton: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#0984e3',
    bottom: deviceWidth * 0.05,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  bookAppointmentText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  backButton: {
    marginTop: 15,
    marginLeft: 15,
    width: 25,
    height: 25,
  },

  mediaGalleryContainer: {
    marginTop: deviceWidth * 0.05,
    borderRadius: 5,
    alignSelf: 'center',
    width: deviceWidth * 0.8,
    height: deviceWidth * 0.8,
  },

  shopName: {
    marginTop: 15,
    fontSize: 20,
  },

  descriptionText: {
    marginTop: 5,
    marginHorizontal: deviceWidth * 0.05 + 10,
    color: '#636e72',
  },

  mapPinIcon: {
    width: 25,
    height: 25,
    marginLeft: deviceWidth * 0.05 + 5,
    marginRight: 3,
    marginTop: 15,
    alignSelf: 'center',
  },

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

  sendBookingButton: {
    height: 40,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#0984e3',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});
