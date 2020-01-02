import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

import { Month } from '../Home/types';

import { Header } from '../../components';

const MonthDetail = () => {
  const { getParam } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);
  const month: Month = getParam('month', '');

  const toggleModal = () => {
    setModalOpen(isOpen => !isOpen);
  };

  const onDeletePress = (bill: string) => {
    Alert.alert('Delete bill', `Do you really want to remove "${bill}"?`, [
      {
        text: 'Yup',
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: 'Nah',
        onPress: () => {}
      }
    ]);
  };

  return (
    <>
      <Header title={month.name} backIcon />
      <StyledContentContainer>
        {month.bills.map(({ id, label, done }) => (
          <StyledMonthButton key={id}>
            <Icon
              name={done ? 'check-circle' : 'circle'}
              size={14}
              color='gray'
            />
            <StyledMonthLabel>{label}</StyledMonthLabel>
            <StyledDeleteMonthButton onPress={() => onDeletePress(label)}>
              <Icon name='trash' size={16} color='red' />
            </StyledDeleteMonthButton>
          </StyledMonthButton>
        ))}
        <StyledPlusButton onPress={toggleModal}>
          <Icon name='plus' size={18} />
        </StyledPlusButton>
      </StyledContentContainer>
      <StyledModal
        isVisible={isModalOpen}
        onBackdropPress={toggleModal}
        avoidKeyboard
      >
        <StyledModalContainer>
          <StyledCloseButton onPress={toggleModal}>
            <Icon name='x' size={16} />
          </StyledCloseButton>
          <StyledModalTitle>Add a bill</StyledModalTitle>
          <StyledModalInput placeholder='Bill name' />
          <StyledModalButton>
            <Icon name='plus' size={16} color='#fafafa' />
          </StyledModalButton>
        </StyledModalContainer>
      </StyledModal>
    </>
  );
};

const StyledContentContainer = styled.ScrollView`
  flex: 1;
  padding: 12px;
`;

const StyledMonthButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 44px;
  align-items: center;
  border-width: ${StyleSheet.hairlineWidth};
  padding-left: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  border-color: gray;
`;

const StyledMonthLabel = styled.Text`
  margin-left: 12px;
  font-size: 18px;
`;

const StyledPlusButton = styled.TouchableOpacity`
  height: 40px;
  border-width: ${StyleSheet.hairlineWidth};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;
`;

const StyledDeleteMonthButton = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
`;

const StyledModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const StyledModalContainer = styled.View`
  background-color: #fafafa;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  padding-bottom: 28px;
  padding-horizontal: 12px;
`;

const StyledModalInput = styled.TextInput`
  height: 40px;
  width: 100%;
  padding-left: 4px;
`;

const StyledModalButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: #8bc34a;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const StyledModalTitle = styled.Text`
  font-size: 18px;
  padding-bottom: 12px;
  padding-top: 22px;
`;

const StyledCloseButton = styled.TouchableOpacity`
  position: absolute;
  height: 44px;
  width: 44px;
  right: -10px;
  top: 16px;
`;

MonthDetail.navigationOptions = {
  header: null
};

export default MonthDetail;
