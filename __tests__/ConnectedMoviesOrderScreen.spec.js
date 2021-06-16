/* eslint-disable prefer-destructuring */
// eslint-disable-next-line no-unused-vars
import ConnectedMoviesOrderScreen from '../screens/ConnectedMoviesOrderScreen';

jest.mock('react-redux', () => ({
  connect: jest.fn().mockReturnValue(() => jest.fn())
}));
jest.mock('../redux/actionCreators/orderActionCreators', () => ({
  completeOrder: jest.fn(),
  removeMovie: jest.fn()
}));

describe('ConnectedMoviesOrderScreen', () => {
  jest.useFakeTimers();

  let mapStateToProps;
  let mapDispatchToProps;
  beforeEach(() => {
    // eslint-disable-next-line global-require
    const mockConnect = require('react-redux').connect;

    mapStateToProps = mockConnect.mock.calls[0][0];
    mapDispatchToProps = mockConnect.mock.calls[0][1];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('maps state and dispatch to props correctly', async () => {
    const state = { order: { movies: [{ title: 'example' }], totalPrice: 16 } };
    const dispatch = jest.fn();
    const movieId = 'someid';
    // eslint-disable-next-line global-require
    const mockActions = require('../redux/actionCreators/orderActionCreators');

    const props = mapDispatchToProps(dispatch);
    props.onRemoved(movieId);
    props.onPurchased();

    expect(mapStateToProps(state)).toEqual(state.order);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockActions.removeMovie).toHaveBeenCalledWith(movieId);
    expect(mockActions.completeOrder).toHaveBeenCalled();
  });
});
