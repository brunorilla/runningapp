import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalContext, { authData } from '../context';
import * as Google from 'expo-auth-session/providers/google';


export default function Login() {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '470463937632-ud5fd9mu4vbm8a62vejeo1vnvgog5d3e.apps.googleusercontent.com',
       // expoClientId: '470463937632-6f5th6gsiqpmb4j25ma5shb58ss97blg.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });

    useEffect(() => {
        // console.log(response)
        if (response?.type === 'success') {
            const { authentication } = response;
            console.log("authentication", authentication)
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setAuthData({
                nombre: data.given_name,
                apellido: data.family_name,
                email: data.email
            }))
        }
    }, [response])

    const { setAuthData } = useContext(GlobalContext)
    const [login, setLogin] = useState({})

    const postLogin = () => {
        promptAsync()


        // envio de info al backend para validar email y password
        // si recibo el ok cambio el estado
        // setAuthData({
        //     ...authData,
        //     email: login.email
        // })
    }

    return (
        <View style={styles.container}>
            <Text>Login!</Text>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={postLogin}
            >
                <Image
                    source={require('../../assets/GoogleSignIn.png')}
                    style={styles.googleSignIng}
                />
            </TouchableOpacity>


            {/* <TextInput
                placeholder={'Email'}
                value={login.email}
                onChangeText={(text) => { setLogin({ ...login, email: text.toLowerCase() }) }}
            /> */}
            {/* <TextInput
                placeholder={'Email'}
                value={login.name}
                onChangeText={(text) => { setLogin({ ...login, email: text.toLowerCase() }) }}
            /> */}
            {/* <Button
                title={'Login'}
                onPress={postLogin}
             /> */}
            <StatusBar style="auto" />

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
    googleSignIng: {
        width: 200,
        height: 50

    }
});