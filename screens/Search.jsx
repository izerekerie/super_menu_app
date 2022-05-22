import { View, Text, StyleSheet, TextInput , ScrollView,ActivityIndicator, StatusBar} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import RestResult from '../components/RestResult';
import { useDispatch , useSelector } from 'react-redux';
import React,{useEffect,useState,useCallback} from 'react';
import * as ServiceProviderAction from '../store/actions/serviceProvider';
import filter from 'lodash.filter';

const Search = ({navigation}) => {
  
const serviceProviders = useSelector(state => state.serviceProvider.availableServiceProviders);
const dispatch = useDispatch();
const [isLoading, setIsLoading] = useState(false);
const [isRefreshing, setIsRefreshing] = useState(false);
const [error, setError] = useState();

const datas=[
  {name:'This',email:'sfa@gmail.com',address:'Kigali'},
  {name:'That',email:'sfa@gmail.com',address:'Kigali'},
  {name:'There',email:'sfa@gmail.com',address:'Kigali'}
]

const [data, setData] = useState(datas);
const [query, setQuery] = useState('');
const [fullData, setFullData] = useState(datas);

const loadServiceProvider = useCallback(async () => {
  setError(null);
  setIsRefreshing(true);
  try {
    await dispatch(ServiceProviderAction.fetchServiceProviders());
  } catch (err) {
    console.log(err.message);
    setError(err.message);
  }
  setIsRefreshing(false);
}, [dispatch, setIsLoading, setError]);



const handleSearch = text => {
  const formattedQuery = text;
  const filteredData = filter(fullData, serviceProvider => {
    return contains(serviceProvider, formattedQuery);
  });
  // console.log("filtered data ",filteredData);
      setData(filteredData);
      setQuery(text);
};

const contains = (productService, query) => {
  
  const {name , email, address} = productService;

    if ((name.toLowerCase()).includes(query.toLowerCase()) || (email.toLowerCase()).includes(query.toLowerCase()) || (address.toLowerCase()).includes(query.toLowerCase())) {
  
    return true;
  }
  return false;
};


// useEffect(() => {
//   setIsLoading(true);
//   loadServiceProvider().then(() => {
//     setIsLoading(false);
//   });
// }, [dispatch, loadServiceProvider]);

if (isLoading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.Orange} />
    </View>
  );
}


    return (
      <View style={styles.container}>
         <StatusBar style="auto" backgroundColor={'#ffffff'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10 }}>
                <View style={styles.backIcon}>
                <AntDesign name="left" size={24} color="#F7941D" style={{alignSelf:'center',paddingTop:6}}/>
                </View>
                <TextInput
                style={styles.input}
                placeholder=" Search..."
                onChangeText={queryText =>  handleSearch(queryText)}
                />
            </View>
      <View
        style={{
          borderBottomColor: '#dcdee3',
          borderBottomWidth: 1,
        }}
      />
        <View>
                <Text style={styles.nearbyText}>Nearby Restaurant</Text>
            </View>
            <ScrollView style={{paddingHorizontal:20}}>
              {data.map((item, index)=>{
                return(
                  <RestResult key={index} name={data.name} email={data.email} address={data.address} navigation={navigation}/>

                )
              })}
            </ScrollView>
      </View>
      
    )
  }

  export default Search;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
      },
      input:{
        height: 50,
        width: '100%',
        marginLeft: 5,
        marginTop: 2,
        borderWidth: 0,
        padding: 10,
      },
      backIcon:{
          backgroundColor: '#edf0f5',
          width: 36,
          height: 36,
          borderRadius:5,
          margin: 10
      },
      nearbyText:{
          color: '#F7941D',
          marginLeft:30,
          marginTop: 20,
          marginBottom: 10
      },
      
})