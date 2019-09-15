import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth * 0.9,
    height: 150,
    backgroundColor: '#f5f6fa',
    borderRadius: 5,
    flexDirection: 'row',
  },

  cardContentContainer: {
    padding: 15,
  },

  cardName: {
    fontSize: 20,
  },

  cardLogoStrip: {
    height: 150,
    width: 100,
    backgroundColor: 'green',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
