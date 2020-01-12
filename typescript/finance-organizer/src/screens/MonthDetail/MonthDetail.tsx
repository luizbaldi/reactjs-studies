import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import styled from 'styled-components/native';

import { Month } from '../../utils/types';
import { Header, Label } from '../../components';

import BillsBox from './components/BillsBox';

const MonthDetail = () => {
  const { getParam } = useNavigation();
  const [month, setMonth] = useState<Month>(getParam('month'));
  const [total, setTotal] = useState({
    paid: 0,
    brute: 0
  });

  useEffect(() => {
    const newTotal = month.bills.reduce(
      (acum, bill) => {
        if (bill.done) {
          return {
            brute: acum.brute + bill.price,
            paid: acum.paid + bill.price
          };
        }

        return {
          ...acum,
          brute: acum.brute + bill.price
        };
      },
      {
        paid: 0,
        brute: 0
      }
    );

    setTotal(newTotal);
  }, [month]);

  return (
    <>
      <Header title={month.name} backIcon />
      <StyledContentContainer>
        <BillsBox month={month} setMonth={setMonth} />
        <StyledDivider />
        <StyledTotalRow>
          <Label>
            Total <Label fontSize={14}>(paid)</Label>
          </Label>
          <Label>R$ {total.paid.toFixed(2)}</Label>
        </StyledTotalRow>
        <StyledTotalRow marginTop={12}>
          <Label>Total</Label>
          <Label>R$ {total.brute.toFixed(2)}</Label>
        </StyledTotalRow>
      </StyledContentContainer>
    </>
  );
};

const StyledContentContainer = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

const StyledDivider = styled.View`
  height: 1px;
  background-color: #90a4ae;
  margin: 22px;
  opacity: 0.6;
`;

const StyledTotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 22px;
  margin-top: ${({ marginTop }) => marginTop || 0};
`;

MonthDetail.navigationOptions = {
  header: null
};

export default MonthDetail;
