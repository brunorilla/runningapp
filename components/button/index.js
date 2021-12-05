import React, { useContext } from 'react';
import GlobalContext, { authData } from '../context';
import {StyleSheet, Pressable, View, Text} from 'react-native';

const CustomButton = ({navigation, onPress, title, color}) => {
    const context= useContext(GlobalContext)
    console.log("OnPress equals: ", onPress);
    let buttonStyle;
    if (color === 'main') {
        buttonStyle = styles.main;
    } else if (color === 'secondary') {
        buttonStyle = styles.secondary;
    } else {
        buttonStyle = styles.tertiary;
    }

    const onPressFunction = (onPress) => {
        if (typeof(onPress) === 'string') {
            navigation.navigate(onPress);
        } else {
            onPress();
        }
    }


    return (
        <View style={buttonStyle}>
            {/* Pendiente: sumar al Text el callback del onClick del texto según la función que se mande como parámetro */}
            <Pressable title={title} onPress={() => onPressFunction(onPress)}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#d7f205',
        color: '#262626',
        borderRadius: 8,
        width: 300,
        height: 55,
        marginBottom: 16,
    },
    secondary: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        color: '#262626',
        borderRadius: 8,
        borderWidth: 2,
        width: 300,
        height: 55,
    },
    tertiary: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        color: '#262626',
        borderRadius: 8,
        borderWidth: 2,
        width: 300,
        height: 55,
        marginTop: 10
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    }
});

export default CustomButton;