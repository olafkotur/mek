import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, NetInfo, StatusBar } from 'react-native';
import { ShopService } from '../../server/services/shop';
import { IShopData, IShopDataWithColor } from '../../server/models/shop';
import { ICoordsWithName, ICoords } from '../../server/models/location';
import ShopCardContainer from '../components/ShopCardContainer';
import globalStyles from '../styles/global';
import styles from '../styles/dashboard';
import DropDownAlert from 'react-native-dropdownalert';
import { LocationService } from '../../server/services/location';
import Loader from '../components/Loader';
import SimpleLoader from '../components/SimpleLoader';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNavigation from '../components/BottomNavigation';

interface IDashBoardProps {
  navigation: any;
}
interface IDashBoardState {
  isUpdating: boolean;
  isFetchingNewData: boolean;
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
    isFetchingNewData: false,
    location: null,
    cardData: [],
  };

  dropDownAlertRef: any;

  componentDidMount = async () => {
    const coords: ICoords = await LocationService.getCurrentLocation();
    this.setState({ location: { name: 'Current Location', ...coords } });
    await this.handleLocationSearch();
    this.setState({ isUpdating: false });
  }

  attemptLocalStorage = async (): Promise<boolean> => {
    const stored: any = await ShopService.retrieveShopData();
    if (!stored) {
      return false;
    }

    this.setState({ cardData: stored });
    return true;
  }

  handleLocationSearch = async () => {
    if (!this.state.isUpdating) {
      this.setState({ isFetchingNewData: true });
    }

    const isConnectedToInternet = await NetInfo.isConnected.fetch();
    if (!isConnectedToInternet) {
      this.dropDownAlertRef.alertWithType('error', 'Uh-oh', 'We can\'t seem to connect to the internet');
      return false;
    }

    if (!this.state.location) {
      return false;
    }

    const data: IShopData[] = await ShopService.getShopDataByLocation(this.state.location);
    this.setState({ cardData: data });
    setTimeout(() => this.setState({ isFetchingNewData: false }), 500);
  }

  handleShowCardDetails = (data: IShopDataWithColor) => {
    if (!data) {
      return false;
    }
    this.props.navigation.navigate('ShopDetails', { shouldTransition: true, shopDetailsData: data });
  }

  handleChange = (type: string, event: any) => {
    this.setState({ [type]: event });
  }

  render() {
    if (this.state.isUpdating) {
      return <Loader />;
    }
    else {
      return (
          <LinearGradient
            style={ globalStyles.container }
            colors={['#536976', '#292E49']}>

            <StatusBar barStyle='light-content' />

            <SafeAreaView style={{ justifyContent: 'flex-start'}}>

              <View style={ styles.dashboardBarContainer }>

                <View style={ styles.location }>
                  <Text style={ styles.locationText }>{ this.state.location ? this.state.location.name.toUpperCase() : 'CURRENT LOCATION' }</Text>
                  <TouchableOpacity
                    onPress={ () => this.handleLocationSearch() } >
                    <Image
                      style={ styles.locationIcon }
                      source={ require('../../../assets/icons/refresh_light.png') }
                    />
                  </TouchableOpacity>
                </View>

              </View>

              { (this.state.cardData && !this.state.isFetchingNewData) && <ShopCardContainer
                data={ this.state.cardData }
                handleShowCardDetails={ this.handleShowCardDetails }
              /> }

            </SafeAreaView>

            <BottomNavigation
              current={ 'DashBoard' }
              navigation={ this.props.navigation }
            />

            { this.state.isFetchingNewData && <SimpleLoader /> }

            <DropDownAlert ref={ (ref) => this.dropDownAlertRef = ref } />

          </LinearGradient>
      );
    }
  }
}
