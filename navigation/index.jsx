import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
    </Stack.Navigator>
      </NavigationContainer>
    )
}