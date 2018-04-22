import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import App from './components/App'
import Signin from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Feature from './components/Feature'
import Welcome from './components/Welcome'
import reducers from './reducers'
import { AUTH_USER } from './actions/types'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('auth-course-token')

if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={SignUp} />
        <Route path='/feature' component={Feature} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
