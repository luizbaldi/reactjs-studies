import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { Month } from '../Home/types';

import { Header } from '../../components';

const MonthDetail = () => {
  const { getParam } = useNavigation();
  const month: Month = getParam('month', '');

  return (
    <>
      <Header title={month.name} backIcon />
      <View>
        <Text>You&apos;ve selected: {month.name}</Text>
      </View>
    </>
  );
};

MonthDetail.navigationOptions = {
  header: null
};

export default MonthDetail;
