import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import Router from './Router';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC4kLFq0VAxgu6TdEoEznB9mEdJPc5E2rM',
      authDomain: 'study-manager-3aade.firebaseapp.com',
      databaseURL: 'https://study-manager-3aade.firebaseio.com',
      projectId: 'study-manager-3aade',
      storageBucket: '',
      messagingSenderId: '547977648050'
    };
    firebase.initializeApp(config);
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