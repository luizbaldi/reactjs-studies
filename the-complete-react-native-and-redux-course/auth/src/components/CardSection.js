import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = ({ children }) => (
  <View style={style.container}>
    {children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired
};

const style = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;