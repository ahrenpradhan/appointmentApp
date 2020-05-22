import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/component/main'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
