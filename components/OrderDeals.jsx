import { View, Text, Image , FlatList} from 'react-native'
import React from 'react'

const OrderDeals = () => {
    const drinks = [
        {id:1,name:'Tommy Yummy',values:['Kaffe', 'Olamide', 'Sthhshsh']},
        {id:2,name:'Tommy Yummy',values:['Kaffe', 'Olamide', 'Sthhshsh']},
        {id:3,name:'Tommy Yummy',values:['Kaffe', 'Olamide', 'Sthhshsh']},
        {id:4,name:'Tommy Yummy',values:['Kaffe', 'Olamide', 'Sthhshsh']}
    ]
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
          <View>
          <FlatList
    data={drinks}
    keyExtractor={(item=>item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=><MenuItem data={item}/>}
    />
          </View>
          <Text style={{fontWeight: 'bold'}}>Choose Kigali</Text>
          <Text style={{marginTop:10, fontSize: 13}}>Descriptions,Descriptions</Text>
      </View>
        </View>
        </View>
    </View>
  )
}

export default OrderDeals;

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