import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PrivateStack from './PrivateStack';
import {NavBarIcon} from '../../shared';

export type TabStackList = {
  Home: undefined;
  Profile: undefined;
};

const TabStack = createBottomTabNavigator<TabStackList>();

function NavBarStack() {
  return (
    <TabStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <TabStack.Screen
        component={PrivateStack}
        name={'Home'}
        // options={{
        //   tabBarIcon: NavBarIcon({
        //     Icon: BottomHome,
        //     SelectedIcon: BottomHomeSelected,
        //   }),
        // }}
      />
    </TabStack.Navigator>
  );
}

export default NavBarStack;
