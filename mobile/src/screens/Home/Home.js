
import React from 'react';
import { SafeAreaView, View, Text, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Main1 from './Main1';

function Home({ navigation }) {
  return (
    <>
      <View>
        <Text>Home</Text> 
        <Button
          title="FragranceFinder"
          onPress={() => {
            navigation.navigate('FragranceFinder');
          }}
        />
      </View>
      <ScrollView>
        <Main1 />
      </ScrollView>
    </>
  );
}

export default Home;
