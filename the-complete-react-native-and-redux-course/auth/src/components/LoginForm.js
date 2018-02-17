import React, { Component } from 'react';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onInputChange(field, value) {
    this.setState({ [field]: value });
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
        <CardSection>
          <Button 
            label='Log in'
            onPress={() => console.log('pressed')}
          />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;