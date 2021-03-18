import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions } from 'react-native';

import CardCustom from './src/Components/Card';

import ScentScreens from './src/Screens/ScentsScrees';

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.167:1202/scent')
      .then((response) => response.json())
      .then((json) => { setData(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => (
    <ScentScreens data={item} />
    //<CardCustom data={item} />
  );

  return (
    <CardCustom>
      <SafeAreaView style={styles.container}>         
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </CardCustom>    
  );
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    height: 200,
  }  
});

export default App;