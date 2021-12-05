import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../assets/logo-short.png';
import {ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LapsTable from "../chron/lapsTable";


const History = ({navigation}) => {

    const [history, setHistory] = useState(null);
    const getData = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;

        } catch (e) {
            console.log("Error in getData method");
        }
    }


    useEffect(async () => {

        let data = await getData("laps").then(r => {
            return r;
        }).catch(()=>{
            throw Error;
        })
        try {
        setHistory(data);
        } catch(e){
            console.error("Error fetching data")
        }
    }, [])


    const parseTime = (timeAsString) => {
        let arr = [];
        let r = new RegExp(/\[|\]|,/)
        let temp = "";
        for (let i = 0; i < timeAsString.length; i++) {
            let char = timeAsString[i]
            if (!r.test(char)) {
                temp += char
            } else {
                temp.length > 0 ? arr.push(parseInt(temp)) : '';
                temp = ""
            }

        }
        return arr;
    }
    var layout;
    try{
    if(history === null){
        layout = <Text>Aún no tiene historial de recorridos. Comience a correr!</Text>
    } else if (typeof history === "undefined" || typeof history.values === "undefined"){
        layout = <Text>Aún no tiene historial de recorridos. Comience a correr!</Text>
    } else {
        layout = history.values.map((data, index) => (
            (<View style={styles.containerForList} key={index}>
                <View style={styles.paddingVertical10}><Text style={[styles.text18,styles.timeStyles, styles.textAlignLeft,styles.blackColor]}>{data.fullDate}</Text></View>
                <View style={[styles.paddingVertical2, styles.paddingHorizontal5]}><LapsTable laps={parseTime(data.totalTime)} time={0}></LapsTable></View>
            </View>)
        ))}
    } catch(e){
        layout = <Text>Error al buscar su historial. Consulte a servicio técnico</Text>
        console.error("Error fetching history");
    }
    return (<View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.main}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.text}>
                    Historial de Recorridos
                </Text>
            </View>
        </View>
        <ScrollView style={[styles.scrollContainer, styles.mediumWidth, styles.background]}>
            {layout}
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e7e1e1",
        overflow: "scroll"
    },
    containerForList: {
      display: "flex"
    },
    scrollContainer: {
        display: "flex",
        overflow: "scroll"
    },
    mediumWidth: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20
    },
    background: {
        backgroundColor: "#000"
    },
    welcome: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    textAlignLeft : {
      textAlign: "left"
    },
    whiteColor: {
        color: "#FFF"
    },
    blackColor: {
        color: "#000"
    },
    text: {
        color: '#262626',
        fontSize: 20,
        textAlign: "center"
    },
    text18 : {
        fontSize: 18,
        lineHeight: 22,
        alignItems: "center",
    },
    timeStyles : {
        paddingTop: 20,
        paddingHorizontal: 5,
        backgroundColor: "#e7e1e1",
        width: "100%",
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: "#c2c2c2",
    },
    timeContainer: {

    },
    paddingVertical10: {
        paddingVertical: 10
    },
    paddingVertical2 : {
        paddingVertical: 2
    },
    paddingHorizontal5: {
        paddingHorizontal: 5
    },
    logo: {
        height: 61,
        width: 118,
        alignSelf: "center"
    },
    main: {
        paddingVertical: 10
    },
    marginTop: {
        marginTop: 10
    },
    centerButton: {
        justifyContent: "center",
        alignSelf: "center",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    chronButton: {
        marginTop: 10
    }
});

export default History;
