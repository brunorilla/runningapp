import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import ButtonsRow from "../buttonsRow";

const RoundButton = ({title, color, background}) => {
    return (
        <View style={[styles.button, {backgroundColor: background}]}>
            <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 85,
        height: 85,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    buttonTitle: {
        fontSize: 18
    },
    buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 3,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default RoundButton;