import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import moment from "moment";
import RoundButton from './roundbutton/';
import ButtonsRow from "./buttonsRow/";
import LapsTable from "./lapsTable";
import Timer from "./timer";

const Chron = () => {
    const DATA = {
        timer: 123456,
        laps: [123, 456, 789]
    }
   return (
        <View style={styles.container}>
            <Timer interval={DATA.timer}></Timer>
            <ButtonsRow>
                <RoundButton title={'Reset'} color={'#FFFFFF'} background={'#3D3D3D'}/>
                <RoundButton title={'Start'} color={'#50D167'} background={'#1B361F'}/>
            </ButtonsRow>
            <LapsTable laps={DATA.laps}></LapsTable>
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
    }
})


export default Chron;