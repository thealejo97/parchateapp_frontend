import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
