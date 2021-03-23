import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        Home
      </View>
    );
}

const Drawer = createDrawerNavigator();

const DrawerNavi = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>        
    );
}

export default DrawerNavi;