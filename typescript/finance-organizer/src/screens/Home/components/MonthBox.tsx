import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import LinearGradient from 'react-native-linear-gradient';

import { MonthInfo } from '../types';
import { getMonthInfo } from '../utils';

type Props = {
  monthName: string;
};

const colors = {
  empty: ['#ef9a9a', '#ef5350', '#e53935'],
  progress: ['#FFCC80', '#FFB74D', '#FFA726'],
  completed: ['#AED581', '#9CCC65', '#8BC34A'],
  disabled: ['#CFD8DC', '#B0BEC5', '#90A4AE']
};

const MonthBox = ({ monthName }: Props) => {
  const { navigate } = useNavigation();
  const [{ progress, total, progressKey, month }, setMonthInfo] = useState<
    MonthInfo
  >({
    progress: 0,
    total: 0,
    progressKey: 'disabled'
  });

  const onMonthPress = () => {
    if (progressKey !== 'disabled') {
      return navigate('MonthDetail', { month });
    }

    return Alert.alert(
      'Ops',
      "You can't travel in time (yet, maybe), so month's in the future aren't valid :)"
    );
  };

  useEffect(() => {
    (async () => {
      setMonthInfo(await getMonthInfo(monthName));
    })();
  }, []);

  return (
    <StyledButton onPress={onMonthPress}>
      <StyledContainer colors={colors[progressKey]}>
        <View>
          <StyledText>{monthName}</StyledText>
          <StyledProgressText>
            {progressKey === 'disabled' ? '~' : `${progress} / ${total}`}
          </StyledProgressText>
        </View>
      </StyledContainer>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  flex: 1;
`;

const StyledContainer = styled(LinearGradient)`
  flex: 1;
  margin: 6px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 100px;
`;

const StyledText = styled.Text`
  text-align: center;
  color: white;
  font-size: 16px;
`;

const StyledProgressText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
  margin-top: 6px;
`;

export default MonthBox;
