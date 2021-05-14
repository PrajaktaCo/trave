import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from 'Navigation';
import { navigationRef } from './app/services/NavigationService';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <TabNavigation />
    </NavigationContainer>
  );
}
