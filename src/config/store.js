// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or whatever storage you are using
import reducers from '../redux/reducers';

const config = {
  key: 'primary',
  storage,
};

const reducer = persistReducer(config, reducers);

export default function configureStore() {
  // Create store
  const enhancer = compose(applyMiddleware(thunk, promise));
  const store = createStore(reducer, enhancer);
  // Create persistor
  const persistor = persistStore(store);
  return { persistor, store };
}
