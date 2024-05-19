import {View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
const stack= createNativeStackNavigator();
export default function AppNavigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            İnitialRouteName="Home"
            screenOptions={{
              headerShown:false,
            
            }}
            >
            <Stack.Screen name="Home" components={HomeScreen}/>
            <Stack.Screen name="welcome" components={WelcomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
} 