import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { useMonthsData } from './hooks';

import MonthBox from './components/MonthBox';

const Home = () => {
  const months = useMonthsData();

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Year 2019</StyledTitle>
        <StyledRightIcon>
          <Icon name='settings' size={20} />
        </StyledRightIcon>
      </StyledHeader>
      <StyledContent>
        <FlatList
          data={Object.keys(months)}
          keyExtractor={month => month}
          renderItem={({ item }) => <MonthBox month={item} />}
          numColumns={2}
          horizontal={false}
        />
      </StyledContent>
    </StyledContainer>
  );
};

Home.navigationOptions = {
  header: null
};

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  height: 200px;
`;

const StyledTitle = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const StyledHeader = styled.View`
  padding: 16px;
  justify-content: center;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #757575;
`;

const StyledRightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 18px;
`;

const StyledContent = styled.View`
  padding: 16px;
`;

export default Home;
