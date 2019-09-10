import React from 'react';
import { View, Image } from 'react-native';
import globalStyles from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';

export default class Loader extends React.Component {
  render() {
    return (
      <LinearGradient
        style={ globalStyles.containerCenter }
        colors={['#536976', '#292E49']}>
        <Image
          style={ globalStyles.loader }
          source={ require('../../../assets/loader.gif')}
        />
      </LinearGradient>
    );
  }
}
