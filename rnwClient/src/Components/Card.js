import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

import { Block, Card } from 'galio-framework';
import themeColor from '../theme/Colors';
import themeSize from '../theme/Sizes';

const CardCustom = ({ data }) => {
    return (
        <>
            <ScrollView contentContainerStyle={styles.cards}>
                <Block flex space="between">
                    {data && data.map((data, id) => (
                        <Card
                            key={data.id}
                            flex
                            borderless
                            shadowColor={themeColor.BLACK}
                            title={data.name}
                            caption={data.price}
                            style={styles.card}
                            avatar={data.thumbnailFilename}
                            image={data.thumbnailFilename}
                            imageStyle={styles.rounded}
                            imageBlockStyle={{ padding: themeSize.BASE / 2 }}
                            footerStyle={styles.full}
                        >
                        </Card>
                    ))}
                </Block>
            </ScrollView>
        </>
    );
};

const styles = theme =>
    StyleSheet.create ({
        container : {
            flex: 1       
        },

        cards: {
            flex : 1,
            borderWidth: 0,
            padding : 10,
            width: themeSize.CARD_WIDTH,
            backgroundColor: themeColor.LIGHT_INFO,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginVertical: themeSize.CARD_MARGIN_VERTICAL,
        },
        footer: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: themeSize.CARD_FOOTER_HORIZONTAL,
            paddingVertical: themeSize.CARD_FOOTER_VERTICAL,
            backgroundColor: themeColor.TRANSPARENT,
            zIndex: 1,
        },
        noRadius: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        title: {
            justifyContent: 'center',
        },
        image: {
            width: 'auto',
            height: themeSize.CARD_IMAGE_HEIGHT,
        },
        imageBlock: {
            borderWidth: 0,
            overflow: 'hidden',
        },
        rounded: {
            borderRadius: themeSize.BASE * 0.1875,
        },
});

export default CardCustom;
