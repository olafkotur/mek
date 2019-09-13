import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/shopDetails';

interface IModalTextInputProps {
  visible: boolean;
  textValue: string;
  focus: string;
  handleChange: (event: string) => void;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export default class ModalTextInput extends React.Component<IModalTextInputProps> {
  render() {
    return (
      <Modal
        transparent
        animationType={ 'slide' }
        visible={ this.props.visible }>

        <View style={ globalStyles.modalInputContainer }>

          <View style={ { ...globalStyles.rowFlexContainer, justifyContent: 'center' } } >
            <TextInput
              style={ globalStyles.modalTextInput }
              value={ this.props.textValue }
              onChangeText={ (event) => this.props.handleChange(event) }
              placeholder={ this.props.focus }
              secureTextEntry={ this.props.focus === 'Password' }
            />

            <TouchableOpacity
              onPress={ () => this.props.handleConfirm() }
              style={ globalStyles.modalInputButton }>
              <Text style={ styles.bookAppointmentText }>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={ styles.sendBookingButtonContainer }>
            <TouchableOpacity
              style={ styles.cancelBookAppointmentButton }
              onPress={ () => this.props.handleCancel() } >
              <Text style={ styles.cancelBookAppointmentText }>Cancel</Text>
            </TouchableOpacity>
          </View>

        </View>

        <TouchableOpacity
          style={ globalStyles.modalTransparentButton }
          onPress={ () => this.props.handleCancel() }
        />

      </Modal>
    );
  }
}
