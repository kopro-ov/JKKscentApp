import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePicker2 = () => {
    const [date, setDate] = useState(new Date())

    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.view}>
                <DatePicker
                    date={date}
                    onDateChange={setDate}
                    mode='datetime'
                    androidVariant='nativeAndroid'
                />            
            </View>
        </SafeAreaView>        
    );
}

const styles = StyleSheet.create ({
    view : {
        flex: 1
    }
});


export default DatePicker2;