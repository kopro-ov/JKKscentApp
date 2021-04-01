import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Dashboard
import DashboardScreen from '../screens/Dashboard/Dashboard';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="MainDrawer">
      <MainStack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}} />
      <MainStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
