import React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from '../styles/dashboard';
import { IShopData } from '../../server/models/shop';
import ShopCard from './ShopCard';

interface IShopCardProps {
  data: IShopData[];
}

export default class ShopCardContainer extends React.Component<IShopCardProps> {

  shopCards: JSX.Element[] = [];

  updateShopCards = () => {
    this.shopCards = [];
    this.props.data.forEach((data: any, i: number) => {
      this.shopCards.push(
        <ShopCard
          key={`card-${i}`}
          data={{ ...data }}
        />,
      );
    });
  }

  render() {
    this.updateShopCards();
    return (
      <ScrollView
        showsVerticalScrollIndicator={ false }
        showsHorizontalScrollIndicator={ false }
        contentContainerStyle={ styles.shopCardScrollContainer } >
        { this.shopCards }
      </ScrollView>
    );
  }
}
