import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalContext, { authData } from '../context';
import * as Google from 'expo-auth-session/providers/google';
import { buildCodeAsync } from 'expo-auth-session/build/PKCE';


export default function Login() {

    const [request, response, promptAsync] = Google.useAuthRequest({
        //expoClientId: '470463937632-ud5fd9mu4vbm8a62vejeo1vnvgog5d3e.apps.googleusercontent.com',
       // expoClientId: '470463937632-6f5th6gsiqpmb4j25ma5shb58ss97blg.apps.googleusercontent.com',
        expoClientId: '109539642341-es6fe46cr02pu9mqkjbhtarg1ag5g8an.apps.googleusercontent.com', // celu Bruno
       //expoClientId: '508004738815-gf67e8hv615nuh0ub61537ss9h47tdse.apps.googleusercontent.com', // luz celu
       //expoClientId: '508004738815-jatd6lfg0u0ov6n5a2aftmj2pt8mm64i.apps.googleusercontent.com', //luz
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });

    useEffect(() => {

        if (response?.type === 'success') {
            const { authentication } = response;
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
            .then(res => res.json())
        
            .then(data => {
                setAuthData({
                nombre: data.given_name,
                apellido: data.family_name,
                email: data.email,
                userId: data.id,
                accessToken: authentication.accessToken
            })
        })
        }
    }, [response])

    const { setAuthData } = useContext(GlobalContext)
    const [login, setLogin] = useState({})

    const postLogin = () => {
        promptAsync()
    }

    return (
        <View style={styles.container}>
             <Text style={styles.text}>
                    Google authentication
                </Text>
        
         <View style={styles.button}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={postLogin}
            >
                <Image
                    source={require('../../assets/GoogleSignIn.png')}
                    style={styles.googleSignIn}
                />
            </TouchableOpacity>
            </View>
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
    text: {
        flex:1,
        color: '#262626',
        fontSize: 25,
        marginTop: 50,
    },
    button: {
        flex: 1,
        marginBottom:300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleSignIn: {
        width: 250,
        height: 50

    }
});