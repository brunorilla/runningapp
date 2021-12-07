import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import moment from "moment";
import RoundButton from '../roundbutton/';
import ButtonsRow from "../buttonsRow/";


const Index = ({interval, timerForLap}) => {
    if (timerForLap !== 'true' && timerForLap !== 'history') {
        styles.timer = styles.timerRegular;
    } else if(timerForLap === 'history') {
        styles.timer = styles.timerForHistory;
    } else {
        styles.timer = styles.timerForLap;
    }
    const pad = (n) => n < 10 ? '0' + n : n;
    const duration = moment.duration(interval);
    const centiseconds = Math.floor(duration.milliseconds() / 10);
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timer}>{pad(duration.minutes())}:</Text>
            <Text style={styles.timer}>{pad(duration.seconds())}.</Text>
            <Text style={styles.timer}>{pad(centiseconds)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer : {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center"
    },
    timerRegular: {
        color: "#FFFFFF",
        fontSize: 76,
        fontWeight: '200',
        width: 110
    },
    timerForLap: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: '200'
    },
    timerForHistory: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: '200',
        lineHeight: 22
    }
})

export default Index;