import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Chip, Spacings, Typography, Card, Colors, Button, RadioGroup, Slider, Text} from 'react-native-ui-lib';

const Detail = ({}) => {
    return (
        <View style={styles.view}>
            <Text text50BL green10 style={{marginTop : Spacings.s3, marginBottom : Spacings.s3, marginLeft: Spacings.s2}}>
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


            <Card>
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
                
                <View style={{marginTop : Spacings.s3}}>
                    <AirbnbRating 
                        showRating={false}
                        count={5}
                        defaultRating={3}                         
                        size={20}
                    />
                </View>        

                <Card.Section
                    bg-white
                    content={[
                        {text: 'Trend : 요즘 뜨는', text70: true, purple10: true},
                        {text: 'Pick : 78%  잘 어울리는 향기예요.', text80: true, purple30: true}
                    ]}
                    style={{padding: 20, alignItems : 'center'}}
                />
            </Card>

            
            
        </View>
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
        marginLeft : Spacings.s3
    },
    typoRow : {
        flex : 0.5,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop : Spacings.s4,
        marginBottom: Spacings.s4,
        marginLeft: Spacings.s2
    }
});


export default Detail;