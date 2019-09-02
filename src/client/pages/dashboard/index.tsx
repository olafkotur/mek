import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Styles from './styles';
import { ShopController } from '../../../server/controllers/shop';
import { IShopData } from '../../../server/models/shop';

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
    this.shopData = await ShopController.getShopDataByLocation(this.state.location);
    this.setState({});
  }

  updateShopCards = () => {
    this.shopCards = [];
    this.shopData.forEach((data: any, i: number) => {
      this.shopCards.push(
        <View key={i}>
          <Text>{ data.name }</Text>
        </View>,
      );
    });
  }

  render() {
    this.updateShopCards();

    return (
      <View style={ Styles.container }>
        <View>
          <TextInput
            style={ Styles.locationInput }
            placeholder={ 'location' }
            onChangeText={ (e) => this.handleChange('location', e) }
          />
          <Button
            title={ 'Go' }
            onPress={ () => this.handleLocationSearch() }
          />
        </View>

        { this.shopCards }

      </View>
    );
  }
}
