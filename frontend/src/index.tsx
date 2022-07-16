import React from 'react'
import ReactDOM from 'react-dom'

import { store } from './Redux'
import { Provider } from 'react-redux'

import App from './Components/Smart/App/App'

import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)