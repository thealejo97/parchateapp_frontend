import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';



const Drawer = createDrawerNavigator()

export function DrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Login" component={LoginScreen}/>
        </Drawer.Navigator>
    )
}