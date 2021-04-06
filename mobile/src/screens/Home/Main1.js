import React from 'react';
import { SafeAreaView, ScrollView, View, Alert, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Chip, Spacings, Typography, Card, Colors, Button, Text } from 'react-native-ui-lib';


const MyCent1 = ({}) => {
    return (
        <ScrollView style={styles.view}>
            <Text text50BL green10 style={{marginTop : Spacings.s3, marginLeft: Spacings.s2}}>
                당신에게 필요한 향기를 찾아드려요.
            </Text>
            <SkeletonPlaceholder>                
                <SkeletonPlaceholder.Item width="100%" height={140} />
            </SkeletonPlaceholder>



            <View style={styles.chipRow}>
                <Chip
                    label={'# 봄'}
                    labelStyle={{ color: Colors.green10, ...Typography.text50BO }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 0,
                    }}
                />
                <Chip
                    label={'# 상쾌함'}
                    labelStyle={{ color: Colors.green10, ...Typography.text50BO }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 0,
                        marginLeft: Spacings.s2
                    }}
                />
                <Chip
                    label={'# 20대'}
                    labelStyle={{ color: Colors.green10, ...Typography.text50BO }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 0,
                        marginLeft: Spacings.s2
                    }}
                />
            </View>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignContent="center" justifyContent="center">
                    <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item width={175} height={175} borderRadius={6} marginRight={10}/>
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item width={175} height={175} borderRadius={6} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <View style={styles.typoRow}>
                <Card.Section
                    content={[
                        {
                            text : '샤넬 코코 마드모아젤 오 드 빠르펭 엥땅스', 
                            text70: true, 
                            grey10: true
                        },
                        {
                            text :'향 계열 : 플로럴',
                            text80: true,
                            grey10: true
                        },
                        {
                            text :'fits : 82%',
                            text90: true,
                            yellow20: true
                        }
                    ]}
                    style={{padding: 10, flex: 1}}
                />
                <Card.Section
                    content={[
                        {
                            text : '샤넬 가브리엘 팜므 오드퍼퓸', 
                            text70: true, 
                            grey10: true
                        },
                        {
                            text :'향 계열 : 플로럴',
                            text80: true,
                            grey10: true
                        },
                        {
                            text :'fits : 74%',
                            text90: true,
                            yellow20: true
                        }
                    ]}
                    style={{padding: 10, flex: 1}}
                />
            </View>



            <Text text50BL green10 style={{marginLeft: Spacings.s2, marginBottom : Spacings.s3}}>
                타인의 취향
            </Text>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignContent="center" justifyContent="center">
                    <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item width={185} height={175} borderRadius={6} marginRight={10}/>
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item width={185} height={175} borderRadius={6} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <View style={styles.typoRow}>                
                <View style={{flex : 1, marginLeft : Spacings.s2, marginRight : Spacings.s2}}>
                    <Text text80 grey10>
                        abcd님의 취향
                    </Text>
                    <View style={{flex : 1, flexDirection : 'row', justifyContent : 'flex-end'}}>
                        <Button style={{marginRight: 10}} text90 link label="#20대" />
                        <Button style={{marginRight: 10}} text90 link label="#여성"/>
                        <Button text90 link label="#원룸"/>
                    </View>                    
                </View>

                <View style={{flex : 1, marginLeft : Spacings.s2, marginRight : Spacings.s2}}>
                    <Text text80 grey10>
                        abcd님의 취향
                    </Text>
                    <View style={{flex : 1, flexDirection : 'row', justifyContent : 'flex-end'}}>
                        <Button style={{marginRight: 10}} text90 link label="#20대" />
                        <Button style={{marginRight: 10}} text90 link label="#여성"/>
                        <Button text90 link label="#원룸"/>
                    </View>                    
                </View>                
            </View>



            <Text text50BL green10 style={{marginLeft: Spacings.s2, marginBottom : Spacings.s3}}>
                이달의 향기(3월)
            </Text>
            <SkeletonPlaceholder>                
                <SkeletonPlaceholder.Item width="100%" height={140} />
            </SkeletonPlaceholder>        
            <View style={styles.chipRow}>
                <Chip
                    label={'# 봄날'}
                    labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor : Colors.grey30,
                        marginRight : Spacings.s2
                    }}
                />
                <Chip
                    label={'# 나들이'}
                    labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor : Colors.grey30,
                        marginRight : Spacings.s2
                    }}
                />
                <Chip
                    label={'# 신선함'}
                    labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor : Colors.grey30,
                        marginRight : Spacings.s2
                    }}
                />
                <Chip
                    label={'# 꽃향'}
                    labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                    iconColor={Colors.black}
                    onPress={() => Alert.alert('onPress')}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor : Colors.grey30
                    }}
                />
            </View>
            <Text text60BO grey20 style={{marginLeft: Spacings.s2, marginTop : Spacings.s2, marginBottom : Spacings.s3}}>
                봄이 느껴지는 홈 프레그런스 추천
            </Text>



            <Text text50BL green10 style={{marginLeft: Spacings.s2, marginTop : Spacings.s2, marginBottom : Spacings.s2}}>
                Event
            </Text>
            <SkeletonPlaceholder>                
                <SkeletonPlaceholder.Item width="100%" height={120} />
            </SkeletonPlaceholder>           



            <Text text50BL green10 style={{marginLeft: Spacings.s2, marginTop : Spacings.s4, marginBottom : Spacings.s2}}>
                당신의 선택
            </Text>
            <SkeletonPlaceholder>                
                <SkeletonPlaceholder.Item width="100%" height={120} />
            </SkeletonPlaceholder>         
            <Text text60BO grey20 style={{marginLeft: Spacings.s2, marginTop : Spacings.s2, marginBottom : Spacings.s3}}>
                침실에 어울리는 향기는?
            </Text>        

        </ScrollView>
    );
};

MyCent1.propTypes = {};
MyCent1.defaultProps = {};

const styles = StyleSheet.create({
    view : {
        flex : 1,
        marginTop: Spacings.s2, 
        marginBottom: Spacings.s3
    },
    chipRow : {
        flex : 0.5,
        flexDirection : 'row',
        marginTop: Spacings.s3,
        padding: Spacings.s1
    },
    typoRow : {
        flex : 0.5,
        flexDirection : 'row',
        marginBottom: Spacings.s4
    }
});

export default MyCent1;