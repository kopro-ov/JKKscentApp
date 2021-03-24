import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import CardCustom from './Card';

const Feed = () => {
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
      <>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,    
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
export default Feed;


