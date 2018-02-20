import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Header from './components/Header';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: null };

    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAsT6PkvXnIKgb5Nj5X0n8k2S0YyK4OnkY",
      authDomain: "study-auth-1f5b2.firebaseapp.com",
      databaseURL: "https://study-auth-1f5b2.firebaseio.com",
      projectId: "study-auth-1f5b2",
      storageBucket: "study-auth-1f5b2.appspot.com",
      messagingSenderId: "1048570987681"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    let element;
    
    switch (this.state.loggedIn) {
      case true:
        element = (
          <Card>
            <CardSection>
              <Button
                label='Log Out'
                onPress={() => firebase.auth().signOut()}
              />
            </CardSection>
          </Card>
        )
        break;
      case false:
        element = <LoginForm />;
        break;
      default:
        element = (
          <Card>
            <CardSection>
              <Spinner />
            </CardSection>
          </Card>
        );
        break;
    }

    return element;
  }

  render() {
    return (
      <View>
        <Header title='Authentication' />
        {this.renderContent()}
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