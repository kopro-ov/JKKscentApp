
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@screens/Home/Home';
import Community from '@screens/Community/Community';
import TrendChart from '@screens/TrendChart/TrendChart';
import Search from '@screens/Search/Search';
import Mypage from '@screens/Mypage/Mypage';

const HomeBottomTab = createBottomTabNavigator();

function HomeNaigator() {
  
  return (
    <HomeBottomTab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465" 
    >
      <HomeBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <HomeBottomTab.Screen
        name="TrendChart"
        component={TrendChart}
        options={{
          tabBarLabel: '트렌드',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="reddit" color={color} size={26} />
          ),
        }}
      />     
      <HomeBottomTab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: '커뮤니티',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />            
      <HomeBottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <HomeBottomTab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />     
    </HomeBottomTab.Navigator> 
  );
}

export default HomeNaigator;
