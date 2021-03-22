import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Avatar, Button, Card, Title, Dialog, Paragraph } from 'react-native-paper';

const DetailCustom = () => {
    console.log('detail 호출');
    return (
        <View>
            <Title>name</Title>
            <Paragraph>detail</Paragraph>
        </View>
    );
};

export default DetailCustom;