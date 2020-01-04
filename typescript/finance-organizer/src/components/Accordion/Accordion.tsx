import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader onPress={toggleAccordion}>
        <StyledTitle>{title}</StyledTitle>
        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={18} />
      </StyledHeader>
      {isOpen && <StyledContent>{children}</StyledContent>}
    </>
  );
};

const StyledHeader = styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: black;
  align-items: center;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 12px;
`;

const StyledTitle = styled.Text`
  font-size: 16px;
`;

const StyledContent = styled.View`
  padding: 8px;
`;

export default Accordion;
