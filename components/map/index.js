import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import CustomButton from '../button';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const Index = ({navigation}) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <MapView style={styles.map}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
            <View style={styles.centerButton}>
                <CustomButton
                    title={'Comenzar recorrido'}
                    color={'main'} style={styles.button}
                    navigation={navigation} onPress={"Cronometro"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      justifyContent: "center",
      margin: "auto"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        alignContent: 'center',
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 1.2,
    }, paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
    centerButton: {
      justifyContent: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    }
});

export default Index;