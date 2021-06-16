import accountReducer from './accountReducer';
import currentOrderReducer from './currentOrderReducer';
import offerReducer from './offerReducer';

export default {
  account: accountReducer,
  order: currentOrderReducer,
  offer: offerReducer
};
