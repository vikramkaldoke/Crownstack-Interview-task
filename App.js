/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './src/navigation/Navigator';
import itemReducer from './src/store/reducers/item';
const rootReducer = combineReducers({
  products : itemReducer,
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
const App: () => Node = () => {
  return (
    <Provider store = {store}>
    <Navigator />
   </Provider>
  );
};



export default App;
