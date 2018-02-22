import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
  <Container>
    <ActivityIndicator size={size || 'large'} />
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Spinner;