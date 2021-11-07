import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import moment from "moment";
import RoundButton from '../roundbutton/';
import ButtonsRow from "../buttonsRow/";
import LapsTable from "../lapsTable";



const Index = ({interval}) => {
    console.log("INTERVAL: ", interval);
    const duration = moment.duration(interval);
    const centiseconds = Math.floor(duration.milliseconds() / 10);
    return (
        <View>
            <Text style={styles.timer}>{duration.minutes()}:{duration.seconds()}:{centiseconds}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timer: {
        color: "#FFFFFF",
        fontSize: 76,
        fontWeight: '200'
    }
})

export default Index;