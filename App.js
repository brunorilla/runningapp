import React, { useState } from 'react';
import Chron from './components/chron'
import Welcome from './components/welcome';
import SignIn from './components/sign-in';
import Map from './components/map';
import MainMenu from "./components/mainMenu";
import History from "./components/history";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalContext from './components/context';
import LoggedMenu from './components/logged-menu/index';
import Login from './components/log-in/login.js';

const Stack = createStackNavigator();

export default function App() {

  const [AuthData, setAuthData] = useState({});

  const isAuthenticated = () => AuthData.email !== undefined;

  console.log('AuthData: ', AuthData);
  return (
    <GlobalContext.Provider value={{ AuthData, setAuthData }} >

      <NavigationContainer>
           {
          (isAuthenticated()) ? 
        <Stack.Navigator initialRouteName="Bienvenido">
          <Stack.Screen name='LoggedMenu' component={LoggedMenu} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Bienvenido" component={Welcome}/>
          <Stack.Screen name="Menu Principal" component={MainMenu}/>
          <Stack.Screen name="Mapa" component={Map}/>
          <Stack.Screen name="Chron" component={Chron}/>
          <Stack.Screen name="Historial" component={History}/>
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Navigator>
          :
         <Stack.Navigator>
           <Stack.Screen name="Bienvenido" component={Welcome}/>
           <Stack.Screen name='Login' component={Login} />
           <Stack.Screen name="SignIn" component={SignIn} />
         </Stack.Navigator>   
       }  
        </NavigationContainer>

        </GlobalContext.Provider>
  );
}


