import {
  addMovie,
  removeMovie,
  denyOrder,
  completeOrder,
  confirmOrder,
  ADD_MOVIE_TO_ORDER,
  REMOVE_MOVIE_FROM_ORDER,
  DENY_ORDER,
  CONFIRM_ORDER
} from '../redux/actionCreators/orderActionCreators';

describe('OrderActionCreators', () => {
  jest.useFakeTimers();

  it('addMovie creates action with movie and proper type', async () => {
    const movie = { title: 'Sample', genres: ['Action'] };
    expect(addMovie(movie)).toEqual({ movie, type: ADD_MOVIE_TO_ORDER });
  });

  it('removeMovie creates action with movieId and proper type', async () => {
    const movieId = '123';
    expect(removeMovie(movieId)).toEqual({ movieId, type: REMOVE_MOVIE_FROM_ORDER });
  });

  it('denyOrder creates action with error and proper type', async () => {
    const error = new Error();
    expect(denyOrder(error)).toEqual({ error, type: DENY_ORDER });
  });

  it('confirmOrder creates action with order and proper type', async () => {
    const order = { movies: [{ title: 'Sample', genres: ['Action'] }] };
    expect(confirmOrder(order)).toEqual({ order, type: CONFIRM_ORDER });
  });

  it('completeOrder publishes order and confirms it when publishing succeedes ', async () => {
    const order = { movies: [{ title: 'Sample', genres: ['Action'] }] };
    const getState = () => ({ order, account: { user: { token: 'some-token' } } });
    const dispatch = jest.fn();

    await completeOrder()(dispatch, getState);

    const action = dispatch.mock.calls[0][0];

    expect(action.type).toEqual(CONFIRM_ORDER);
    expect(action.order.movies).toEqual(order.movies);
  });

  it('completeOrder publishes order and denies it when publishing fails ', async () => {
    const order = { movies: [{ title: 'Sample', genres: ['Action'] }] };
    const getState = () => ({ order, account: { user: { token: undefined } } });
    const dispatch = jest.fn();

    await completeOrder()(dispatch, getState);

    const action = dispatch.mock.calls[0][0];

    expect(action.type).toEqual(DENY_ORDER);
  });
});
