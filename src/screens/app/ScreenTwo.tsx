import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenTwo;
