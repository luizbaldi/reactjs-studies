import React from 'react';
import styled from 'styled-components/native';

type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search';
};

const Input = ({
  label,
  value,
  placeholder,
  onChangeText,
  keyboardType
}: Props) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}:</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
`;

const StyledInput = styled.TextInput`
  height: 40px;
  padding-left: 4px;
  flex: 1;
`;

const StyledLabel = styled.Text``;

Input.defaultProps = {
  keyboardType: 'default'
};

export default Input;
