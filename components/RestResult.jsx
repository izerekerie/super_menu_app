import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Navigation from "../navigation";

const RestResult = ({ name, address, email, navigation }) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
      <View style={styles.results}>
          <Image
            style={styles.restImg}
            source={require("./../assets/restaurant.jpg")}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "bold" }}>Choose {name}</Text>
            <Text style={{ marginTop: 10, fontSize: 13}}>
              {address} ,{email} 
            </Text>
          </View>
      </View>
      </TouchableOpacity>
  );
};

export default RestResult;

const styles = StyleSheet.create({
  results: {
    backgroundColor: "#edf0f5",
    borderRadius: 7,
    height: 100,
    marginTop: 20,
    padding: 10,
   flexDirection: "row",
  },
  restImg: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  textContainer:{
    margin:10,
    width:'70%'
  }
});
