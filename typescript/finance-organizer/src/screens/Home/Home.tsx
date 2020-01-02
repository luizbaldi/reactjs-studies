import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import format from 'date-fns/format';

import { getMonths } from './utils';

import MonthBox from './components/MonthBox';

import { Header } from '../../components';
import { setMonth, getMonth } from '../../utils/storage';

const months = getMonths();

const Home = () => {
  useEffect(() => {
    (async () => {
      const currentMonth = format(new Date(), 'MMMM');
      const monthItem = await getMonth(currentMonth);

      if (!monthItem) {
        await setMonth(currentMonth, {
          name: currentMonth,
          disabled: false,
          bills: []
        });
      }
    })();
  }, []);

  return (
    <>
      <Header
        title='Year 2020'
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
            keyExtractor={month => month}
            renderItem={({ item }) => <MonthBox monthName={item} />}
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
