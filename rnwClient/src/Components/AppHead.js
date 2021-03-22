import React from 'react';
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppbarHead = () => {    
    const _drawerMenu = () => console.log('Open Menu');
    const _handleSearch = () => console.log('Searching');  

    return (
        <Appbar.Header>
            <Appbar.Action 
                icon={require('../Image/Icon/grain.png')} 
                onPress={_drawerMenu} 
            />
            <Appbar.Content title="My Scent" subtitle="Subtitle" />
            <Appbar.Action 
                icon={require('../Image/Icon/search.png')} 
                onPress={_handleSearch} 
            />            
        </Appbar.Header>
    );    
};

export default AppbarHead;