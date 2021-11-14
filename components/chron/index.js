import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import moment from "moment";
import RoundButton from './roundbutton/';
import ButtonsRow from "./buttonsRow/";
import LapsTable from "./lapsTable";
import Timer from "./timer";

const Chron = () => {

    const [time, setTime] = useState({
        start: 0,
        now: 0,
        laps: []
    })
    const timer = time.now - time.start;

    function start() {
        console.log("Calling start");
        const now = new Date().getTime();
        setTime({
            start: now,
            now,
            laps: [0]
        })
        let chronTimer;
        chronTimer = setInterval(() => {
            setTime((prevState)=>
            {
                return {...prevState, now : new Date().getTime()}
            }
        )
        }, 100)
    }

    return (
        <View style={styles.container}>
            <Timer interval={timer}></Timer>
            <ButtonsRow styles={styles.buttonsRow}>
                <RoundButton title={'Reset'} color={'#FFFFFF'} background={'#3D3D3D'}/>
                <RoundButton title={'Start'} color={'#50D167'} background={'#1B361F'} onPress={start}/>
            </ButtonsRow>
            <LapsTable laps={time.laps} time={time.now}></LapsTable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        paddingTop: 130,
        paddingHorizontal: 20
    }, buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
        marginBottom: 30
    }
})


export default Chron;