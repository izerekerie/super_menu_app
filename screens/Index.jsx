import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
<TouchableOpacity onPress={()=> navigation.navigate('TabNavigation')}>
    <Text> touch me</Text>
</TouchableOpacity>
    </View>
  )
}

export default Index;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
