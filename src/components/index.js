import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import reducers from '../reducers'

import App from './app'

export default () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  )
}
