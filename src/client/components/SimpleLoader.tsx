import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/components/simpleLoader';

export default class SimpleLoader extends React.Component {
  render() {
    return (
      <View style={ styles.loaderContainer }>
        <Image
          style={ styles.loader }
          source={ require('../../../assets/loader.gif')}
        />
      </View>
    );
  }
}
