import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chron from './components/chron'
import Welcome from './components/welcome';
import SignIn from './components/sign-in';
import Map from './components/map';
import Timer from './components/chron/timer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bienvenido">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Bienvenido" component={Welcome}/>
          <Stack.Screen name="Mapa" component={Map}/>
          <Stack.Screen name="Chron" component={Chron}/>
        </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

