import React, { useState } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import moment from 'moment';

import BottomSheet from '../Components/BottomSheet';
import DatePicker from "../Components/DatePicker";
import { TextInput } from 'react-native-paper';

const Trend = () => {
    const nowTime = moment().format('YYYY-MM-DD hh:mm:ss');
    const [ date, setDate ] = useState(nowTime);

    const [ newInput, setNewInput ] = useState('');

    const _addNewInput = () => {
        alert(`Add : ${newInput}`);
        setNewInput('');
    };

    const _handleTextChange = text => {
        setNewInput(text);
    }


    return (
        <View style={styles.view}>
            <StatusBar barStyle="dark-content" />
            <TextInput
                type="flat"
                label="Current Date"
                value={date}
                disabled={true}
            />
            <BottomSheet />
        </View>
    );
};

const styles = StyleSheet.create ({
    view : {
        flex: 1
    }
});

export default Trend;


