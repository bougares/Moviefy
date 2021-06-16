import middleware from '../redux/middleware';

describe('Middleware', () => {
  jest.useFakeTimers();

  it('invokes functional action passing dispatch and getState as arguments', async () => {
    const getState = jest.fn();
    const dispatch = jest.fn();
    const store = { getState, dispatch };
    const next = jest.fn();
    const action = jest.fn();

    middleware(store)(next)(action);

    expect(next).not.toHaveBeenCalled();
    expect(action).toHaveBeenCalledWith(dispatch, getState);
  });

  it('hands control to next middleware if action is not a function', async () => {
    const getState = jest.fn();
    const dispatch = jest.fn();
    const store = { getState, dispatch };
    const next = jest.fn();
    const action = { type: 'Action ' };

    middleware(store)(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});
