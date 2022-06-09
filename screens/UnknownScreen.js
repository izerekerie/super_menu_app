import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UnknownScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UnknownScreen screen</Text>
    </View>
  )
}

export default UnknownScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });