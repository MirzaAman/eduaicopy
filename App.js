import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './Navigation/MainNavigator'; // Your main navigation component

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
