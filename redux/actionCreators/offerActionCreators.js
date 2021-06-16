import MovieService from '../../model/MoviesService';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';

export const searchMovies = query => ({ type: SEARCH_MOVIES, query });
export const filterMovies = genre => ({ type: FILTER_MOVIES, genre });

export const receiveMovies = movies => ({ type: RECEIVE_MOVIES, movies });
export const loadMovies = () => async (dispatch) => {
  const service = new MovieService();
  const movies = await service.fetchMovies();
  dispatch(receiveMovies(movies));
};

export const receiveGenres = genres => ({ type: RECEIVE_GENRES, genres });
export const loadGenres = () => async (dispatch) => {
  const service = new MovieService();
  const genres = await service.fetchGenres();
  dispatch(receiveGenres(genres));
};
