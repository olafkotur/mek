import React from 'react';
import { View, Image } from 'react-native';
import globalStyles from '../styles/global';

export default class SimpleLoader extends React.Component {
  render() {
    return (
      <View style={ globalStyles.simpleLoaderContainer }>
        <Image
          style={ globalStyles.loader }
          source={ require('../../../assets/loader.gif')}
        />
      </View>
    );
  }
}
