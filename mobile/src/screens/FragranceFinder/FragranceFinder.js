
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FragranceFinderSurvey from '@components/pages/FragranceFinderSurvey';
import FragranceFinderResult from '@components/pages/FragranceFinderResult';

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
        <Stack.Screen
          name="FragranceFinderResult"
          component={FragranceFinderResult}
        />        
      </Stack.Navigator>
    </>
  );
}

export default FragranceFinder;

