import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppbarHead = () => {    
    const _drawerMenu = () => console.log('menu');
    const _handleSearch = () => console.log('Searching');  

    return (
        <Appbar.Header>
            <Appbar.Action 
                icon="grain"
                onPress={_drawerMenu} 
            />  
            <Appbar.Content title="My Scent" subtitle="Subtitle" />
            <Appbar.Action 
                icon="magnify"
                onPress={_handleSearch} 
            />            
        </Appbar.Header>
    );    
};

export default AppbarHead;