import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global';
import styles from '../styles/dashboard';
import { IShopData } from '../../server/models/shop';
import Rating from './Rating';

interface IShopCardProps {
  colorIndex: number;
  data: IShopData;
}

export default class ShopCard extends React.Component<IShopCardProps> {

  flatColors: string[] = ['#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1', '#5f27cd', '#f368e0', '#273c75'];

  render() {
    return (
      <View style={ styles.shopCardContainer }>

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
          {/* <TouchableOpacity
            style={ styles.cardBookAppointmentButton }>
            <Text style={ styles.cardBookAppointmentText }>Details</Text>
          </TouchableOpacity> */}
        </View>

      </View>
    );
  }
}
