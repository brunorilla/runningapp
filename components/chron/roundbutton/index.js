import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';

const RoundButton = ({title, color, background, onPress, disabled}) => {
    return (
            <TouchableOpacity onPress={() => !disabled && onPress()}
                              style={[styles.button, {backgroundColor: background}]}
                              activeOpacity={disabled ? 1.0 : 0.7}>
                <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
            </TouchableOpacity>
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