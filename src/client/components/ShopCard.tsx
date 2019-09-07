import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from '../styles/dashboard';
import { IShopData } from '../../server/models/shop';

interface IShopCardProps {
  data: IShopData;
}

export default class DashBoard extends React.Component<IShopCardProps> {
  render() {
    return (
      <View style={ styles.shopCardBox }>
        <Text>Name: { this.props.data.name }</Text>
        <Text>Lat: { this.props.data.location.lat }</Text>
        <Text>Long: { this.props.data.location.long }</Text>
      </View>
    );
  }
}
