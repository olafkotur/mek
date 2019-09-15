import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  groupSettingContainer: {
    marginBottom: 30,
    width: deviceWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  scrollViewContainer: {
    marginTop: 40,
  },

  settingContainerWithoutBorder: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  settingContainerWithBorder: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',
  },

  settingTextContainer: {
    width: (deviceWidth * 0.9) - deviceWidth * 0.5,
    justifyContent: 'center',
  },

  settingButton: {
    height: 50,
    width: deviceWidth * 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  settingText: {
    textAlign: 'left',
    marginLeft: 20,
  },

  forwardIcon: {
    marginRight: 25,
    width: 25,
    height: 25,
  },
});
