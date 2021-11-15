import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Chron from './components/chron'
import Welcome from './components/welcome';
import SignIn from './components/sign-in';
import Map from './components/map';
import Timer from './components/chron/timer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalContext from './components/context';
import Login from './components/log-in/login.js';



const Stack = createStackNavigator();

export default function App() {

  const [AuthData, setAuthData] = useState({})

  const isAuthenticated = () => AuthData.email !== undefined

  
  return (
    <GlobalContext.Provider value={{ AuthData, setAuthData }} >

      <NavigationContainer>
          {/* {
          (isAuthenticated()) ? */}
        <Stack.Navigator initialRouteName="Bienvenido">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Bienvenido" component={Welcome}/>
          <Stack.Screen name="Mapa" component={Map}/>
          <Stack.Screen name="Chron" component={Chron}/>
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Navigator>

         {/* :
         <Stack.Navigator>

           <Stack.Screen name={'Login'} component={Login} />
         </Stack.Navigator>   
       }  */}
        </NavigationContainer>

        </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

