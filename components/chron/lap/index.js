import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import Timer from '../timer'

const Lap = ({number, interval}) => {
    console.log("INTERVAL LAP : ", interval)
    return (
        <View style={styles.lap}>
            <Text style={styles.lapText}>Vuelta {number}</Text>
            <Timer style={styles.lapText}>{interval}</Timer>
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