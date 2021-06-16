import { createSelector } from 'reselect';

const filterResults = (query, filter, movies) => {
  const filteredMovies = filter && filter !== 'All' ? movies.filter(el => el.genres.includes(filter)) : movies;

  if (query && query.length > 0) {
    return filteredMovies.filter(el => el.title.includes(query));
  }

  return filteredMovies;
};

const getQuery = state => state && state.query;
const getFilter = state => state && state.filter;

export default createSelector(
  [getQuery, getFilter],
  filterResults
);
