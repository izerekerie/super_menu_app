import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const MenuItem = ({data}) => {

  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
    <Text style={{color:'#fff',fontSize:20}}>{data}</Text>
    {/* <Text style={{color:'#fff',fontSize:20}}>item.name</Text> */}
    <Feather name="chevron-right" size={24} color="#fff" />
   </View>
  )
}

export default MenuItem