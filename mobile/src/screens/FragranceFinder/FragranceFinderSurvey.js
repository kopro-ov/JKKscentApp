
import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


function getSurverData(itemId="1") {
  const data = require('~/data/fragranceFinderSurver.json');
  const el = data.find(el => el.itemId === itemId);
  return el;
}

function FragranceFinderSurveyButton(props) {
  console.log(props);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>    
  );
}

function FragranceFinderSurvey({ route, navigation }) {
  const { itemId } = route.params;  
  surverData = getSurverData(itemId);
  
  return (    
    <>    
      <SkeletonPlaceholder>
        <View style={{ width: "100%", height: 250,  marginBottom: 10 }} />
      </SkeletonPlaceholder>
      {surverData ? (
        <View style={styles.container}>
          <Text style={styles.title}>{surverData.title}</Text>      
          <View>            
            {surverData.nextButtons.map((item, index) => (
              <FragranceFinderSurveyButton
                text={item.text}
                key={index}
                onPress={() => {
                  navigation.navigate('FragranceFinderSurvey', {
                    itemId: item.itemId
                  });
                }}
              />
            ))}          
          </View>
        </View>         
        ) : (
        <View style={styles.container}>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />         
        </View>
        )}
    </>    
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

export default FragranceFinderSurvey;