import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Trend from '../Screens/Trend';
import Shop from '../Screens/Shop';
import Mypage from '../Screens/Mypage';

const Tab = createMaterialBottomTabNavigator();

const BottomNavi = () =>  {
  
  return (      
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"    
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Trend"
        component={Trend}
        options={{
          tabBarLabel: '트렌드',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bubble" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shop}
        options={{
          tabBarLabel: '쇼핑',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarLabel: '프로필',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />        
    </Tab.Navigator>    
  )
};


export default BottomNavi;