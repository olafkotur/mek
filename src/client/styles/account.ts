import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  groupSettingContainer: {
    marginBottom: 20,
  },

  settingButton: {
    flexDirection: 'row',
    width: deviceWidth,
    backgroundColor: '#fff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  settingTitle: {
    marginRight: 20,
  },
});
