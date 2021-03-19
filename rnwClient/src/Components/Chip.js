import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

const ChipExample = () => {
  return (
    <View style={styles.view}>
      <Chip 
        icon={require('../Image/Icon/cancel.png')}
        style={styles.cricket} 
        mode={'outlined'}
        onPress={() => console.log('press chip')} 
      > Press1</Chip>
      
      <Chip 
        icon={require('../Image/Icon/cancel.png')} 
        style={styles.hockey} 
        mode={'outlined'}
        onPress={() => console.log('press chip')} 
      > Press2</Chip>

      <Chip 
        icon={require('../Image/Icon/cancel.png')} 
        style={styles.baseball} 
        mode={'outlined'}
        onPress={() => console.log('press chip')} 
      > Press3</Chip>

      <Chip 
        icon={require('../Image/Icon/cancel.png')} 
        style={styles.basketball} 
        mode={'outlined'}
        onPress={() => console.log('press chip')} 
      > Press4</Chip>
    </View>
  );
};

export default ChipExample;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cricket: {
    width : 110,
    marginBottom:15,
    borderColor: '#8a2be2',
    borderWidth: 1
  },
  hockey: {
    width : 110,
    marginBottom:15,
    borderColor: '#dc143c',
    borderWidth: 1
  },
  baseball: {
    width : 110,
    marginBottom:15,
    borderColor: '#8b008b',
    borderWidth: 1
  },
  basketball: {
    width : 110,
    borderColor: '#800000',
    borderWidth: 1
  }
});