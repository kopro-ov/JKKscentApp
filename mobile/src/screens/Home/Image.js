import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { Text, Image, Colors, FloatingButton } from 'react-native-ui-lib';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IMAGE_URL = 'https://images.pexels.com/photos/748837/pexels-photo-748837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const ImageScreen = () => {
    const [ overlayType, setOverlayType ] = useState('top');
    const [ showButton, setShowButton ] = useState(false);

    const renderOverlayContent = () => {
        return (
            <>
                <View padding-10 flex>
                    <View row centerV>
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                        <Text text30>
                            Overlay Content
                        </Text>
                    </View>
                </View>
            </>
        );
    };

    const close = () => {
        Alert.alert('시향 페이지');
        setShowButton(false);
    };
       

    return (
        <View style={styles.container}>
            <Image
                source={{uri: IMAGE_URL}}
                cover={true}                
                overlayType={overlayType}
                showOverlayContent={true}                
                {...{[`margin-${0}`]: true}}
            />
            <FloatingButton
                visible={true}
                button={{
                    label: '시향',
                    onPress: () => close(),
                    style : styles.button,
                    color : Colors.grey90,
                    backgroundColor : Colors.blue30,
                }}
                // bottomMargin={80}
                // hideBackgroundOverlay
                // withoutAnimation
            />
        </View>        
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 0,
        flex: 1,
        backgroundColor: Colors.white
    },
    button : {
        flex : 1,
        margin : 10,
        justifyContent : 'center',
        height : 20,
    }
});

export default ImageScreen;





