import React from 'react';
import { ScrollView } from 'react-native';
import { IShopData, IShopDataWithColor } from '../../server/models/shop';
import ShopCard from './ShopCard';
import styles from '../styles/components/shopCardContainer';

interface IShopCardContainerProps {
  data: IShopData[];
  handleShowCardDetails: (data: IShopDataWithColor) => void;
}

export default class ShopCardContainer extends React.Component<IShopCardContainerProps> {

  shopCards: JSX.Element[] = [];

  updateShopCards = () => {
    this.shopCards = [];
    this.props.data.forEach((data: any, i: number) => {
      this.shopCards.push(
        <ShopCard
          colorIndex={ i < 8 ? i : i - 8 }
          key={`card-${i}`}
          data={{ ...data }}
          handleShowCardDetails={ this.props.handleShowCardDetails }
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
        contentContainerStyle={ styles.scrollContainer } >
        { this.shopCards }
      </ScrollView>
    );
  }
}
