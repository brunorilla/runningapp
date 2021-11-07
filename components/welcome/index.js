import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../button';
import logo from '../../assets/logo.png';
import SignIn from "../sign-in";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Welcome = ({navigation}) => {
    return (
        <View style={styles.welcome}>
            <View style={styles.main}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Text style={styles.text}>
                    Bienvenido a Running App
                </Text>
            </View>
            <View>
                <CustomButton 
                    title={'Iniciar sesión'}
                    color={'main'}
                    navigation={navigation}
                    onPress={"SignIn"}
                />
                <CustomButton 
                    title={'Registrarse'}
                    color={'secondary'} navigation={navigation} onPress={"SignIn"}
                />
                <CustomButton
                    title={'Mapa'}
                    color={'secondary'} navigation={navigation} onPress={"Mapa"}
                />
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    welcome: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    text: {
        color: '#262626',
        fontSize: 25,
    },
    logo: {
        height: 250,
        width: 250,
    },
    main: {
        flex: 0.8,
    }
  });

  export default Welcome;