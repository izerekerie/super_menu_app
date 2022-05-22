import { View, Text ,StatusBar} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const RateService = () => {
  return (
    <View style={{ backgroundColor: "#000", flex: 1, padding: 10 }}>
       <StatusBar style="auto"/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 70,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            color: "#F7941D",
            fontSize: 18,
            fontWeight:'bold'
          }}
        >
          Yayy! {'\n'} We value all feedback,{'\n'} Please rate your expreience {'\n'} below:
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
          padding: 10,
        }}
      >
        <FontAwesome
          name="star"
          size={30}
          color="#F7941D"
          style={{ padding: 10 }}
        />
        <FontAwesome
          name="star"
          size={30}
          color="#F7941D"
          style={{ padding: 10 }}
        />
        <FontAwesome
          name="star"
          size={30}
          color="#F7941D"
          style={{ padding: 10 }}
        />
        <FontAwesome
          name="star"
          size={30}
          color="#fff"
          style={{ padding: 10 }}
        />
        <FontAwesome
          name="star"
          size={30}
          color="#fff"
          style={{ padding: 10 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 70,
        }}
      >
        <Text
          style={{
            padding: 10,
            justifyContent: "center",
            textAlign: "center",
            color: "#F7941D",
            fontSize: 18,
            fontWeight:'bold'
          }}
        >
          Yayy! We value all feedback,{'\n'} Please rate your expreience below:
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 80,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: 40,
          }}
        >
          Supa
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#F7941D",
            fontSize: 40,
          }}
        >
          Menu
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 100,
        }}
      ></View>
    </View>
  );
};

export default RateService;
