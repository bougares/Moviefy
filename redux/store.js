import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import middleware from './middleware';
import reducers from './reducers';

const storeFactory = () => {
  const reducer = combineReducers({ ...reducers, form: formReducer });
  return createStore(reducer, applyMiddleware(middleware));
};

export default storeFactory;
