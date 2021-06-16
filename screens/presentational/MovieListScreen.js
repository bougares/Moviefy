import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import MovieList from '../../components/MovieList';
import SearchInput from '../../components/SearchInput';
import GenrePicker from '../../components/GenrePicker';

export default class MovieListScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie List'
  };

  async componentDidMount() {
    const { fetchMovies, fetchGenres } = this.props;

    fetchMovies();
    fetchGenres();
  }

  onSelected = (movie) => {
    const { selected, onSelected } = this.props;
    const isSelected = selected.findIndex(el => el.id === movie.id) < 0;

    onSelected(isSelected, movie);
  };

  render() {
    const {
      genres, movies, selected, onQueryChange, query, onGenreChange, genre
    } = this.props;
    const isLoading = !genres || !movies;
    return (
      <View style={styles.container}>
        {isLoading && <Text style={styles.loading}>Loading offer...</Text>}
        {!isLoading && <GenrePicker onChange={onGenreChange} selected={genre} genres={genres} />}
        {!isLoading && <SearchInput onChange={onQueryChange} value={query} />}
        {!isLoading && (
          <MovieList movies={movies} selected={selected} onSelected={this.onSelected} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    textAlign: 'center',
    fontSize: 20
  }
});
