import { View, StyleSheet,Text,SafeAreaView,FlatList ,Image,ActivityIndicator} from 'react-native'
import React,{useEffect,useState,useCallback} from 'react';
import MenuItem from '../components/MenuItem';
import { fetchMenu, fetchMenuByServiceProvider } from '../store/actions/menu';
import { useDispatch , useSelector } from 'react-redux';
const Menu = () => {

  const menuList=[
    {id:1,name: 'Appetizer'},
    {id:2,name: 'Starter'},
    {id:3,name: 'Dessert'},
    {id:4,name: 'Drink'},
  ]
  const menu = useSelector(state => state.menu.menu_by_serviceprovider);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
const [isRefreshing, setIsRefreshing] = useState(false);
const [error, setError] = useState();
console.log("from the reducer :",menu);
  const loadMenu = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(fetchMenuByServiceProvider());
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadMenu().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadMenu]);
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={'#F7941D'} />
      </View>
    );
  }
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
    data={menu}
    keyExtractor={(item=>item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=><MenuItem data={item}/>}
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

