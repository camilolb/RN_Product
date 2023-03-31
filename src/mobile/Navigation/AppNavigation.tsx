import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStack from './PublicStack';
import PrivateStack from './PrivateStack';
import {userSessionAtom} from '../../core/frameworks/Jotai';
import {useAtom} from 'jotai';

function AppNavigation() {
  const [userSession] = useAtom(userSessionAtom);

  return (
    <NavigationContainer>
      {userSession.token == null ? <PublicStack /> : <PrivateStack />}
    </NavigationContainer>
  );
}

export default AppNavigation;
