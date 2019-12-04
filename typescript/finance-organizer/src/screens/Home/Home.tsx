import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = () => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>Year 2019</StyledTitle>
      <StyledRightIcon>
        <Icon name='setting' />
      </StyledRightIcon>
    </StyledHeader>
    <StyledContent />
  </StyledContainer>
);

Home.navigationOptions = {
  header: null
};

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  height: 200px;
`;

const StyledTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const StyledHeader = styled.View`
  padding: 16px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

const StyledRightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 18px;
`;

const StyledContent = styled.View`
  padding: 16px;
`;

export default Home;
