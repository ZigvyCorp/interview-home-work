/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Post from './redux/container/Post';
import store,{persistor} from './redux/store'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
      <View>
        <Post/>
      </View>
      </PersistGate>
    </Provider>
  );
};


export default App;
