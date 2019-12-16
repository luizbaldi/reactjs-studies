import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const MonthDetail = () => {
  const { getParam } = useNavigation();
  const month = getParam('month', '');

  return (
    <View>
      <Text>You&apos;ve selected: {month}</Text>
    </View>
  );
};

export default MonthDetail;
