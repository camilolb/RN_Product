import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStack from './PublicStack';
import PrivateStack from './PrivateStack';
import {userSessionAtom} from '../../core/frameworks/Jotai';

function AppNavigation() {
  return (
    <NavigationContainer>
      {userSessionAtom == null ? <PublicStack /> : <PrivateStack />}
    </NavigationContainer>
  );
}

export default AppNavigation;
