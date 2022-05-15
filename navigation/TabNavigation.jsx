import React from 'react';
import { Feather, AntDesign } from "react-native-vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = ({route}) => {

    return (
        <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#EC6448",
        inactiveTintColor:"#000000",
        tabStyle: {
          margin: 10,
        },
        labelStyle:{
          fontSize:11,
        },
        style: {
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverStack}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="compass" />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size}) => (
            <Feather color={color} size={size} name="search" />
          ),
        }}
      />
      <Tab.Screen
        name="Design"
        component={DesignStack}
        options={({route}) => ({
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="plus"/>
          ),
          
        })}
      />
    <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarIcon: ({ color, size}) => (
            <Feather color={color} size={size} name="shopping-cart" />
          ),
        }}
        
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="user"/>
          ),
        }}
      />
    </Tab.Navigator>
    );
}

export default TabNavigation;