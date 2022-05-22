import { View, StyleSheet,Text,SafeAreaView,FlatList ,Image} from 'react-native'
import React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getall } from '../store/actions/menu';
import MenuItem from '../components/MenuItem';
const Menu = () => {
 const dispatch=useDispatch();
  const menuList=[
    {id:1,name: 'Appetizer'},
    {id:2,name: 'Starter'},
    {id:3,name: 'Dessert'},
    {id:4,name: 'Drink'},
    {id:1,name: 'Appetizer'},
    {id:2,name: 'Starter'},
    {id:3,name: 'Dessert'},
    {id:4,name: 'Drink'},
  ]

  const  callGetall=async()=>{
    try{
      await    
      console.log('dispatch')
    }catch(error){
      console.error();
    }

  }
  useEffect (() => {
    dispatch(getall());

 }, [dispatch])

 const items= useSelector((state)=>state.menuReducer.items);  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:20}}>
      <Text style={{color:'#F7941D',fontSize:24,fontWeight:'bold',marginTop:20}}>Choose Kigali</Text>
      </View>
       <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-evenly'}}>
            <View>
            <Image source={require('../assets/icon1.png')} styles={{width:50,height:50}} />
            <Text style={{fontWeight:'bold',fontSize:24,color:'#ffff',paddingTop:14}}>Ordered</Text>
            </View>
            <View style={{height:100,width:1,backgroundColor:'#F7941D'}}></View>
            <View>
            <Image source={require('../assets/icon2.png')} styles={{width:50,height:50}} />            
            <Text style={{fontSize:24,color:'#ffff'}}>call waiter</Text>
            </View>
       </View>

       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:20}}>
      <Text style={{color:'#F7941D',fontSize:30,fontWeight:'bold',marginTop:20}}>menu</Text>
      </View>

    <FlatList
    data={items}
    keyExtractor={(item=>item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=><MenuItem data={item.name}/>}
    />

     
    
    </SafeAreaView>
  )
}

export default Menu

const styles=StyleSheet.create({
container:{
  flex:1,
  padding:20,
  marginTop:20,
  backgroundColor:'#000'
}
})

