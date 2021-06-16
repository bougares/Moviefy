import UserService from '../../model/UserService';
import OrderService from '../../model/OrderService';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

export const CONFIRM_LOGIN = 'CONFIRM_LOGIN';
export const DENY_LOGIN = 'DENY_LOGIN';
export const LOGOUT = 'LOGOUT';

export const CONFIRM_REGISTRATION = 'CONFIRM_REGISTRATION';
export const DENY_REGISTRATION = 'DENY_REGISTRATION';

export const receiveOrders = orders => ({ type: RECEIVE_ORDERS, orders });
export const loadOrders = () => async (dispatch, getState) => {
  const {
    account: {
      user: { token }
    }
  } = getState();

  const service = new OrderService(token);
  const orders = await service.fetchOrders();
  dispatch(receiveOrders(orders));
};

export const logout = () => ({ type: LOGOUT });
export const denyLogin = error => ({ type: DENY_LOGIN, error });
export const confirmLogin = user => ({ type: CONFIRM_LOGIN, user });
export const completeLogin = (values) => async (dispatch, getState) => {
 
  const {
    form: {
      signIn: { valuesd}
    }
  } = getState();

  const service = new UserService(values);
  try {
    const user = await service.login(values);
    alert("uygeufygef")
    dispatch(confirmLogin(user));
  } catch (error) {
    alert("uygeufygef")
    dispatch(denyLogin(error));
  }
};

export const denyRegistration = error => ({ type: DENY_REGISTRATION, error });
export const confirmRegistration = user => ({ type: CONFIRM_REGISTRATION, user });
export const completeRegistration = (values) => async (dispatch, getState) => {
  const {
    form: {
      signUp: { valuese }
    }
  } = getState();

  const service = new UserService();
  try {
    const user = await service.register(values);
    dispatch(confirmRegistration(user));
  } catch (error) {
    dispatch(denyRegistration(error));
  }
};
