import React from 'react';
import { ScrollView, Alert, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Avatar, View, Chip, Spacings, Typography, Card, Colors, Button, RadioGroup, Slider, Text} from 'react-native-ui-lib';
import { AirbnbRating } from 'react-native-ratings';

import ChartCustom from './Chart';

const Detail = ({}) => {
    return (
        <ScrollView style={styles.view}>
            <Text text50BL green10 style={{marginTop : Spacings.s3, marginBottom : Spacings.s1, marginLeft: Spacings.s2}}>
                상품 상세
            </Text>
            <SkeletonPlaceholder>                
                <SkeletonPlaceholder.Item width="100%" height={150} />
            </SkeletonPlaceholder>
            <View style={styles.typoRow}>
                <Text text70 grey10>
                    샤넬 가브리엘 팜므 오드퍼퓸                    
                </Text>                
                <Button style={{alignItems : 'flex-end'}} text90 label="브랜드관" />
            </View>

            <View style={{flex : 0.5, justifyContent : 'space-between', marginTop : Spacings.s1, marginBottom : Spacings.s1}}>
                <AirbnbRating 
                    showRating={false}
                    count={5}
                    defaultRating={3}                         
                    size={20}
                />
            </View>    

            <Card padding-5>
                <View style={styles.chipRow}>
                    <Chip
                        label={'# 상큼한'}
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
                        label={'# 30대'}
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
                        label={'# 로즈'}
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
                        label={'# 가벼운'}
                        labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                        iconColor={Colors.black}
                        onPress={() => Alert.alert('onPress')}
                        containerStyle={{
                            borderWidth: 1,
                            borderColor : Colors.grey30,
                            marginRight : Spacings.s2
                        }}
                    />
                </View>
                            
                <Card.Section
                    bg-white
                    margin-5                    
                    content={[
                        {text: '플로럴 향수 : 5위', text70: true, purple10: true},
                        {text: 'Pick : 78%  잘 어울리는 향기예요.', text80: true, purple30: true}
                    ]}
                />

                <View style={styles.chartCard}>                    
                    <SkeletonPlaceholder style={styles.chartSkeleton}>                
                        <SkeletonPlaceholder.Item width={150} height={150} />
                    </SkeletonPlaceholder>
                    <SkeletonPlaceholder style={styles.chartSkeleton}>                
                        <SkeletonPlaceholder.Item width={250} height={150} />
                    </SkeletonPlaceholder>
                </View>

                <View flex right margin-5>
                    <Button 
                        label="향 노트"
                        size={Button.sizes.small}
                    />
                </View>
               
            </Card>
                
            <View style={styles.season}>
                <Text text80 margin-10>
                    선호하는 계절
                </Text>
                <ChartCustom />
            </View>
            
            <Card>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator = {false}>
                    <View style={styles.chipRow}>
                        <Chip
                            label={'# 상큼한'}
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
                            label={'# 30대'}
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
                            label={'# 로즈'}
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
                            label={'# 가벼운'}
                            labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                            iconColor={Colors.black}
                            onPress={() => Alert.alert('onPress')}
                            containerStyle={{
                                borderWidth: 1,
                                borderColor : Colors.grey30,
                                marginRight : Spacings.s2
                            }}
                        /><Chip
                            label={'# 상큼한'}
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
                            label={'# 30대'}
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
                            label={'# 로즈'}
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
                            label={'# 가벼운'}
                            labelStyle={{ color: Colors.grey30, ...Typography.text90BL }}
                            iconColor={Colors.black}
                            onPress={() => Alert.alert('onPress')}
                            containerStyle={{
                                borderWidth: 1,
                                borderColor : Colors.grey30,
                                marginRight : Spacings.s2
                            }}
                        />                   
                    </View>
                </ScrollView>

                <View marginL-10 style={{flex : 1, flexDirection : 'row'}}>
                    <Avatar containerStyle={{marginVertical: 5}} ribbonLabel = 'New' />
                    <View marginL-30> 
                        <Text text70 >
                            홍길동 / 32세 / 남
                        </Text>
                        <Text text90BL>
                            향기가 너무 상큼하고 마음에 듭니다. 특히 선물하닌깐 너무...
                        </Text>
                    </View>                        
                </View>

                <View marginL-10 style={{flex : 1, flexDirection : 'row'}}>
                    <Avatar containerStyle={{marginVertical: 5}} ribbonLabel = 'New' />
                    <View marginL-30> 
                        <Text text70 >
                            홍길동 / 32세 / 남
                        </Text>
                        <Text text90BL>
                            향기가 너무 상큼하고 마음에 듭니다. 특히 선물하닌깐 너무...
                        </Text>
                    </View>                        
                </View>

                <View marginL-10 style={{flex : 1, flexDirection : 'row'}}>
                    <Avatar containerStyle={{marginVertical: 5}} ribbonLabel = 'New' />
                    <View marginL-30> 
                        <Text text70 >
                            홍길동 / 32세 / 남
                        </Text>
                        <Text text90BL>
                            향기가 너무 상큼하고 마음에 듭니다. 특히 선물하닌깐 너무...
                        </Text>
                    </View>                        
                </View>
                

            </Card>
            
            
        </ScrollView>
    );
};


Detail.propTypes = {};
Detail.defaultProps = {};


const styles = StyleSheet.create({
    view : {
        marginTop: Spacings.s2, 
        marginBottom: Spacings.s3
    },
    chipRow : {
        flex : 0.5,
        flexDirection : 'row',
        marginTop: Spacings.s3,
        marginLeft : Spacings.s3,
        marginBottom : Spacings.s3
    },
    typoRow : {
        flex : 0.5,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop : Spacings.s4,
        marginBottom: Spacings.s2,
        marginLeft: Spacings.s2
    },
    chartCard : {
        flex : 1, 
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
    chartSkeleton : {
        marginTop : Spacings.s3,
        marginLeft : Spacings.s2,
        marginRight : Spacings.s2,
        marginBottom : Spacings.s2
    },
    season : {
        flex : 1, 
        alignItems : 'center', 
        marginTop : 20, 
        marginLeft : 5, 
        marginRight : 5,
        marginBottom : 10 
    }
});


export default Detail;