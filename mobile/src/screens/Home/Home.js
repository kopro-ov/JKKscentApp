
import React from 'react';
import { SafeAreaView, View, Text, Button, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Main1 from './Main1';
import Detail from './Detail';


function Home({ navigation }) {
  console.log('===> Platform : ', Platform.OS + ' // ' + Platform.Version);

  return (
    <>
      <View>
        <Button
          title="FragranceFinder"
          onPress={() => {
            navigation.navigate('FragranceFinder');
          }}
        />
      </View>
      <ScrollView>
        <Detail />
      </ScrollView>
    </>
  );
}

export default Home;
