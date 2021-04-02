
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Home() {
  
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text> 
      <Button
          title="FragranceFinder"
          onPress={() => {
            navigation.navigate('FragranceFinder');
          }}
        />
    </View>
  );
}

export default Home;
