import { View, Text, StyleSheet, TextInput , ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import RestResult from '../components/RestResult';

import React from 'react'
const Search = () => {
    return (
      <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10 }}>
                <View style={styles.backIcon}>
                <AntDesign name="left" size={24} color="#F7941D" style={{alignSelf:'center',paddingTop:6}}/>
                </View>
                <TextInput
                style={styles.input}
                // onChangeText={onChangeText}
                placeholder=" Search..."/>
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
            <ScrollView>
                <RestResult/>
                <RestResult/>
                <RestResult/>
                <RestResult/>
                <RestResult/>
                <RestResult/>
            </ScrollView>
      </View>
      
    )
  }

  export default Search;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20
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