import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import TabNavigation from './TabNavigation';
// import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
          
      {/* <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/> */}
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
     
    </Stack.Navigator>
      </NavigationContainer>
    )
}