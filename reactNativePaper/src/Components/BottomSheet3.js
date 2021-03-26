import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Backdrop } from "react-native-backdrop";
import { Text } from 'galio-framework';

const BottomSheet3 = () => {
    const [visible, setVisible] = useState(false);
  
    const handleOpen = () => {
        setVisible(true);
    };
    
    const handleClose = () => {
        setVisible(false);
    };

    return (
        <>
            <View style={styles.view}>
                <TouchableOpacity onPress={() => setVisible(true)} style={styles.touchable}>
                    <Text h5>Handle Backdrop</Text>
                </TouchableOpacity>
            </View>

            <Backdrop
                visible={visible}
                handleOpen={handleOpen}
                handleClose={handleClose}
                onClose={() => {}}
                swipeConfig={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80,
                }}
                animationConfig={{
                    speed: 14,
                    bounciness: 4,
                }}
                overlayColor="rgba(0,0,0,0.32)"
                backdropStyle={{
                    backgroundColor: '#fff',
                }}
            >
                <View>
                    <Text h5>Backdrop Content</Text>
                </View>
            </Backdrop>
        </>
    );


};

const styles = StyleSheet.create({
    view : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    touchable : {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: '#fff',
    }

});

export default BottomSheet3;