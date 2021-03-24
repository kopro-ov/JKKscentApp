import React from 'react';
import { Appbar } from 'react-native-paper';

const AppTopNavigationBar = ({ navigation }) => {    

    const _drawerMenu = () => console.log('menu');
    const _handleSearch = () => console.log('Searching');  

    return (
        <Appbar.Header>
            <Appbar.Action 
                icon="grain"
                onPress={() => navigation.navigate('Feed')}
            />  
            <Appbar.Content title="My Scent" />
            <Appbar.Action 
                icon="magnify"
                onPress={_handleSearch} 
            />            
        </Appbar.Header>
    );    
};

export default AppTopNavigationBar;