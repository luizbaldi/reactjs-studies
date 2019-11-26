import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Home = () => (
  <StyledContainer>
    <Text>Home Screen</Text>
  </StyledContainer>
);

Home.navigationOptions = {
  header: null
};

const StyledContainer = styled.ScrollView`
  flex: 1;
  height: 200px;
`;

export default Home;
