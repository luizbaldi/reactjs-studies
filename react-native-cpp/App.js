import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, NativeModules} from 'react-native';

const {NativeMessage} = NativeModules;

const App = () => {
  const [message, setMessage] = useState('Loading...');

  const loadNativeMessage = async () => {
    try {
      const helloMessage = await NativeMessage.sayHello();

      setMessage(helloMessage);
    } catch (error) {
      setMessage('Whops, something went wrong...');
    }
  };

  useEffect(() => {
    loadNativeMessage();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text>Message from native side:</Text>
        <Text syle={styles.nativeMessage}>{message}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nativeMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default App;
