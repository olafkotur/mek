import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../styles/components/headNavigation';

interface IHeadNavigationProps {
  title: string;
  buttonVisible?: boolean;
  onBackPress?: () => void;
}

export default class HeadNavigation extends React.Component<IHeadNavigationProps> {

  render() {
    return (
      <View style={ styles.barContainer } >

        <View style={ styles.titleContainer }>
          <Text style={ styles.title }>{ this.props.title }</Text>
        </View>

        { this.props.buttonVisible && <TouchableOpacity
          style={ styles.backButton }
          onPress={ () => this.props.onBackPress() } >
          <Image
            style={ styles.backButton }
            source={ require('../../../assets/icons/back_light.png') }
          />
        </TouchableOpacity> }

      </View>
    );
  }
}
