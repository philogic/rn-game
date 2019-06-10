import React from 'react';
import { View } from 'react-native';
import { PlayField } from './components'

const players = ['Human', 'Computer'];

export default function App() {
  return (
    <View style={styles.container}>
      <PlayField playerType={players[1]}>
      </PlayField>
      <PlayField playerType={players[0]}>
      </PlayField>
    </View>
  );
}

const styles = {
  container: {
    flex: 1
  }
};
