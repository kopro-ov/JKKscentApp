import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import CardCustom from './Card';

const Feed = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const fetchScents = async () => {
      setIsError(false);
      setIsLoading(true);        
      try {
        fetch('http://192.168.0.167:1202/scent')
        .then((response) => response.json())
        .then((json) => { setData(json) })
        .catch((error) => console.error(error))    
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchScents();
  }, []);

  const renderItem = ({ item }) => (
    <CardCustom data={item} />
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isError && <Text>에러가 발생했습니다.</Text>}
        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.red800} />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
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


