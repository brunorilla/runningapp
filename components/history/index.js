import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from '../button';
import logo from '../../assets/logo.png';
import {ScrollView} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
        })
        console.log("data equals ->" + data.values.map((a, index) => {
            console.log(parseTime(a.totalTime))

        }))
        setHistory(data);
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
        <ScrollView style={[styles.container, styles.mediumWidth, styles.greyBackground]}>
            {history === null ? <Text>Hello</Text> : history.values.map((data, index) => (
                <View>
                    <Text>{data.fullDate}</Text>
                    <View><LapsTable laps={parseTime(data.totalTime)} time={0}></LapsTable></View>
                </View>
            ))}
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1
    },
    mediumWidth: {
        width: "100%",
        alignSelf: "flex-end",
        paddingLeft: "5%",
        paddingHorizontal: "5%"
    },
    greyBackground: {
        backgroundColor: "#625d5d"
    },
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#262626',
        fontSize: 25,
        textAlign: "center"
    },
    logo: {
        height: 200,
        width: 200,
        alignSelf: "center"
    },
    main: {
        flex: 0.8,
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


/*{
               <View>
                    <Text>{data.fullDate}</Text>
                    <View><LapsTable laps={[]}time={parseTime(data.totalTime).reduce((total, curr) => parseInt(total) + parseInt(curr))}></LapsTable></View>
                </View>
}*/