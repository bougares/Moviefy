import { connect } from 'react-redux';

import { addMovie, removeMovie } from '../redux/actionCreators/orderActionCreators';

import {
  loadGenres,
  loadMovies,
  searchMovies,
  filterMovies
} from '../redux/actionCreators/offerActionCreators';

import moviesSelector from '../redux/selectors/moviesSelector';

import MovieListScreen from './presentational/MovieListScreen';

const mapStateToProps = ({
  order, offer: {
    filter, query, movies, ...restOfOffer
  }
}) => ({
  selected: order.movies,
  movies: moviesSelector({ filter, query, movies }),
  query,
  ...restOfOffer,
  genre: filter
});

const mapDispatchToProps = dispatch => ({
  onSelected: (isSelected, movie) => {
    if (isSelected) {
      dispatch(addMovie(movie));
    } else {
      dispatch(removeMovie(movie.id));
    }
  },
  fetchMovies: () => {
    dispatch(loadMovies());
  },
  fetchGenres: () => {
    dispatch(loadGenres());
  },
  onQueryChange: (query) => {
    dispatch(searchMovies(query));
  },
  onGenreChange: (genre) => {
    dispatch(filterMovies(genre));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListScreen);
