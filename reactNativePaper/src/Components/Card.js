import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Dialog, Paragraph } from 'react-native-paper';

import DialogCustom from './Dialog';

const CardCustom = ({ data }) => {

    const detailMore = () => (
        <DialogCustom />
    );

    return (        
        <Card>
            <Card.Content style={{backgroundColor : '#B0C4DE' }}>
                <Title>{data.name}</Title>
                <View style={styles.line}>
                    <Paragraph>{data.categories}</Paragraph>
                    <Paragraph >{data.regDt}</Paragraph>
                </View>                
            </Card.Content>
            <Card.Cover source={{ uri: 'http://192.168.0.167:1202/' + data.thumbnailFilename }} />
            <Card.Actions>
                <Button onPress={ () => detailMore() }>More</Button>
            </Card.Actions>
        </Card>        
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection : 'column',
    },    
    card : {
        flex : 1,
        flexDirection: 'column', // row
        backgroundColor: 'white',
        padding : 1
    },
    line : {
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        borderBottomWidth:0.5,
        padding: 5,
    }
});

export default CardCustom;