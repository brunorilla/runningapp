import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import moment from "moment";
import RoundButton from './roundbutton/';
import ButtonsRow from "./buttonsRow/";
import LapsTable from "./lapsTable";
import Timer from "./timer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import History from "../history";

const Chron = () => {

    const [time, setTime] = useState({
        start: 0,
        now: 0,
        laps: []
    })

    const [chronInterval, setChronInterval] = useState();

    const timer = time.now - time.start < 0 ? 0 : time.now - time.start;
    useEffect(() => {
        return () => {
            clearInterval(chronInterval);
        }
    }, [])

    const start = () => {
        const now = new Date().getTime();
        setTime((prevState) => {
                return {
                    ...prevState,
                    start: now,
                    laps: [0]
                }
            }
        )

        let chronTimer = setInterval(() => {
            setTime((prevState) => {
                    return {...prevState, now: new Date().getTime()}
                }
            )
        }, 100)
        setChronInterval(chronTimer);
    }

    const lap = () => {
        const timestamp = new Date().getTime();
        const [firstLap, ...other] = time.laps;

        setTime((prevState) => {

            return {laps: [0, firstLap + prevState.now - prevState.start, ...other], start: timestamp, now: timestamp}
        })
    }
    const stop = () => {
        clearInterval(chronInterval)
        const [firstLap, ...other] = time.laps
        setTime((prevState) => {
            return {laps: [firstLap + prevState.now - prevState.start, ...other], start: 0, now: 0}
        })
    }

    const reset = async () => {
        await storeData(time.laps, "laps")
        setTime({
            laps: [],
            start: 0,
            now: 0
        });

    }

    const storeData = async (value, key) => {
        try {
            let data = await getData("laps").then(r => {
                return r
            });
            if(typeof data === "undefined" || data === null || typeof data !== "object"){
                console.log("data is null");
                data = {values: []};
            }
            console.log("DATA: ---->", data);
            console.log("Calling storeData");

            const jsonValue = JSON.stringify(value)
            console.log("JSON VALUE: ----> ", jsonValue)
            let midTermValue = {
                fullDate: new Date(),
                totalTime : jsonValue
            }
            data.values.push(midTermValue);
            console.log("Full Object", data)
            await AsyncStorage.setItem(key, JSON.stringify(data))
        } catch (e) {
            console.log(e);
            console.log("Error in storeData method");
        }
    }
    const getData = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            console.log(jsonValue)
            return jsonValue != null ? JSON.parse(jsonValue) : null;

        } catch (e) {
            console.log("Error in getData method");
        }
    }

    const resume = () => {
        const now = new Date().getTime()
        setTime((prevState) => {
            return {...prevState, start: now}
        })
        let chronTimer = setInterval(() => {
            setTime((prevState) => {
                    return {...prevState, now: new Date().getTime()}
                }
            )
        }, 100)
        setChronInterval(chronTimer);
    }

    return (
        <View style={styles.container}>
            <Timer interval={
                time.laps.reduce((total, curr) => {
                    return total + curr;
                }, 0) + timer}/>
            {time.laps.length === 0 && (
                <ButtonsRow>
                    <RoundButton title={'Reset'} color={'#FFFFFF'} background={'#3D3D3D'} disabled onPress={reset}/>
                    <RoundButton title={'Start'} color={'#50D167'} background={'#1B361F'} onPress={start}/>
                </ButtonsRow>
            )}
            {time.start > 0 && (
                <ButtonsRow>
                    <RoundButton title={'Vuelta'} color={'#FFFFFF'} background={'#151515'} onPress={lap}/>
                    <RoundButton title={'Stop'} color={'#E33935'} background={'#3C1715'} onPress={stop}/>
                </ButtonsRow>
            )}
            {time.laps.length > 0 && time.start === 0 && (
                <ButtonsRow>
                    <RoundButton title={'Reset'} color={'#FFFFFF'} background={'#3D3D3D'} onPress={reset}/>
                    <RoundButton title={'Start'} color={'#50D167'} background={'#1B361F'} onPress={resume}/>
                </ButtonsRow>
            )}
            <LapsTable laps={time.laps} time={time.now - time.start < 0 ? 0 : time.now - time.start}/>
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