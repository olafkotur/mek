import React from 'react';
import { TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { ShopController } from '../../server/controllers/shop';
import { IShopData } from '../../server/models/shop';
import ShopCard from '../components/ShopCard';
import globalStyles from '../styles/global';
import styles from '../styles/dashboard';

interface IDashBoardState {
  location: string;
}

export default class DashBoard extends React.Component {

  state: IDashBoardState = {
    location: null,
  };

  shopData: IShopData[] = [];
  shopCards: JSX.Element[] = [];

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleLocationSearch = async () => {
    if (!this.state.location) {
      console.log('Location data was not provided, skipping');
      return false;
    }
    this.shopData = await ShopController.getShopDataByLocation(this.state.location);
    this.setState({});
  }

  updateShopCards = () => {
    this.shopCards = [];
    this.shopData.forEach((data: any, i: number) => {
      this.shopCards.push(
        <ShopCard
          key={`card-${i}`}
          data={{ ...data }}
        />,
      );
    });
  }

  render() {
    this.updateShopCards();

    return (
      <ScrollView contentContainerStyle={ globalStyles.container }>
        <View style={ globalStyles.rowFlexContainer }>
          <TextInput
            style={ styles.locationInput }
            placeholder={ 'Post Code' }
            onChangeText={ (e) => this.handleChange('location', e) }
          />
          <TouchableOpacity
            style={ styles.locationButton }
            onPress={ () => this.handleLocationSearch() }
          />
        </View>

        { this.shopCards }

      </ScrollView>
    );
  }
}
