import { useNavigation } from '@react-navigation/native';
import Header from 'component/Header';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenOne = () => {
  const navigation = useNavigation<any>()
  const onIconPress = () => {
    navigation.navigate("Profile")
  }
  return (
    <View style={styles.container}>
      <Header title="Screen One" onRightPress={onIconPress} iconRight={{ type: "material-community", name: "account" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default ScreenOne;
