
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FragranceFinderSurvey from '@screens/FragranceFinder/FragranceFinderSurvey';

const Stack = createStackNavigator();

function FragranceFinder() {

  return (
    <>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen
          name="FragranceFinderSurvey"
          component={FragranceFinderSurvey} 
          initialParams={{ itemId: 1 }}
        />
      </Stack.Navigator>
    </>
  );
}

export default FragranceFinder;

