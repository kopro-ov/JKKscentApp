
import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useNavigation } from '@react-navigation/native';

function SurveyButton(props) {
  
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>    
  );
}

function SurveyButtonList(props) {
  const navigation = useNavigation();  
  const nextButtons = props.nextButtons; 
  const finish = props.finish;
  
  return (
    nextButtons.map((item, index) => (
      <SurveyButton
        text={item.text}
        key={index}
        onPress={() => {
          {
            finish 
          ? navigation.navigate('FragranceFinderResult')
          : navigation.push('FragranceFinderSurvey', {itemId: item.itemId})
          }
        }}
      />
    ))
  );
}
function SurveyNext(props) {
  const navigation = useNavigation();  
  const data = props.surverData;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      {data.nextButtons ? (
          <SurveyButtonList 
            nextButtons={data.nextButtons}
            finish={data.finish}
          />
        ) : (
          <View>
            <Text>다음 버튼이 존재하지 않습니다.</Text>
            <Button title="뒤로 가기" onPress={() => navigation.goBack()} />
          </View>
        )}
    </View>
  );
}

function FragranceFinderSurvey({ route, navigation }) {
  const { itemId } = route.params;
  const surverData = require('~/data/fragranceFinderSurver.json').find(el => el.itemId === itemId);
  
  return (    
    <>    
      <SkeletonPlaceholder>
        <View style={{ width: "100%", height: 250,  marginBottom: 10 }} />
      </SkeletonPlaceholder>
      {surverData ? (
        <SurveyNext 
          surverData={surverData}
        />        
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