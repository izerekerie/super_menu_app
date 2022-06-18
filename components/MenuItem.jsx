import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const MenuItem = ({data,navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("order",{items :data.items})}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
    <Text style={{color:'#fff',fontSize:20}}>{data.category.name}</Text>
    {/* <Text style={{color:'#fff',fontSize:20}}>item.name</Text> */}
    <Feather name="chevron-right" size={24} color="#fff" />
   </View>
    </TouchableOpacity>
  )
}

export default MenuItem