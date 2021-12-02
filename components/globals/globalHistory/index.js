import React from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

const MY_STORAGE_KEY = "@runapp";
const storeData = async (value) => {
    try {
        console.log(value);
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(MY_STORAGE_KEY, jsonValue)
    } catch (e) {
        console.error(e);
    }
}


const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(MY_STORAGE_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.error(e);
    }
}


let asyncMethods = {storeData,getData,MY_STORAGE_KEY};
export default asyncMethods