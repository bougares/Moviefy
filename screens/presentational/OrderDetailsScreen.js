import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MovieList from '../../components/MovieList';
import formatDate from '../../model/DateFormatter';

export default class OrderDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Order Details'
  };

  render() {
    const {
      navigation: {
        state: {
          params: {
            order: { totalPrice, date, movies }
          }
        }
      }
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.price}>{`Price: ${totalPrice}$`}</Text>
        <Text style={styles.date}>{`Purchased on: ${formatDate(date)}`}</Text>
        <Text style={styles.movies}>Movies</Text>
        <MovieList movies={movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  date: {
    fontSize: 16,
    margin: 12
  },
  price: {
    fontSize: 16,
    margin: 12,
    marginTop: 20
  },
  movies: {
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
    fontWeight: 'bold'
  }
});
