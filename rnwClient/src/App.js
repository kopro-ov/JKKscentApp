import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';

import CardCustom from './Components/Card';
import AppbarHead from './Components/AppHead';
import SwiperCustom from './Components/Swiper';
import BottomSheet1 from './Components/BottomSheet1';

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
    //<Scent data={item} />
    <CardCustom data={item} />
  );

  return (
    <View style={styles.container}>
      <AppbarHead />
      <SwiperCustom style={styles.swipe} />
      <BottomSheet1 style={styles.swipe} />
      <SafeAreaView style={styles.list}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </View>    
  );
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  swipe : {
    flex: 1, 
  },
  list : {
    flex: 3, 
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  }
});

export default App;