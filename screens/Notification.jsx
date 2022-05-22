import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification screen</Text>
    </View>
  )
}

export default Notification


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });