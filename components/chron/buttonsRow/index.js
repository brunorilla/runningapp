import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const ButtonsRow = ({children}) => {
    return (
        <View style={styles.buttonsRow}>{children}</View>
    );
};

const styles = StyleSheet.create({
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 80,
        marginBottom: 30,
        width: 400,
        alignContent: "center",
        alignSelf: "center"
    }
})

export default ButtonsRow;