import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Header from './components/Header';
// import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  // componentWillMount() {
  //   const config = {
  //     apiKey: "AIzaSyAsT6PkvXnIKgb5Nj5X0n8k2S0YyK4OnkY",
  //     authDomain: "study-auth-1f5b2.firebaseapp.com",
  //     databaseURL: "https://study-auth-1f5b2.firebaseio.com",
  //     projectId: "study-auth-1f5b2",
  //     storageBucket: "study-auth-1f5b2.appspot.com",
  //     messagingSenderId: "1048570987681"
  //   };
  //   firebase.initializeApp(config);
  // }
  render() {
    return (
      <View>
        <Header title='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

export default App;