import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ label, onPress }) =>  (
  <StyledButton onPress={onPress}>
    <Label>
      {label}
    </Label>
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const StyledButton = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  background-color: #fff;
  border-radius: 5;
  border-width: 1;
  border-color: #007aff;
  margin-left: 5;
  margin-right: 5;
`;

const Label = styled.Text`
  align-self: center;
  color: #007aff;
  font-size: 16;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`;

export default Button;