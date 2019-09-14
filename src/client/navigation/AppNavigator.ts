import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';
import Booking from '../pages/booking';
import Account from '../pages/account';
import ShopDetails from '../pages/shopDetails';

const disabledTransition: any = {
  transitionSpec: {
    duration: 0,
    easing: Easing.step0,
    timing: Animated.timing,
  },
};

const handleTransition: any = ({ scene, scenes }) => {
  const params = { ...scene.route.params};
  const shouldTransition = params.shouldTransition ? true : false;

  if (!shouldTransition) {
    return disabledTransition;
  }
  return {};
};

export default createAppContainer(
  createStackNavigator({
    Login,
    DashBoard,
    Booking,
    Account,
    ShopDetails,
  }, { transitionConfig: (prop) => handleTransition(prop) }),
);
