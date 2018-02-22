import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const Container = styled.View`
  background-color: #F8F8F8;
  justify-content: center;
  height: 70;
  align-items: center;
  elevation: 2;
  position: relative;
`;

const Title = styled.Text`
  font-size: 22;
`;

export default Header;