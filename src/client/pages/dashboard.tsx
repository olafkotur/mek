import React from 'react';
import { SafeAreaView, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { ShopController } from '../../server/controllers/shop';
import { IShopData } from '../../server/models/shop';
import ShopCardContainer from '../components/ShopCardContainer';
import globalStyles from '../styles/global';
import styles from '../styles/dashboard';

interface IDashBoardProps {
  navigation: any;
}
interface IDashBoardState {
  location: string;
  cardData: IShopData[];
}

export default class DashBoard extends React.Component<IDashBoardProps> {

  state: IDashBoardState = {
    location: null,
    cardData: [],
  };

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleLocationSearch = async () => {
    if (!this.state.location) {
      console.log('Location data was not provided, skipping');
      return false;
    }

    this.setState({
      cardData: await ShopController.getShopDataByLocation(this.state.location),
    });
  }

  render() {
    return (
      <SafeAreaView style={ globalStyles.container }>

        <View style={ globalStyles.rowFlexContainer }>
          <TextInput
            style={ styles.locationInput }
            placeholder={ 'Post Code' }
            onChangeText={ (e) => this.handleChange('location', e) }
          />
          <TouchableOpacity
            style={ styles.accountButton }
            onPress={ () => this.props.navigation.navigate('Account') } >
            <Image source={ require('../../../assets/icons/account.png') } />
          </TouchableOpacity>
        </View>

        <ShopCardContainer
          data={ this.state.cardData }
        />

      </SafeAreaView>
    );
  }
}
