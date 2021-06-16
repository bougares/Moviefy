import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MovieList from '../../components/MovieList';
import Button from '../../components/Button';

export default class MoviesOrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Make anff order!'
  };

  onSelectMovies = () => {
    const {
      navigation: { navigate }
    } = this.props;

    navigate('MovieList');
  };

  render() {
    const {
      movies = [], totalPrice, onRemoved, onPurchased
    } = this.props;

    const purchaseDisabled = movies.length === 0;

    return (
      <View style={styles.container}>
        <MovieList
          movies={movies}
          placeholder="Pick some movies to make an order!"
          onRemoved={onRemoved}
        />
        <Text style={styles.movies}>{`Number of movies: ${movies.length || 0}`}</Text>
        <Text style={styles.price}>{`Total price: ${totalPrice}$`}</Text>
        <Button title="Pick movies" onPress={this.onSelectMovies} />
        <Button title="Purchase" disabled={purchaseDisabled} onPress={onPurchased} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  price: {
    margin: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },
  movies: {
    margin: 12,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
