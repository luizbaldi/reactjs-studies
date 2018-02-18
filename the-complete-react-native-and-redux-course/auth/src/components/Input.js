import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
  <Container>
    <Label>{label}</Label>
    <StyledInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
    /> 
  </Container>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextentry: PropTypes.bool
};

const Container = styled.View`
  height: 40;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  color: #000;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 18px;
  line-height: 23px;
  flex: 2;
`;

const Label = styled.Text`
  font-size: 18px;
  padding-left: 20px;
  flex: 1;
`;

export default Input;