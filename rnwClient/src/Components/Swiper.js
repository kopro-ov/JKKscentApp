import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button , BottomSheet, ListItem } from 'react-native-elements';

const SwiperCustom = () => {
    const [isVisible, setIsVisible] = useState(false);

    const list = [
        { title: '향기타입' },
        { title: '대표향수' },
        {
          title: 'Cancel',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          onPress: () => setIsVisible(false),
        },
    ];
    
    return (
        <SafeAreaProvider containerStyle={Styles.container}>
            <Button title="Button" type="outline" onPress={() => setIsVisible(true)}/>
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >
                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </SafeAreaProvider>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
});

export default SwiperCustom;

