import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../button';
import logo from '../../assets/logo.png';

const Welcome = () => {
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
                />
                <CustomButton 
                    title={'Registrarse'}
                    color={'secondary'}
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