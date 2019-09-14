import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import globalStyles from '../styles/global';

interface IHeadNavigationProps {
  navigation: any;
  title: string;
  return: string;
}

export default class HeadNavigation extends React.Component<IHeadNavigationProps> {

  render() {
    return (
      <View style={ globalStyles.navBarContainer } >

        <View style={ globalStyles.navBarTitleContainer }>
          <Text style={ globalStyles.navBarTitle }>{ this.props.title }</Text>
        </View>

        {/* <TouchableOpacity
          style={ globalStyles.navBarBackButton }
          onPress={ () => this.props.navigation.navigate(this.props.return) } >
          <Image
            style={ globalStyles.navBarBackButton }
            source={ require('../../../assets/icons/back_light.png') }
          />
        </TouchableOpacity> */}

      </View>
    );
  }
}
