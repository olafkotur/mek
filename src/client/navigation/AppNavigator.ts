import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';
import Account from '../pages/account';
import ShopDetails from '../pages/shopDetails';

export default createAppContainer(
  createStackNavigator({
    Login,
    DashBoard,
    Account,
    ShopDetails,
  }),
);
