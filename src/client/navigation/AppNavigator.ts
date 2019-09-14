import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';
import Account from '../pages/account';
import ShopDetails from '../pages/shopDetails';

const transitionConfig: any = () => ({
  transitionSpec: {
    duration: 0,
    easing: Easing.step0,
    timing: Animated.timing,
  },
});

export default createAppContainer(
  createStackNavigator({
    Login,
    DashBoard,
    Account,
    ShopDetails,
  }, { transitionConfig }),
);
