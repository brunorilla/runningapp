import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

const CustomButton = ({ title, color }) => {
    const buttonStyle = (color === 'main') ? styles.main : styles.secondary;
    return (
        <View style={buttonStyle}>
            {/* Pendiente: sumar al Text el callback del onClick del texto según la función que se mande como parámetro */}
            <Text style={styles.text}>{title}</Text>
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
      text: {
        fontSize: 15,
        fontWeight: "bold"
      }
  });

  export default CustomButton;