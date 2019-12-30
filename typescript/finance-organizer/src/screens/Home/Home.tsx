import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import { useMonthsData } from './hooks';

import MonthBox from './components/MonthBox';

import { Header } from '../../components';

const Home = () => {
  const months = useMonthsData();

  return (
    <>
      <Header
        title='Year 2019'
        rightIcon={
          <TouchableOpacity>
            <Icon name='settings' size={20} />
          </TouchableOpacity>
        }
      />
      <StyledContainer>
        <StyledContent>
          <FlatList
            data={months}
            keyExtractor={month => month.name}
            renderItem={({ item }) => <MonthBox month={item} />}
            numColumns={2}
            horizontal={false}
          />
        </StyledContent>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  height: 200px;
`;

const StyledContent = styled.View`
  padding: 16px;
`;

Home.navigationOptions = {
  header: null
};

export default Home;
