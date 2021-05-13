import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './app/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
