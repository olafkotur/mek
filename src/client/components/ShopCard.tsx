import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/dashboard';
import { IShopDataWithColor } from '../../server/models/shop';
import Rating from './Rating';

interface IShopCardProps {
  colorIndex: number;
  data: IShopDataWithColor;
  handleShowCardDetails: (data: IShopDataWithColor) => void;
}

export default class ShopCard extends React.Component<IShopCardProps> {

  flatColors: string[] = ['#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1', '#5f27cd', '#f368e0', '#273c75'];

  handleShowCardDetails = (data: IShopDataWithColor) => {
    this.props.handleShowCardDetails(data);
  }

  render() {
    return (
      <TouchableOpacity
        style={ styles.shopCardContainer }
        onPress={ () =>  this.handleShowCardDetails({
            ...this.props.data,
            color: this.flatColors[this.props.colorIndex],
          }) }>

        <View style={ { ...styles.cardLogoStrip, backgroundColor: this.flatColors[this.props.colorIndex] } } />

        <View style={ styles.shopCardContentContainer }>
          <Text style={ styles.shopCardName }>{ this.props.data.name }</Text>

          <Text style={ globalStyles.lightText }>
            { this.props.data.address.buildingName
            ? `${this.props.data.address.buildingName} ${this.props.data.address.street}`
            : this.props.data.address.street }
          </Text>
          <Text style={ globalStyles.lightText }>{ this.props.data.address.city }</Text>
          <Text style={ globalStyles.lightText }>{ this.props.data.address.postCode.toUpperCase() }</Text>

          <Rating
            numberOfReviews={ this.props.data.numberOfReviews }
            value={ this.props.data.rating || 0 }
          />
        </View>

      </TouchableOpacity>
    );
  }
}
