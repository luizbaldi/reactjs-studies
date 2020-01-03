import React, { useState } from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import shortid from 'shortid';

import { Month } from '../../../utils/types';
import { setMonth as setStorageMonth } from '../../../utils/storage';

type Props = {
  isOpen: boolean;
  toggleModal: () => void;
  month: Month;
  setMonth: (month: Month) => void;
};

const AddBillModal = ({ isOpen, toggleModal, month, setMonth }: Props) => {
  const [billName, setBillName] = useState('');
  const [billValue, setBillValue] = useState('');

  const onAddBill = () => {
    setBillName('');
    setBillValue('');
    toggleModal();

    const updatedMonth = {
      ...month,
      bills: [
        ...month.bills,
        {
          id: shortid.generate(),
          label: billName,
          done: false,
          price: Number.parseFloat(billValue)
        }
      ]
    };

    setMonth(updatedMonth);
    setStorageMonth(month.name, updatedMonth);
  };

  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={toggleModal}
      style={{ justifyContent: 'flex-end', margin: 0 }}
      avoidKeyboard
    >
      <StyledContainer>
        <StyledCloseButton onPress={toggleModal}>
          <Icon name='x' size={16} />
        </StyledCloseButton>
        <StyledModalTitle>Add a bill</StyledModalTitle>
        <StyledInput
          placeholder='Name'
          value={billName}
          onChangeText={setBillName}
        />
        <StyledInput
          placeholder='Value'
          value={billValue}
          onChangeText={setBillValue}
          keyboardType='numeric'
        />
        <StyledAddButton onPress={onAddBill}>
          <Icon name='plus' size={16} color='#fafafa' />
        </StyledAddButton>
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled.View`
  background-color: #fafafa;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  padding-bottom: 28px;
  padding-horizontal: 12px;
`;

const StyledInput = styled.TextInput`
  height: 40px;
  width: 100%;
  padding-left: 4px;
`;

const StyledAddButton = styled.TouchableOpacity`
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

export default AddBillModal;
