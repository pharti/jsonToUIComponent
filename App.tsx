/* eslint-disable prettier/prettier */
import React from 'react';
// 1. import `NativeBaseProvider` component
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/container/Home';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NativeBaseProvider >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

