import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import globalStyles from '../styles/global';

interface IInfoBoxProps {
  visible: boolean;
}

export default class InfoBox extends React.Component<IInfoBoxProps> {
  render() {
    return (
      <Modal
        transparent
        animationType={ 'slide' }
        visible={ this.props.visible }>
        <View style={ globalStyles.infoBoxContainer }>
          <Text style={ globalStyles.infoBoxText }>Hello Modal</Text>
        </View>
      </Modal>
    );
  }
}
