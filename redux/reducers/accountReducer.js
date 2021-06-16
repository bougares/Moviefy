import { CONFIRM_ORDER } from '../actionCreators/orderActionCreators';

import {
  LOGOUT,
  RECEIVE_ORDERS,
  CONFIRM_LOGIN,
  CONFIRM_REGISTRATION
} from '../actionCreators/accountActionCreators';

const ordersReducer = (orders = [], action) => {
  switch (action.type) {
    case CONFIRM_ORDER:
      return [...orders, action.order];
    case LOGOUT:
      return [];
    case RECEIVE_ORDERS:
      return action.orders;
    default:
      return orders;
  }
};

const userReducer = (user = undefined, action) => {
  switch (action.type) {
    case CONFIRM_LOGIN:
      return action.user;
    case CONFIRM_REGISTRATION:
      return action.user;
    case LOGOUT:
      return undefined;
    default:
      return user;
  }
};

const accountReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case CONFIRM_LOGIN:
      return { ...state, user: userReducer(state.user, action) };
    case CONFIRM_REGISTRATION:
      return { ...state, user: userReducer(state.user, action) };
    case LOGOUT:
      return {
        ...state,
        user: userReducer(state.user, action),
        orders: ordersReducer(state.orders, action)
      };
    case RECEIVE_ORDERS:
      return { ...state, orders: ordersReducer(state.orders, action) };
    case CONFIRM_ORDER:
      return { ...state, orders: ordersReducer(state.orders, action) };
    default:
      return state;
  }
};

export default accountReducer;
