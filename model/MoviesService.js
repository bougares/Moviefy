/* eslint-disable class-methods-use-this */
import genres from '../assets/data/genres';
import movies from '../assets/data/movies';

import calculatePrice from './PriceCalculator';

export default class MovieService {
  async fetchMovies() {
    return movies
      .filter(item => Number(item.year) > 1900)
      .map((item, index) => ({ id: String(index), ...item, price: calculatePrice(item) }));
  }

  async fetchGenres() {

    return genres;
  }
}
