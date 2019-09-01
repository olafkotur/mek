import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../client/pages/login';
import Home from '../client/pages/home';

export default createAppContainer(
  createSwitchNavigator({
    Login: Login,
    Home: Home,
  })
);