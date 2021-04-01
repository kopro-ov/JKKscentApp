import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../screens/Dashboard/Dashboard';
import Community from '../screens/Community/Community';
import TrendChart from '../screens/TrendChart/TrendChart';
import Search from '../screens/Search/Search';
import Mypage from '../screens/Mypage/Mypage';
import { Header } from 'react-native/Libraries/NewAppScreen';

const MainTab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <>
      <MainTab.Navigator
        initialRouteName="Feed"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"    
      >
        <MainTab.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <MainTab.Screen
          name="trendChart"
          component={TrendChart}
          options={{
            tabBarLabel: '트렌드',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="reddit" color={color} size={26} />
            ),
          }}
        />     
        <MainTab.Screen
          name="community"
          component={Community}
          options={{
            tabBarLabel: '커뮤니티',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
          }}
        />            
        <MainTab.Screen
          name="search"
          component={Search}
          options={{
            tabBarLabel: '검색',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <MainTab.Screen
          name="mypage"
          component={Mypage}
          options={{
            tabBarLabel: '마이페이지',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={26} />
            ),
          }}
        />     
      </MainTab.Navigator> 
    </>
  );
}

export default MainNavigator;
