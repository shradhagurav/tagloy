/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from 'navigation/AppRoutes';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'store/store';


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
