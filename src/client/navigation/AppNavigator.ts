import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromTop, fromRight, fromBottom, fromLeft } from 'react-navigation-transitions';
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

const handleTransition: any = ({ scene }) => {
  const params: any = { ...scene.route.params};
  const duration = 500;

  if (params.transition === 'top') {
    return fromTop(duration);
  }
  else if (params.transition === 'right') {
    return fromRight(duration);
  }
  else if (params.transition === 'bottom') {
    return fromBottom(duration);
  }
  else if (params.transition === 'left') {
    return fromLeft(duration);
  }
  return disabledTransition;
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
