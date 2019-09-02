import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Styles from './styles';
import ShopController from '../../../server/controllers/shop';

export default class Home extends React.Component {

  state = {
    location: null,
  };

  shopData = [];
  shopCards = [];

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleLocationSearch = async () => {
    this.shopData = await ShopController.getShopDataByLocation(this.state.location);
    this.setState({});
  }

  refreshShopCards = () => {
    console.log(this.shopCards);
    this.shopData.forEach((data) => {
      this.shopCards.push(
        <View>
          <Text>{ data.name }</Text>
        </View>,
      );
    });
  }

  render() {
    this.refreshShopCards();
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
