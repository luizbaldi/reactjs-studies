import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import firebase from 'firebase';
import ErrorText from '../components/ErrorText';
import Spinner from '../components/Spinner';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };

    this.onLogin = this.onLogin.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onInputChange(field, value) {
    this.setState({ [field]: value });
  }

  renderButton() {
    let element;
    
    if (this.state.loading) {
      element = <Spinner />;
    } else {
      element = (
        <Button
          label='Log in'
          onPress={this.onLogin}
        />
      );
    }

    return element;
  }

  onLogin() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginSuccess(response) {
    this.setState({
      email: '',
      password: '',
      loading: false
    });
  }

  onLoginFail(err) {
    this.setState({
      error: err.message,
      loading: false
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='E-mail'
            placeholder='test@test.com'
            value={this.state.email}
            onChangeText={text => this.onInputChange('email', text)}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={text => this.onInputChange('password', text)}
            secureTextEntry
          />
        </CardSection>
        <ErrorText>{this.state.error}</ErrorText>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;