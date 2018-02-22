import React from 'react';
import CardSection from './CardSection';
import styled from 'styled-components';

const ListItem = ({ employee }) => (
  <CardSection>
    <Title>{employee.name}</Title>
  </CardSection>
);

const Title = styled.Text`
  font-size: 18;
  padding-left: 15;
`;

export default ListItem;