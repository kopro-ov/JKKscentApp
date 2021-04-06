
import React from 'react';
import { SafeAreaView, Text, Button} from 'react-native';

import Main1 from './Main1';

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Home</Text> 
      <Button
        title="FragranceFinder"
        onPress={() => {
          navigation.navigate('FragranceFinder');
        }}
      />
      <Main1 />
    </SafeAreaView>
  );
}

export default Home;
