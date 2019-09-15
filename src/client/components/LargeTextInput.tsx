import React from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/global';
import styles from '../styles/components/largeTextInput';
import HeadNavigation from './HeadNavigation';

interface ILargeTextInputProps {
  textValue: string;
  focus: string;
  handleChange: (event: string) => void;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export default class LargeTextInput extends React.Component<ILargeTextInputProps> {
  render() {
    return (
      <LinearGradient
        style={ globalStyles.container }
        colors={['#536976', '#292E49']}>

        <SafeAreaView>

          <HeadNavigation
            title={ this.props.focus }
            onBackPress={ this.props.handleCancel }
            buttonVisible={ true }
          />

          <TextInput
            style={ this.props.focus === 'Feedback' ? styles.textInputLarge : styles.textInput }
            value={ this.props.textValue }
            onChangeText={ (event) => this.props.handleChange(event) }
            placeholder={ this.props.focus }
            secureTextEntry={ this.props.focus === 'Password' }
            multiline={ this.props.focus === 'Feedback' }
          />

          <TouchableOpacity
            onPress={ this.props.handleConfirm }
            style={ styles.confirmButton } >
            <Text style={ styles.confirmButtonText } >Done</Text>
          </TouchableOpacity>

        </SafeAreaView>

      </LinearGradient>
    );
  }
}
