import React from 'react';
import { Feather, AntDesign } from "react-native-vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialCommunityIcons,Entypo   } from '@expo/vector-icons'; 

import Index from '../screens/Index';
import Checkout from '../screens/Checkout';

const Tab = createBottomTabNavigator();

const TabNavigation = ({route}) => {

    return (
        <Tab.Navigator
        screenOptions={{
        tabBarActiveTintColor: "#F7941D",
        tabBarInactiveTintColor:"#000000",
        tabBarStyle:{
            backgroundColor:'#fff',
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            padding: 7,
            height:70,  
            width:'100%',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            
            elevation: 5,
        },
        labelStyle:{                               
          fontSize:10,
        },
        style: {
          height: 70,
          backgroundColor:'#000',
        },
        showLabel: false,
        headerShown:false,
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Index}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Index}
        options={{
          tabBarIcon: ({ color, size}) => (
            <Ionicons name="md-notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Index}
        options={({route}) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card-scan-outline" size={size} color={color} />
          ),
          
        })}
      />
    <Tab.Screen
        name="Timer"
        component={Index}
        options={{
          tabBarIcon: ({ color, size}) => (
            <Entypo name="back-in-time" size={size} color={color} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Cart"
        component={Checkout}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    );
}

export default TabNavigation;