import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePagePresenter} from '../pages';
import {ProductEditPagePresenter} from '../pages/ProductEditPage/ProductEditPagePresenter';

export type PrivateStackParamList = {
  HomePage: undefined;
  ProductEdit: {
    id?: string;
  };
};

const Stack = createStackNavigator<PrivateStackParamList>();

function PrivateStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePagePresenter} />
      <Stack.Screen name="ProductEdit" component={ProductEditPagePresenter} />
    </Stack.Navigator>
  );
}

export default PrivateStack;
