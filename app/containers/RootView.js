import React, { Component } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from '../reducers'

import { Scene, Router, Reducer } from 'react-native-router-flux'


import MainView from './MainView'

const logger = createLogger({ duration: true, collapsed: true })

const reducer = combineReducers(reducers)

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

const routerReducer = params => {
  const defaultReducer = Reducer(params)
  return (state, action) => {
    return defaultReducer(state, action)
  }
}

class RootView extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Router createReducer={routerReducer} sceneStyle={{ backgroundColor: '#F7F7F7' }}>
          <Scene key="root" hideNavBar >
            <Scene key="home" component={MainView} hideNavBar />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

export default RootView
