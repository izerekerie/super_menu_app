import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'; 
const PaySuccess = () => {
  return (
    <View style={{flex:1,backgroundColor:'#000',marginTop:20,padding:20,width:'100%'}}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Image  source={require('./../assets/pay.png')}
        style={{width:150,height:150,borderRadius:100,margin:40}}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{color:'#F7941D',fontSize:20,fontWeight:'500'}} >Payment  Success, yayy!</Text>
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{width:'100%',padding:10,color:'#fff',fontSize:14,textAlign:'justify'}} >we will send order details and invoice in your
        contact no. and registered email</Text>
        </View>
        <View style={{flexDirection:'row',marginVertical:20,opacity:0.8,padding:20,justifyContent:'center'}}>
        <Text style={{color:'#F7941D',fontSize:20,fontWeight:'500',fontSize:14}} >Show dataffffils!</Text>
        <FontAwesome style={{marginLeft:20}} name="long-arrow-right" size={18} color="#F7941D" />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={{backgroundColor:'#F7941D',marginTop:20,borderRadius:20,marginVertical:20}}>
        <Text style={{color:'#fff',fontSize:20,paddingHorizontal:14,paddingVertical:14}} >Download Invoice</Text>

        </TouchableOpacity>
            
        </View>


        <TouchableOpacity style={{
            flexDirection:'row',
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            marginVertical:20
            }}
            onPress={()=>navigation.navigate('Home')}
            >
        <Text style={{fontSize:40,color:'#fff',fontWeight:"bold"}}>Supa</Text>
        <Text style={{fontSize:40,color:'#F7941D',fontWeight:"bold"}}>Menu</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PaySuccess