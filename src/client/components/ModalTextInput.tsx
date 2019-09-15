import React from 'react';
import { Text, View, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/components/modalTextInput';

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

        <KeyboardAvoidingView
          contentContainerStyle={ globalStyles.keyboardAvoidContainerCenter }
          behavior={ 'padding' }
          enabled >

          <View style={ styles.inputContainer }>

            <View style={ { ...globalStyles.rowFlexContainer, justifyContent: 'center' } } >
              <TextInput
                style={ styles.textInput }
                value={ this.props.textValue }
                onChangeText={ (event) => this.props.handleChange(event) }
                placeholder={ this.props.focus }
                secureTextEntry={ this.props.focus === 'Password' }
              />

              <TouchableOpacity
                onPress={ () => this.props.handleConfirm() }
                style={ styles.confirmButton }>
                <Text style={ styles.confirmButtonText }>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={ styles.cancelButtonContainer }>
              <TouchableOpacity
                style={ styles.cancelButton }
                onPress={ () => this.props.handleCancel() } >
                <Text style={ styles.cancelText }>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>

        </KeyboardAvoidingView>

        <TouchableOpacity
          style={ styles.transparentButton }
          onPress={ () => this.props.handleCancel() }
        />

      </Modal>
    );
  }
}
