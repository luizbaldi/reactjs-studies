import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import Router from './Router';
import firebaseConfig from './config/firebase';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;