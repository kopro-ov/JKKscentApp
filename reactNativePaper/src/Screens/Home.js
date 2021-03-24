import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Feed from '../Components/Feed';

const Tab = createMaterialTopTabNavigator();

const HyangOn = () => {
  return (
      <View>
          <Text>향온</Text>
      </View>
  );
};

const Event = () => {
  return (
      <View>
          <Text>이벤트</Text>
      </View>
  );
};

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ tabBarLabel: 'NOW' }}
      />
      <Tab.Screen
        name="hyangOn"
        component={HyangOn}
        options={{ tabBarLabel: '향ON' }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
        options={{ tabBarLabel: '이벤트' }}
      />      
    </Tab.Navigator>
  );
};

export default Home;
