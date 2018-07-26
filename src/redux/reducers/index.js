import { combineReducers } from 'redux';
import book from './book';
import auth from './auth';
import register from './register';
import cart from './cart';

const rootReducer = combineReducers({
  book: book,
  auth: auth,
  register: register,
  cart: cart
});

export default rootReducer;