import React, {useState, useEffect, Fragment} from 'react';
import { SafeAreaView, ScrollView, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions } from 'react-native';

import AppbarHead from './Components/AppHead';
import AppbarBottom from './Components/AppbarBottom';
import CardCustom from './Components/Card';
import ChipCustom from './Components/Chip';

import ScentScreens from './Screens/ScentsScrees';

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
     <Fragment>
        <AppbarHead />
        <ChipCustom />
        <SafeAreaView style={styles.container}>
            <CardCustom />            
            {/**
             * 
             *        
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    />
            
            * 
            */}
        </SafeAreaView>
        <AppbarBottom />
     </Fragment>     
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