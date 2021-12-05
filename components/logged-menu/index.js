import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import CustomButton from '../button';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalContext, { authData } from '../context';
import * as Google from 'expo-auth-session/providers/google';


const LoggedMenu = ({navigation}) => {
    const { setAuthData } = useContext(GlobalContext)

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.main}>
                <CustomButton
                    title={'Mapa'}
                    navigation={navigation}
                    onPress={"Mapa"}
                />
                <CustomButton
                    title={'Cronómetro'}
                    navigation={navigation}
                    onPress={"Chron"}
                />
            </View>

            <View style={styles.out}>
                <CustomButton
                    title={'Cerrar sesión'}
                    color={'main'}
                    navigation={navigation}
                    onPress={()=> {
                        setAuthData({})
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    out: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoggedMenu;