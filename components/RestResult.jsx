import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const RestResult = () => {
  return (
    <View>
      <View style={styles.results}>
            <View style={{ flexDirection: 'row' }}>
        <Image
        style={styles.restImg}
        source={require('./../assets/restaurant.jpg')}
        resizeMode="cover"
      />
      <View style={{margin: 10}}>
          <Text style={{fontWeight: 'bold'}}>Choose Kigali</Text>
          <Text style={{marginTop:10, fontSize: 13}}>Descriptions,Descriptions</Text>
      </View>
        </View>
        </View>
    </View>
  )
}

export default RestResult;

const styles =  StyleSheet.create({
    results:{
        backgroundColor: '#edf0f5',
        borderRadius: 7,
        width: 300,
        height: 100,
        marginLeft: 30,
        marginTop: 20,
        padding: 10
      },
      restImg:{
          height: 80,
          width:80,
        //   margin: 20,
          borderRadius: 10   
        }
})