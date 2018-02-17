import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress }) =>  (
  <TouchableOpacity 
    style={style.button}
    onPress={onPress}
  >
    <Text style={style.text}>
      {label}
    </Text>
  </TouchableOpacity>
);

const style = {
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;