import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';


const Lap = ({number, interval}) => {
    return (
        <View style={styles.lap}>
            <Text style={styles.lapText}>Lap {number}</Text>
            <Text style={styles.lapText}>{interval}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    lapText: {
        color: '#FFFFFF',
        fontSize: 18
    },
    lap: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#151515",
        borderTopWidth: 1,
        paddingVertical: 10
    }
});

export default Lap;