import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Input, Block } from 'galio-framework';

import GalioTheme from '../Config/galioIndex';

const GalioInput = () => {
    return (
        <View 
            style={{
                marginVertical: GalioTheme.SIZES.BASE / 2,
                alignContent: 'center',
            }}
        >
            <Input
                rounded
                style={styles.inputText}
                placeholder="Input with Icon on right"
                right
                icon="heart"
                family="antdesign"
                iconSize={14}
                iconColor={GalioTheme.COLORS.LIGHT_INFO}
            />
        </View>
    );
};

const styles = theme =>
  StyleSheet.create({    
    inputText: {
      color: GalioTheme.COLORS.INPUT,
      fontSize: GalioTheme.SIZES.INPUT_TEXT,
      textDecorationColor: 'transparent',
      textShadowColor: 'transparent',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default GalioInput;