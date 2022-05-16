import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React from 'react'

const App = () => {
  return (
    <SafeAreaProvider >
      <Navigation/>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </SafeAreaProvider>
    
  );
}

export default App