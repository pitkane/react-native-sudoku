import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from '../reducers';
import MainView from './MainView'

const logger = createLogger();

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

class RootView extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

export default RootView;
