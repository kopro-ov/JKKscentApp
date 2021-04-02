
import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const FragranceFinderStack = createStackNavigator();

function FragranceFinder() {

  return (
    <View>
      <Text>어떤 향기를 찾아 드릴까요?</Text>
      <Button
        title="내가 쓰는 향기"
      />
      <Button
        title="선물하고 싶은 향기"
      />      
    </View>
  );
}

export default FragranceFinder;
