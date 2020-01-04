import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

const Label = ({ children }: Props) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.Text`
  font-size: 16px;
`;

export default Label;
