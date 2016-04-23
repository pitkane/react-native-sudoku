import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from '../reducers';

import {Actions, Scene, Router, Reducer} from 'react-native-router-flux';


import MainView from './MainView'

const logger = createLogger({ collapsed: true });

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

const routerReducer = params => {
  const defaultReducer = Reducer(params);
  return (state, action) => {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
}

class RootView extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>

        <Router createReducer={routerReducer} sceneStyle={{ backgroundColor:'#F7F7F7' }}>
          <Scene key="root" hideNavBar={true}>
            <Scene key="home" component={MainView}/>
          </Scene>
        </Router>

      </Provider>
    );
  }
}

export default RootView;
