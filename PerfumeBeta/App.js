import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PerFumeList from './src/Components/Main';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <PerFumeList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
