import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import produce from 'immer';

import { Month, Bill } from '../../../utils/types';
import { setMonth as setStorageMonth } from '../../../utils/storage';
import { Accordion } from '../../../components';

import AddBillModal from './AddBillModal';

type Props = {
  month: Month;
  setMonth: (month: Month) => void;
};

const BillsBox = ({ month, setMonth }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(isOpen => !isOpen);
  };

  const onDeletePress = (id: string, bill: string) => {
    Alert.alert('Delete bill', `Do you really want to remove "${bill}"?`, [
      {
        text: 'Yup',
        onPress: async () => {
          const newMonth = produce(month, draftMonth => {
            const billIndex = draftMonth.bills.findIndex(
              currBill => id === currBill.id
            );

            draftMonth.bills.splice(billIndex, 1);
          });

          setMonth(newMonth);
          setStorageMonth(month.name, newMonth);
        },
        style: 'cancel'
      },
      {
        text: 'Nah',
        onPress: () => {}
      }
    ]);
  };

  const onBillPress = (bill: Bill) => {
    const newMonth = produce(month, draftMonth => {
      const billIndex = draftMonth.bills.findIndex(({ id }) => bill.id === id);

      /* eslint-disable no-param-reassign */
      draftMonth.bills[billIndex] = {
        ...bill,
        done: !bill.done
      };
    });

    setMonth(newMonth);
    setStorageMonth(month.name, newMonth);
  };

  return (
    <>
      <Accordion title='Bills'>
        {!month.bills.length && (
          <StyledEmptyMessageLabel>
            Whops, seems like you don&apos;t have any bills do pay (yet).
          </StyledEmptyMessageLabel>
        )}
        {month.bills.map(bill => (
          <StyledMonthButton key={bill.id} onPress={() => onBillPress(bill)}>
            <Icon
              name={bill.done ? 'check-circle' : 'circle'}
              size={14}
              color='gray'
            />
            <StyledMonthLabel numberOfLines={1}>{bill.label}</StyledMonthLabel>
            <StyledPriceLabel>
              R$ {bill?.price?.toFixed(2) || '0.0'}
            </StyledPriceLabel>
            <StyledDeleteMonthButton
              onPress={() => onDeletePress(bill.id, bill.label)}
            >
              <Icon name='trash' size={16} color='red' />
            </StyledDeleteMonthButton>
          </StyledMonthButton>
        ))}
        <StyledPlusButton onPress={toggleModal}>
          <Icon name='plus' size={18} />
        </StyledPlusButton>
        <AddBillModal
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          month={month}
          setMonth={setMonth}
        />
      </Accordion>
    </>
  );
};

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
  font-size: 16px;
  flex: 1;
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

const StyledEmptyMessageLabel = styled.Text`
  font-size: 16px;
  margin-vertical: 12px;
`;

const StyledPriceLabel = styled.Text`
  margin-right: 38px;
  margin-left: 4px;
`;

export default BillsBox;
