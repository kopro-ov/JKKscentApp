import React, { useState } from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import moment from 'moment';

import DatePicker from "../Components/DatePicker";
import { TextInput } from 'react-native-paper';

import BottomSheet from '../Components/BottomSheet';
import BottomSheet2 from '../Components/BottomSheet2';
import BottomSheet3 from '../Components/BottomSheet3';

const Trend = () => {
    const nowTime = moment().format('YYYY-MM-DD hh:mm:ss');
    const [ date, setDate ] = useState(nowTime);

    return (
        <SafeAreaView style={styles.view}>
            <StatusBar barStyle="dark-content" />
            <TextInput
                type="flat"
                label="Current Date"
                value={date}
                disabled={true}
            />
            <BottomSheet />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    view : {
        flex: 1
    }
});

export default Trend;


