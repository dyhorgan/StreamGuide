import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'

import './wdyr'
import 'react-hot-loader'
import {hot} from 'react-hot-loader/root'

// establishes socket connection
import './socket'

const HotApp = hot(App)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
