import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from '../styles/dashboard';
import { IShopData } from '../../server/models/shop';
import Rating from './Rating';

interface IShopCardProps {
  data: IShopData;
}

export default class ShopCard extends React.Component<IShopCardProps> {
  render() {
    return (
      <View style={ styles.shopCardContainer }>
        <View style={ styles.shopCardContentContainer }>
          <Text>Name: { this.props.data.name }</Text>
          <Text>Lat: { this.props.data.location.lat }</Text>
          <Text>Long: { this.props.data.location.long }</Text>
          <Rating value={ this.props.data.rating || 0 } />
        </View>
      </View>
    );
  }
}
