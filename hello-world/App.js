import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstPage } from './firstPage';
import { SecondPage } from './secondPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstPage">
        <Stack.Screen name="firstPage" component={FirstPage} />
        <Stack.Screen name="secondPage" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App