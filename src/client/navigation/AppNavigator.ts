import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';
import Account from '../pages/account';

export default createAppContainer(
  createStackNavigator({
    Login,
    DashBoard,
    Account,
  }),
);
