import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppbarHead from '../Components/AppHead';
import GalioNavbar from '../Components/GalioNavbar';


import Home from './Home';
import Search from './Search';
import Trend from './Trend';
import Shop from './Shop';
import Mypage from './Mypage';

const Tab = createBottomTabNavigator();

const Navigator = () =>  {
  return (        
    <NavigationContainer>
      <GalioNavbar />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Trend"
          component={Trend}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-bubble" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="shopping"
          component={Shop}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Mypage"
          component={Mypage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={26} />
            ),
          }}
        />        
      </Tab.Navigator>
    </NavigationContainer>    
  )
};

export default Navigator;
