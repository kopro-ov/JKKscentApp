import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import Modal from "react-native-modal";
import DetailCustom from '../Detail';

const DetailModal = ({ isVisible, closeModal, ...otherProps }) => {
    return (
        <Modal isVisible={isVisible}>
            <View style={styles.view}>
                <TouchableOpacity onPress={() => closeModal("detailModal")}>
                    <Text>Close Modal</Text>
                </TouchableOpacity>

                <View>
                   <DetailCustom />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    view : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default DetailModal;