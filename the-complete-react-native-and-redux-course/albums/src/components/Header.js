import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const styles = {
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    height: 70,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text:  {
    fontSize: 22
  }
}

export default Header;