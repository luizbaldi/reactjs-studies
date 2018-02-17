import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
  <View style={style.container}>
    <Text style={style.label}>{label}</Text>
    <TextInput
      style={style.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
    /> 
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextentry: PropTypes.bool
};

const style = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
}

export default Input;