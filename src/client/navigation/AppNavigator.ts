import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';
import Account from '../pages/account';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    DashBoard,
    Account,
  }),
);
