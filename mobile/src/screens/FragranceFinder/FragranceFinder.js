
import React from 'react';
import {View, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Stack = createStackNavigator();

function FragranceFinderSurvey({ route, navigation }) {
  /* 2. Get the param */
  /* https://reactnavigation.org/docs/6.x/params */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SkeletonPlaceholder>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 60, height: 60, borderRadius: 50 }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ width: 120, height: 20, borderRadius: 4 }} />
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
          </View>
        </View>
      </SkeletonPlaceholder>      
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('FragranceFinderSurvey', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function FragranceFinderHome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('FragranceFinderSurvey', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function FragranceFinder() {

  return (
    <>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="FragranceFinderHome" component={FragranceFinderHome} />
        <Stack.Screen name="FragranceFinderSurvey" component={FragranceFinderSurvey} />
      </Stack.Navigator>
    </>
  );
}

export default FragranceFinder;

