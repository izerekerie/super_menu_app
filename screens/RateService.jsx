import { View, Text ,StatusBar, Alert,ActivityIndicator} from "react-native";
import React,{useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { rate } from "../store/actions/rating";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const RateService = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [isProceed, setProceed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState(null);
  const [rating, setRating] = useState(0);

  const handleRate = async (score) => {
    setRating(score);
    setLoading(true);
    const data ={
      reviewComment: "string",
      score: score,
      serviceProvider: 1,
      status: "PENDING",
      userId: user.id
    }
    
    try {
      
      await dispatch(rate(data));
      Alert.alert(
        "Rating",
        "Thanks for your feedback",
        [{ text: "Ok", onPress: () => navigation.navigate("Search") }],
        { cancelable: false }
      );
    } catch (err) {
      if (err.response) {
        setLoading(false);
      } else {
        setErrortext(err.message);
        setLoading(false);
      }
    }
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={'#F7941D'} />
      </View>
    );
  }

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
          color={rating>=1? "#F7941D": "#ffffff"}
          style={{ padding: 10 }}
          onPress={() => handleRate(1)}
        />
        <FontAwesome
          name="star"
          size={30}
          color={rating >=2? "#F7941D": "#ffffff"}
          style={{ padding: 10 }}
          onPress={() => handleRate(2)}
        />
        <FontAwesome
          name="star"
          size={30}
          color={rating >=3?"#F7941D": "#ffffff"}
          style={{ padding: 10 }}
          onPress={() => handleRate(3)}
        />
        <FontAwesome
          name="star"
          size={30}
          color={rating>=4?"#F7941D":"#fff"}
          style={{ padding: 10 }}
          onPress={() => handleRate(4)}
        />
        <FontAwesome
          name="star"
          size={30}
          color={rating>=5 ? "#F7941D":"#fff"}
          style={{ padding: 10 }}
          onPress={() => handleRate(5)}
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
