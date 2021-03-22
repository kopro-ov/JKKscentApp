import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-simple-modal';

const DialogCustom = ({state}) => {
    console.log('click more!');    

    return (
        <View style={styles.view}>
            <Modal
                offset={this.state.offset}
                open={this.state.open}
                modalDidOpen={() => console.log('modal did open')}
                modalDidClose={() => this.setState({open: false})}
                style={{alignItems: 'center'}}>
                <View>
                <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
                <TouchableOpacity
                style={{margin: 5}}
                onPress={() => this.setState({offset: -100})}>
                    <Text>Move modal up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{margin: 5}}
                    onPress={() => this.setState({offset: 0})}>
                    <Text>Reset modal position</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{margin: 5}}
                    onPress={() => this.setState({open: false})}>
                    <Text>Close modal</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    view : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default DialogCustom;