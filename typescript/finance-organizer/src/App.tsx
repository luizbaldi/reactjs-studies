import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './config/routes';

const App = () => (
  <>
    <StatusBar barStyle='dark-content' />
    <Routes />
  </>
);

export default App;
