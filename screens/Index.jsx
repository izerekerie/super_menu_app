import { View, Text, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'



const Index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{
            flexDirection:'row',
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
            }}
            onPress={()=>navigation.navigate('Login')}
            >
        <Text style={{fontSize:30,color:'#000',fontWeight:"bold"}}>Supa</Text>
        <Text style={{fontSize:30,color:'#fff',fontWeight:"bold"}}>Menu</Text>
        </TouchableOpacity>
 
    </SafeAreaView>
  )
}

export default Index;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7941D',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
