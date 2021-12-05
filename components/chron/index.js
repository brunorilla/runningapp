import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RoundButton from './roundbutton/';
import ButtonsRow from "./buttonsRow/";
import LapsTable from "./lapsTable";
import Timer from "./timer";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                fullDate: getDate(),
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

    const getDate = () =>{
        let date_ob = new Date();
        let date = IntTwoChars(date_ob.getDate());
        let month = IntTwoChars(date_ob.getMonth() + 1);
        let year = date_ob.getFullYear();
        let hours = IntTwoChars(date_ob.getHours());
        let minutes = IntTwoChars(date_ob.getMinutes());
        let seconds = IntTwoChars(date_ob.getSeconds());
        return `Fecha: ${month}/${date}/${year} | Tiempo Total: ${hours}:${minutes}:${seconds} `;

        function IntTwoChars(i) {
            return (`0${i}`).slice(-2);
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