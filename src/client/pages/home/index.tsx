import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Styles from './styles';
import ShopCard from '../../components/ShopCard';
import ShopController from '../../../server/controllers/shop';

export default class Home extends React.Component {

  state = {
    location: null,
  }

  shopData = [];
  shopCards = [];

  handleChange = (type, event) => {
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
        </View>
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
            onChangeText={ (e) => this.handleChange(e) }
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