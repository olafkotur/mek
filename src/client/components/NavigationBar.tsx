import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import globalStyles from '../styles/global';

interface INavigationBarProps {
  navigation: any;
  title: string;
  return: string;
}

export default class NavigationBar extends React.Component<INavigationBarProps> {

  render() {
    return (
      <View style={ globalStyles.navBarContainer } >

        <View style={ globalStyles.navBarTitleContainer }>
          <Text style={ globalStyles.navBarTitle }>{ this.props.title }</Text>
        </View>

        <TouchableOpacity
          style={ globalStyles.navBarBackButton }
          onPress={ () => this.props.navigation.navigate(this.props.return) } >
          <Image
            style={ globalStyles.navBarBackButton }
            source={ require('../../../assets/icons/back_light.png') }
          />
        </TouchableOpacity>

      </View>
    );
  }
}
