import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import DatePicker from "./DatePicker";
import DatePicker2 from "./DatePicker2";

const BottomSheet = () => {
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
                <DatePicker2 />
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

