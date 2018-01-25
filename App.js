import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import NavBar from "./src/navbar"

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <NavBar />
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu. This is cool</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
