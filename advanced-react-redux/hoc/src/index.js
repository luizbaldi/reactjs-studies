import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './components/App'
import Header from './components/Header'
import Resources from './components/Resources'
import reducers from './reducers'
import requireAuth from './components/RequireAuth'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={App} />
        <Route path='/resources' component={requireAuth(Resources)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
)
