import React, { useRef } from "react";
import { StyleSheet, View, Button, useWindowDimensions } from "react-native";
import { TextInput } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";

import DatePicker from "./DatePicker";
import DatePicker2 from "./DatePicker2";

const BottomSheet = () => {
    const refRBSheet = useRef();
    const windowHeight = useWindowDimensions().height;

    return (
        <View style={styles.view}>
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />            
            <RBSheet
                ref={refRBSheet}
                height={windowHeight/2}
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
                <TextInput placeholder="내용을 입력하세요" autoCapitalize="none" autoCorrect={false} returnKeyType="done" />
                <DatePicker2 />
                <Button title="regist" />
            </RBSheet>
        </View>
    );
};

const styles = StyleSheet.create ({
    view : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D1D6FF"
    }
});

export default BottomSheet;

