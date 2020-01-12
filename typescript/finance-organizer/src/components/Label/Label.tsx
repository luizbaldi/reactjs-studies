import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
};

const Label = ({ children, color, fontSize }: Props) => {
  return (
    <StyledLabel fontSize={fontSize} color={color}>
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.Text`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;

Label.defaultProps = {
  fontSize: 16,
  color: 'black'
};

export default Label;
