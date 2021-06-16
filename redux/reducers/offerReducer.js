import {
  RECEIVE_MOVIES,
  RECEIVE_GENRES,
  SEARCH_MOVIES,
  FILTER_MOVIES
} from '../actionCreators/offerActionCreators';

const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return { ...state, movies: action.movies };
    case RECEIVE_GENRES:
      return { ...state, genres: action.genres };
    case SEARCH_MOVIES:
      return { ...state, query: action.query };
    case FILTER_MOVIES:
      return { ...state, filter: action.genre };
    default:
      return state;
  }
};

export default offerReducer;
