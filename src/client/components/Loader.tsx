import React from 'react';
import { View, Image } from 'react-native';
import globalStyles from '../styles/global';

export default class Loader extends React.Component {
  render() {
    return (
      <View style={ globalStyles.containerCenter }>
        <Image
          style={ globalStyles.loader }
          source={ require('../../../assets/loader.gif')}
        />
      </View>
    );
  }
}
