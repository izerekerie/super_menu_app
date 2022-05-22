import { View, Text, Image,StatusBar } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
const PaySuccess = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        marginTop: 20,
        padding: 20,
        width: "100%",
      }}
    >
       <StatusBar style="auto" />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          source={require("./../assets/pay-svg.png")}
          style={{ width: 150, height: 150, borderRadius: 100, margin: 40 }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ color: "#F7941D", fontSize: 20, fontWeight: "500" }}>
          Payment Success, yayy!
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            width: "100%",
            padding: 10,
            color: "#fff",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          we will send order details and invoice in your contact no. and
          registered email
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          padding: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#f08f5f",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Check Details
        </Text>
        <FontAwesome
          style={{ marginLeft: 20 }}
          name="long-arrow-right"
          size={18}
          color="#f08f5f"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#f7941d",
            borderRadius:10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              paddingHorizontal: 14,
              paddingVertical: 14,
              fontWeight:'bold'
            }}
          >
            Download Invoice
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ fontSize: 40, color: "#fff", fontWeight: "bold" }}>
          Supa
        </Text>
        <Text style={{ fontSize: 40, color: "#F7941D", fontWeight: "bold" }}>
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaySuccess;
