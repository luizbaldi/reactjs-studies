import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import LibraryList from './components/LibraryList';
import styled from 'styled-components';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Container>
    <Header title='Tech Stack' />
    <LibraryList />
    </Container>
  </Provider>
);

const Container = styled.View`
  flex: 1;
`;

export default App; 