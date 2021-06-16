import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import formatDate from '../model/DateFormatter';

export default class OrderItem extends React.PureComponent {
  render() {
    const { movies, totalPrice, date } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.date}>{formatDate(date)}</Text>
        <Text style={styles.movies}>
          {`${movies.length} ${movies.length > 1 ? 'movies' : 'movie'}`}
        </Text>
        <Text style={styles.price}>{`${totalPrice}$`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    flexDirection: 'row'
  },
  date: {
    flex: 2,
    fontSize: 14
  },
  movies: {
    flex: 1,
    fontSize: 12,
    padding: 5
  },
  price: {
    fontSize: 10,
    fontWeight: 'bold'
  }
});
