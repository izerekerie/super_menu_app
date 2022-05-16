import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import PaySuccess from '../screens/PaySuccess';
import rateService from '../screens/rateService';
const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='rateService'>
        <Stack.Screen name="rateService" component={rateService} options={{headerShown: false}}/>
        <Stack.Screen name="paySuccess" component={PaySuccess} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
        
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

    </Stack.Navigator>
      </NavigationContainer>
    )
}