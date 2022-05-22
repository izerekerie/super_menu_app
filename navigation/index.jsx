import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import PaySuccess from '../screens/PaySuccess';
import RateService from '../screens/RateService';
import TabNavigation from './TabNavigation';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
        <Stack.Screen name="rateService" component={RateService} options={{headerShown: false}}/>
        <Stack.Screen name="paySuccess" component={PaySuccess} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
        
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
    
    </Stack.Navigator>
      </NavigationContainer>
    )
}