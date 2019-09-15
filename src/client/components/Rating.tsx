import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/components/rating';

interface IRatingProps {
  value: number;
  numberOfReviews: number;
}

export default class Rating extends React.Component<IRatingProps> {

  stars: JSX.Element[] = [];
  emptyStar = require('../../../assets/icons/star_empty.png');
  halfStar = require('../../../assets/icons/star_half.png');
  fullStar = require('../../../assets/icons/star_full.png');

  componentWillMount = () => {
    this.stars = [];
    let starValue = this.props.value;
    for (let i = 0; i < 5; i++) {
      if (starValue >= 1) {
        this.stars.push(<Image key={`star-${i}`} style={ styles.star } source={ this.fullStar } />);
        starValue--;
      }
      else if (starValue < 1 && starValue > 0) {
        this.stars.push(<Image key={`star-${i}`} style={ styles.star } source={ this.halfStar } />);
        starValue -= starValue;
      }
      else if (starValue <= 0) {
        this.stars.push(<Image key={`star-${i}`} style={ styles.star } source={ this.emptyStar } />);
      }
    }
    this.stars.push(
      <Text key={`numberOfReviews`} style={ styles.numberOfReviewsText } >
        { this.props.numberOfReviews }
      </Text>);
  }

  render() {
    return (
      <View style={ styles.starContainer }>
        { this.stars }
      </View>
    );
  }
}
