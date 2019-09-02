import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    DashBoard,
  }),
);
