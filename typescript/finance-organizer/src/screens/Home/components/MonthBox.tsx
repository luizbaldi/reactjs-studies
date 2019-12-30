import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import LinearGradient from 'react-native-linear-gradient';

import { Month } from '../types';
import { getMonthInfo } from '../utils';

type Props = {
  month: Month;
};

const MonthBox = ({ month }: Props) => {
  const { navigate } = useNavigation();
  const { progress, total, bgColor } = getMonthInfo();

  const onMonthPress = () => {
    navigate('MonthDetail', { month });
  };

  return (
    <StyledButton onPress={onMonthPress}>
      <StyledContainer colors={bgColor}>
        <View>
          <StyledText>{month.name}</StyledText>
          <StyledProgressText>
            {progress} / {total}
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
