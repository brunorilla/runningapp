import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const ButtonsRow = ({children}) => {
    return (
        <View styles={styles.buttonsRow}>{children}</View>
    );
};

const styles = StyleSheet.create({
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
        marginBottom: 30
    }
})

export default ButtonsRow;