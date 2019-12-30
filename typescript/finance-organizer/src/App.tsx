import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Routes from './config/routes';

const App = () => (
  <StyledContainer>
    <StatusBar barStyle='dark-content' />
    <Routes />
  </StyledContainer>
);

const StyledContainer = styled.SafeAreaView`
  flex: 1;
`;

export default App;
