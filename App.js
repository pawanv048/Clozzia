import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RightDrawerScreen from './src/config/router';


export default function App() {
  return (
    <NavigationContainer>
      <RightDrawerScreen />
    </NavigationContainer>
  );
}