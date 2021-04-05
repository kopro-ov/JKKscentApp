
import React from 'react';
import {View, Text, Button} from 'react-native';

function Home({ navigation }) {
  
  // const navigation = useNavigation();

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
