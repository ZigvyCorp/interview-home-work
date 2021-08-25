import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {DetailPost} from '../screens/DetailPost';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailPost" component={DetailPost} />
    </Stack.Navigator>
  );
};
