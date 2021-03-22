import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { 
        createDrawerNavigator, 
        DrawerContentScrollView, 
        DrawerItemList, DrawerItem 
    } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CardCustom from '../Components/Card';

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const MainNaviScreens = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notifications" component={CardCustom} />
      </Drawer.Navigator>
    </NavigationContainer>    
  );
}

export default MainNaviScreens;
