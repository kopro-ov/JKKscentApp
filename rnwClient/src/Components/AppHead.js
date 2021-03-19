import React from 'react';
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppbarHead = () => {    
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');  
    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            <Appbar.BackAction 
                onPress={_goBack} 
                icon={require('../Image/Icon/arrow.png')}
            />
            <Appbar.Content title="My Scent" subtitle="Subtitle" />
            <Appbar.Action 
                icon={() => <Ionicons name="md-search" color='#ffffff' size={20}/>} 
                onPress={_handleSearch} 
            />
            <Appbar.Action 
                icon={() => <Ionicons name="md-albums" color='#ffffff' size={20}/>} 
                onPress={_handleMore} 
            />
        </Appbar.Header>
    );    
};

export default AppbarHead;