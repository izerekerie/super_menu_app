import { View, Text ,TextInput, StyleSheet, Button} from 'react-native'
import React from 'react'


const SignUp = () => {
  return (
    <View style={{backgroundColor:'#F7941D'}}>
      <View style={styles.maindiv}>
      <Text style={{fontWeight:90}}>SupaMenu</Text>
      <Text style={{fontSize:'bold'}}>
        Welcome .....
      </Text>
      <Text>
        please fill in the information
      </Text>
      <TextInput placeholder='Full Name' styles={styles.input}></TextInput>
      <TextInput placeholder='Phone Number'></TextInput>
      <TextInput placeholder='Your email'></TextInput>

      <Button style={{backgroundColor:'#F7941D'}}> 
      
      <Text style={styles.buttonText}>
      Proceed
      </Text>
      </Button>

      {/* LINE */}
  <View style={styles.lineStyle}> 
<View style={{flex:1, height:1,backgroundColor:'black'}}>
<View>
  <Text style ={{textAlign:'center',width:50 }}> OR </Text>
</View>

</View>
  </View>
    </View>
    </View>
  )
}

export default SignUp

const styles= StyleSheet. create({

  lineStyle :{
    flexDirection:'row',
    marginTop:30,
    marginRight:15,
    marginLeft:15,
    alignItems:'center',
  },
buttonText:{
  color: 'white',
  fontWeight: 'bold',
  fontSize: 30,
},
maindiv:{
  backgroundColor:'white',
  color:'#B7B8B7',
  borderTopLeftRadius:15,
  borderTopRightRadius:15,
  borderTopWidth:2
},
input:{
  width: 300,
  height: 40,
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderWidth: 1,
  borderRadius: 15, 
  fontSize: 20,
  borderColor:'#DADAD9'
}
});