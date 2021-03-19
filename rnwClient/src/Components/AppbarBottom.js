import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import IconCustom from './Icon';


const AppbarBottom = () => {
    return (
        <Appbar style={styles.bottom}>
            <Appbar.Action
                icon={require('../Image/Icon/home.png')}
                onPress={() => console.log('Pressed Appbar')}
            />
            <Appbar.Action 
                icon={require('../Image/Icon/mail.png')}
                onPress={() => console.log('Pressed mail')} 
            />
            <Appbar.Action 
                icon={require('../Image/Icon/price-tag.png')}
                onPress={() => console.log('Pressed label')} 
            />
        </Appbar>
    );    
};

const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
});

export default AppbarBottom;