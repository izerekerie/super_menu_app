import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
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
