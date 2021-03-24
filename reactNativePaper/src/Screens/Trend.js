import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import BottomSheet from '../Components/BottomSheet';
import DatePicker from "../Components/DatePicker";

const Trend = () => {
    const [date, setDate] = useState(new Date().toString());


    return (
        <View style={styles.view}>
            <TextInput
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


