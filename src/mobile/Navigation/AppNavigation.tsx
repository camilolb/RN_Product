import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStack from './PublicStack';
import PrivateStack from './PrivateStack';
import NavBarStack from './TabStack';
// import PrivateStack from './PrivateStack';
// import {useAppSelector} from '../frameworks/redux';
import {userSessionAtom} from '../../core/frameworks/Jotai';

function AppNavigation() {
  // const {userToken} = useAppSelector(state => state.harmony);

  return (
    <NavigationContainer>
      {/* <PrivateStack /> */}
      {/* <NavBarStack /> */}
      {/* <PublicStack /> */}
      {userSessionAtom == null ? <PublicStack /> : <PrivateStack />}
    </NavigationContainer>
  );
}

export default AppNavigation;
