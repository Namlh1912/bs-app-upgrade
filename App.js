/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Navigation from './src/config/navigation';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/config/store';

const config = configureStore();
console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={config.store}>
        <PersistGate loading={null} persistor={config.persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

