import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Title } from 'react-native-paper';

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Title>Date Selector</Title>
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create ({
    container : {
        flex : 1
    },
    view : {
        flex: 1,
        flexDirection: 'row',
    }
});

export default DatePicker;