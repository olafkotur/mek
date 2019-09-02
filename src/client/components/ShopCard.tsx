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
        <Text>Distance: { this.props.data.distance }</Text>
        <Text>Rating: { this.props.data.rating }</Text>
        <Text>Reviews: { this.props.data.numberOfReviews }</Text>
      </View>
    );
  }
}
