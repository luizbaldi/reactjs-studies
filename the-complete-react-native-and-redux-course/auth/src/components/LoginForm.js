import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

class LoginForm extends Component {
  render() {
    return (
      <Card>
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