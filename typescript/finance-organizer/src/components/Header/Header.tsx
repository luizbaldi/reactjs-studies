import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from 'react-navigation-hooks';

type Props = {
  title: string;
  rightIcon?: React.ReactNode;
  backIcon?: boolean;
};

const Header = ({ title, rightIcon, backIcon }: Props) => {
  const { goBack } = useNavigation();

  const onBackPress = () => goBack();

  return (
    <StyledHeader>
      {backIcon && (
        <StyledLeftIcon onPress={onBackPress}>
          <Icon name='chevron-left' size={22} />
        </StyledLeftIcon>
      )}
      <StyledTitle>{title}</StyledTitle>
      {rightIcon && <StyledRightIcon>{rightIcon}</StyledRightIcon>}
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  height: 52px;
  justify-content: center;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #757575;
`;

const StyledTitle = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const StyledRightIcon = styled.View`
  position: absolute;
  right: 18px;
`;

const StyledLeftIcon = styled.TouchableOpacity`
  position: absolute;
  left: 18px;
  height: 52px;
  justify-content: center;
  z-index: 1;
`;

Header.defaultProps = {
  rightIcon: null,
  backIcon: false
};

export default Header;
