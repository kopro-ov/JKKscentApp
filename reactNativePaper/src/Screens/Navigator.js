import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../common/RootNavigation';
import { createStackNavigator } from '@react-navigation/stack';

import AppTopNavigationBar from '../Components/AppTopNavigationBar';
import AppBottomNavigationBar from '../Components/AppBottomNavigationBar';
import Detail from '../Screens/Detail';

const Stack = createStackNavigator();

const Navigator = () =>  {
  return (        
    <NavigationContainer
      documentTitle={{
        formatter: (options, route) =>
          `${options?.title ?? route?.name} - 마이센트`,
      }}
      ref={navigationRef}
    >
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          header: AppTopNavigationBar,
        }}>
        <Stack.Screen name="Main" component={AppBottomNavigationBar} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>    
  )
};

export default Navigator;
