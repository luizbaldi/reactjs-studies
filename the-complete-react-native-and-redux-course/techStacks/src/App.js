import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <View>
      <Text>
        Welcome to React Native!
      </Text>
    </View>
  </Provider>
);

export default App;