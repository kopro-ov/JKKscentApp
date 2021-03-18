import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'galio-framework';

const ScentScreens = ({ data }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{ uri: 'http://192.168.0.167:1202/' + data.thumbnailFilename }}
      />
      <Text grey>{data.name}</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#9FA5AA',
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

export default ScentScreens;
 
