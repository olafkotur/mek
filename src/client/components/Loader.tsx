import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/global';
import styles from '../styles/components/loader';

export default class Loader extends React.Component {
  render() {
    return (
      <LinearGradient
        style={ globalStyles.containerCenter }
        colors={['#536976', '#292E49']}>
        <Image
          style={ styles.loader }
          source={ require('../../../assets/loader.gif')}
        />
      </LinearGradient>
    );
  }
}
