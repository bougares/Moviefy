import currentOrderReducer from '../redux/reducers/currentOrderReducer';
import { addMovie, removeMovie, confirmOrder } from '../redux/actionCreators/orderActionCreators';
import { logout } from '../redux/actionCreators/accountActionCreators';

describe('CurrentOrderReducer', () => {
  jest.useFakeTimers();

  it('adds new movie to order on add action', async () => {
    const movie = { title: 'Example', price: 10, genres: ['Action', 'Animation'] };
    const state = { movies: [], totalPrice: 0 };

    const newState = currentOrderReducer(state, addMovie(movie));
    const newerState = currentOrderReducer(newState, addMovie(movie));

    expect(newState.movies).toEqual([movie]);
    expect(newState.totalPrice).toEqual(10);

    expect(newerState.movies).toEqual([movie, movie]);
    expect(newerState.totalPrice).toEqual(20);
  });

  it('removes movie from order on remove action', async () => {
    const movie = { title: 'Example', price: 10, genres: ['Action', 'Animation'] };
    const first = { id: '1', ...movie };
    const second = { id: '2', ...movie };

    const state = { movies: [first, second], totalPrice: 20 };

    const newState = currentOrderReducer(state, removeMovie(first.id));
    const newerState = currentOrderReducer(newState, removeMovie(second.id));

    expect(newState.movies).toEqual([second]);
    expect(newState.totalPrice).toEqual(10);

    expect(newerState.movies).toEqual([]);
    expect(newerState.totalPrice).toEqual(0);
  });

  it('clears order on confirm action', async () => {
    const movie = { title: 'Example', price: 10, genres: ['Action', 'Animation'] };
    const state = { movies: [movie, movie], totalPrice: 20 };

    const newState = currentOrderReducer(state, confirmOrder(state));

    expect(newState.movies).toEqual([]);
    expect(newState.totalPrice).toEqual(0);
  });

  it('clears order on logout action', async () => {
    const movie = { title: 'Example', price: 10, genres: ['Action', 'Animation'] };
    const state = { movies: [movie, movie], totalPrice: 20 };

    const newState = currentOrderReducer(state, logout());

    expect(newState.movies).toEqual([]);
    expect(newState.totalPrice).toEqual(0);
  });
});
