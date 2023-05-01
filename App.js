/*import React from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App = () => {
  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
          
        <Text>Hola </Text>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
*/

import React from 'react';
import 'react-native-gesture-handler';
import 'nativewind'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './navigation/DrawerNavigation';





const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>
  );
};


export default App;