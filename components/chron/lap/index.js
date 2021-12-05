import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Timer from '../timer'

const Lap = ({number, interval, fastest, slowest}) => {
    const lapStyle = [
        styles.lapText,
        fastest && styles.fastest,
        slowest && styles.slowest
    ]
    return (
        <View style={styles.lap}>
            <Text style={lapStyle}>Vuelta {number}</Text>
            <Timer timerForLap={"true"} interval={interval}/>
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
    },
    fastest : {
        color: "#4BC05F"
    },
    slowest: {
        color : "#CC3531"
    }
});

export default Lap;