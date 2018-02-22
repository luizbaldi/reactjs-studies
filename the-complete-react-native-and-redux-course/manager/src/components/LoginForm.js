import React, { Component } from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import { Text } from 'react-native';
import styled from 'styled-components';
import Spinner from './Spinner';
import ErrorText from './ErrorText';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {
  onChangeText(label, value) {
    switch(label) {
      case 'email':
        this.props.emailChange(value);
        break;
      case 'password':
        this.props.passwordChange(value);
        break;
    }
  }

  onLogin() {
    const { email, password } = this.props.auth;
    
    this.props.loginUser(email, password);
  }

  render() {
    const { email, password, loading, error } = this.props.auth;
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            value={email}
            onChangeText={text => this.onChangeText('email', text)}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            placeholder=' password'
            value={password}
            onChangeText={text => this.onChangeText('password', text)}
            secureTextEntry
          />
        </CardSection>
        <ErrorText>{error}</ErrorText>
        <CardSection>
          {loading ? 
            <Spinner />
            : <Button
              label='Login'
              onPress={() => this.onLogin()}
            />
          }
        </CardSection>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  emailChange, passwordChange, loginUser
}, dispatch);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);