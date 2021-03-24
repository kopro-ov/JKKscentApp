import React, { useRef } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheet1 = () => {
    const refRBSheet = useRef();

    return (
        <View style={styles.view}>  
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                draggableIcon: {
                    backgroundColor: "#000"
                }
                }}
            >
                <Text>teststsetsetset</Text>
            </RBSheet>    
        </View>
    );
};

const styles = StyleSheet.create({
    view : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    }
    
});

export default BottomSheet1;