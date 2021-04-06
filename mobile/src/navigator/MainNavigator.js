import * as React from 'react';
import { createStackNavigator, HeaderStyleInterpolators  } from '@react-navigation/stack';
import HomeBottomTabs from '~/navigator/HomeBottomTabNaigator';
import FragranceFinder from '@screens/FragranceFinder/FragranceFinder';
import Detail from '@screens/Home/Detail';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator    
      initialRouteName="Home"
      headerMode="screen"
    >
      <Stack.Screen 
        name="Home"
        component={HomeBottomTabs} 
        options={{
          title: 'app',
        }}        
      />
      <Stack.Screen
        name="FragranceFinder" component={FragranceFinder}
        options={{
          gestureEnabled: false,
        }}        
      />
      <Stack.Screen
        name="Detail" component={Detail}
        options={{
          title : 'Product Detail'
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
