import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStack from './PublicStack';
import PrivateStack from './PrivateStack';
import {useSession} from '../../core/frameworks/jotai/atoms';

function AppNavigation() {
  const [sessionInformation, setSessionInformation] = useSession();
  console.log('TOKEN', sessionInformation);

  return (
    <NavigationContainer>
      <PublicStack />
      {/* {token == null ? <PublicStack /> : <PrivateStack />} */}
    </NavigationContainer>
  );
}

export default AppNavigation;
