import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
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
      <View style={ globalStyles.container }>
        <View>
          <TextInput
            style={ styles.locationInput }
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
