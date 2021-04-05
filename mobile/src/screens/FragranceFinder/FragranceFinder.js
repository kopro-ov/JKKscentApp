
import React from 'react';
import {View, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import FragranceFinderSurvey from '@screens/FragranceFinder/FragranceFinderSurvey';

const Stack = createStackNavigator();

function FragranceFinderHome({ navigation }) {
  return (    
    <>
      <SkeletonPlaceholder>
        <View style={{ width: "100%", height: 250,  marginBottom: 10 }} />
      </SkeletonPlaceholder>      
      <View style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <View style={{ marginTop:30, marginBottom: 20 }}>
          <Text
            style={{ fontSize: 20 }}
          >
            어떤 향기를{"\n"}찾아 드릴까요?
          </Text>
        </View>
        <View>
          <Button
            title="내가 쓰는 향기"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('FragranceFinderSurvey', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
          <Button
            title="선물하고 싶은 향기"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('FragranceFinderSurvey', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />          
        </View>
      </View>
    </>
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

