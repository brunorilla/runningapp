import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import Lap from "../lap";

const LapsTable = ({laps}) => {
    {laps.map((lap, index) => {
        console.log("LAP: ",lap);
        console.log("INDEX: ", index)
    })}

    return (
        <ScrollView style={styles.scrollView}>
            {laps.map((lap, index) =>(
                <Lap
                    number={laps.length - index}
                    key={laps.length - index}
                    interval={lap}/>
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