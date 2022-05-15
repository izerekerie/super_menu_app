import { View, Text , StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import OrderDeals from '../components/orderDeals';

const Order = () => {
  return (
    <View>
        <View style={styles.backIcon}>
                <AntDesign name="left" size={24} color="#F7941D" style={{alignSelf:'center',paddingTop:6}}/>
        </View>
      <Text style={styles.restName}>Choose Kigali</Text>
      <Text style={styles.type}>Drinks</Text>
      <OrderDeals/>
    </View>
    
  )
}
export default Order;

const styles =  StyleSheet.create({
    backIcon:{
        backgroundColor: '#edf0f5',
        width: 36,
        height: 36,
        borderRadius:5,
        margin: 10
    },
    restName:{
        color:'black',
        fontSize: 20,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
        
    },
    type:{
        color: '#F7941D',
        fontSize: 16,
        alignSelf: 'flex-end',
        marginTop: 4
    }


})