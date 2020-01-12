import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

import Routes from './config/routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StyledContainer>
      <StatusBar barStyle='dark-content' />
      <Routes />
    </StyledContainer>
  );
};

const StyledContainer = styled.SafeAreaView`
  flex: 1;
`;

export default App;
