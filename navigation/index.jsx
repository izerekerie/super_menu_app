import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import Search from '../screens/Search';
import Order from '../screens/Order';

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Order'>
        <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/>
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
      <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>

    </Stack.Navigator>
      </NavigationContainer>
    )
}