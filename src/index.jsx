import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './containers/app'

const rootElement = document.getElementById('app')

render(
  <Provider store={createStore(rootReducer)}>
    <App/>
  </Provider>,
  rootElement
)
