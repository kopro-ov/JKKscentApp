
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

function FragranceFinderResult({ navigation }) {

  return (
    <View>
      <Text style={styles.title}>그분에게 어울리는 향기를{"\n"}찾았어요.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push('FragranceFinderSurvey', {itemId: 1, reset: true})
        }}        
      >
        <Text>다시 하기</Text>
      </TouchableOpacity>          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 40
  },  
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    marginTop: 10,
    marginBottom: 10
  }
});

export default FragranceFinderResult;
