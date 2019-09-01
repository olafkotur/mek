import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationInput: {
    height: 40,
    width: deviceWidth * 0.8,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
  },
});