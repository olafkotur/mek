import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, NetInfo } from 'react-native';
import { ShopController } from '../../server/controllers/shop';
import { IShopData } from '../../server/models/shop';
import { ICoordsWithName, ICoords } from '../../server/models/location';
import ShopCardContainer from '../components/ShopCardContainer';
import globalStyles from '../styles/global';
import styles from '../styles/dashboard';
import DropDownAlert from 'react-native-dropdownalert';
import { LocationService } from '../../server/services/location/location';
import Loader from '../components/Loader';

interface IDashBoardProps {
  navigation: any;
}
interface IDashBoardState {
  isUpdating: boolean;
  location: ICoordsWithName | null;
  cardData: IShopData[];
}

export default class DashBoard extends React.Component<IDashBoardProps> {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false,
  };

  state: IDashBoardState = {
    isUpdating: true,
    location: null,
    cardData: [],
  };

  dropDownAlertRef: any;

  componentDidMount = async () => {
    const coords: ICoords = await LocationService.getCurrentLocation();
    this.setState({ location: { name: 'Current Location', ...coords } });
    this.handleLocationSearch();
    setTimeout(() => this.setState({ isUpdating: false }), 0);
  }

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  handleLocationSearch = async () => {
    const isConnectedToInternet = await NetInfo.isConnected.fetch();
    if (!isConnectedToInternet) {
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', 'We can\'t seem to connect to the internet');
      return false;
    }

    if (!this.state.location) {
      return false;
    }

    this.setState({
      cardData: await ShopController.getShopDataByLocation(this.state.location),
    });
  }

  render() {
    if (this.state.isUpdating) {
      return <Loader />;
    }
    else {
      return (
          <SafeAreaView style={ globalStyles.container }>

            <View style={ globalStyles.rowFlexContainer }>

              <View style={ styles.location }>
                <Text style={ styles.locationText }>{ this.state.location ? this.state.location.name.toUpperCase() : 'CURRENT LOCATION' }</Text>
                <TouchableOpacity
                  onPress={ () => this.handleLocationSearch() } >
                  <Image
                    style={ styles.locationIcon }
                    source={ require('../../../assets/icons/refresh.png') }
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={ styles.accountButton }
                onPress={ () => this.props.navigation.navigate('Account') } >
                <Image
                  source={ require('../../../assets/icons/account.png') }
                  style={ styles.accountButtonIcon }
                />
              </TouchableOpacity>
            </View>

            <ShopCardContainer
              data={ this.state.cardData }
            />
            <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />
          </SafeAreaView>
      );
    }
  }
}
