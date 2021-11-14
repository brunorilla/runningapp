import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import Lap from "../lap";

const LapsTable = ({laps}) => {
    const finishedLaps = laps.slice(1);
    console.log("Finishedlaps: " ,finishedLaps);
    console.log(Number.MAX_SAFE_INTEGER);
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    if(finishedLaps.length >= 2){
        finishedLaps.forEach(lap=>{
            if(lap < min) min = lap
            if(lap > max) max = lap
        });
    }

    return (
        <ScrollView style={styles.scrollView}>
            {laps.map((lap, index) =>(
                <Lap
                    number={laps.length - index}
                    key={laps.length - index}
                    interval={lap}
                    fastest={lap===min}
                    slowest={lap===max}
                />
            ))}
        </ScrollView>
    );

};


const styles = StyleSheet.create({
    scrollView: {
        alignSelf: "stretch"
    }
})

export default LapsTable;