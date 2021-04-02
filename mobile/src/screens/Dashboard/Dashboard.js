
import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Dashboard/Home';
import FragranceFinder from '@screens/FragranceFinder/FragranceFinder';

const Stack = createStackNavigator();

function Dashboard() {

  return (
    <>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FragranceFinder" component={FragranceFinder} />
      </Stack.Navigator>
    </>
  );
}

export default Dashboard;
