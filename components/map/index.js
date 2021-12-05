import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import CustomButton from '../button';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Index = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    //console.log(location);
    const [mapRegion, setmapRegion] = useState({latitude: -35.0279,
        longitude: -58.44420, latitudeDelta: 0.04, longitudeDelta: 0.05});

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            setmapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05
            });

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
                <MapView style={styles.map} region={mapRegion}>
                    <Marker coordinate={mapRegion} title='Marker' />
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        margin: "auto"
    },
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        marginTop: 30,
        alignContent: 'center',
        width: Dimensions.get('window').width / 1,
        height: Dimensions.get('window').height / 1.2,
    }, paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
    centerButton: {
        justifyContent: "center",
        alignSelf: "center"
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