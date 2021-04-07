import React from 'react';
import { View } from 'react-native';
import PureChart from 'react-native-pure-chart';
import { Colors } from 'react-native-ui-lib';

const ChartCustom = () => {
    let sampleData = [
        {
          value: 50,
          label: '1',
          color: Colors.red40,
        }, 
        {
          value: 40,
          label: '2',
          color: Colors.blue40
        }, 
        {
          value: 25,
          label: '3',
          color: Colors.green40
        },
        {
          value: 10,
          label: '4',
          color: Colors.grey40
        }
    ]

    return (
        <View style={{flex : 1}}>
            <PureChart 
                data={sampleData} 
                type='pie'                 
            />
        </View>        
    );
};

export default ChartCustom;