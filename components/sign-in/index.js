import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../button';
{/*import usuario from '../../assets/usuario.png';*/}
import usuarioLog from '../../assets/usuarioLog.png'


const SignIn = ({navigation}) => {
    return (
        <View style={styles.singIn}>
            <View style={styles.main}>
           
                <Text style={styles.title}>
                    Inicio de sesión
                </Text>
                <Image
                    style={styles.usuarioLog}
                    source={usuarioLog}
                  />
                <Text style={styles.text2}> 
                    ¿Sos nuevo? Crear una cuenta
                </Text>

                <Text style={styles.textRegister}> 
                ────────  O  ────────
                </Text>
                <View style={styles.button}>
                <CustomButton 
                    title={'Iniciar sesión con Facebook'}
                    color={'main'} style={styles.button}
                    navigation={navigation} onPress={"SignIn"}
                />
                 </View>

            <View
                style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                paddingTop: 200,
                display:"flex",
                    justifyContent: "center"
                }}
               />
                <Text style={styles.text3}>
                * Al iniciar tu sesión, aceptas nuestros -terminos y condiciones-
                </Text>

            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    singIn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    main: {
        flex: 0.8,
    },
    text: {
        color: '#262626',
        fontSize: 25,
    },
  
    text2 :{
        color: '#262626',
        fontSize: 18,
        paddingBottom: 10,
        paddingTop:15,
        textAlign: 'center',
    },
    text3 :{
        color: '#262626',
        fontSize: 14,
        paddingBottom: 20,
        paddingTop:20,
    },
    title: {
        color: '#262626',
        fontSize: 35,
        paddingTop: 20,
        paddingBottom: 10,
        paddingStart:100,
    },
    usuarioLog: {
        height: 80,
        width: 80,
        marginLeft:170,
        textAlign: 'center',
    },
    textRegister:{
        paddingTop:80,
        textAlign: 'center',
    },
      button: {
        alignSelf:"center"
      }

  });

  export default SignIn;