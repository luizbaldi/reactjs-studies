import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';

type Props = {
  month: string;
};

const MonthBox = ({ month }: Props) => {
  const { navigate } = useNavigation();

  const onMonthPress = () => {
    navigate('MonthDetail', { month });
  };

  return (
    <StyledContainer onPress={onMonthPress}>
      <StyledText>{month}</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 6px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-width: ${StyleSheet.hairlineWidth};
  padding-vertical: 18px;
`;

const StyledText = styled.Text``;

export default MonthBox;
