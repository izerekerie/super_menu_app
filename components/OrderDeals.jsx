import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import InputSpinner from "react-native-input-spinner";
import React from "react";

const OrderDeals = ({ navigation, OrderItems }) => {

  const transformedItem = [];
  for (const key in OrderItems) {
    transformedItem.push({
      itemId: key,
      itemName: OrderItems[key].name,
      description: OrderItems[key].description,
      displayPriority: OrderItems[key].displayPriority,
      unitPrice: OrderItems[key].unitPrice,
      quantity: 1,
      totalPrice: OrderItems[key].unitPrice,
    });
  }

  const [newItems, setNewItems] = React.useState(transformedItem);
  
  const [count, setCount] = React.useState(0);
  let sum = 0;
  for (let index = 0; index < newItems.length; index++) {
    sum = sum + parseInt(newItems[index].totalPrice);
  }
  const onPress = () => setCount(count + 1);
  return (
    <View>
      {newItems.map((prodDetail, index) => {
        return (
          <View key={index}>
            <View style={styles.results}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.restImg}
                  source={require("./../assets/restaurant.jpg")}
                  resizeMode="cover"
                />
                <View style={styles.textsStyle}>
                  <View>
                    <Text style={styles.listStyle}>
                      {prodDetail.description}
                    </Text>
                    <Text style={styles.nameValStyle}>
                      {prodDetail.itemName} - {prodDetail.displayPriority}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.priceStyle}>
                        Rwf {prodDetail.totalPrice}
                      </Text>
                      <InputSpinner
                        step={1}
                        buttonTextColor={"#F7941D"}
                        fontSize={16}
                        color={"#ffffff"}
                        textColor={"black"}
                        height={30}
                        value={prodDetail.quantity}
                        width={75}
                        showBorder={true}
                        shadow={false}
                        rounded={false}
                        background={"#ffffff"}
                        buttonFontSize={15}
                        onChange={(num) => {
                          setNewItems(
                            [...newItems].map((object) => {
                              if (object.itemId === prodDetail.itemId) {
                                return {
                                  ...object,
                                  quantity: num,
                                  totalPrice: object.unitPrice * num,
                                };
                              } else return object;
                            })
                          );
                        }}
                        style={styles.numericinput}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}

      <View style={styles.container}>
        <TouchableHighlight onPress={onPress} style={styles.highlight}>
          <View style={styles.morebutton}>
            <Text style={styles.moreText}>more drinks</Text>
            <View style={styles.backIcon}>
              <AntDesign
                name="arrowright"
                size={24}
                color="#F7941D"
                style={{ marginRight: 4 }}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalprice}>Frw {sum}</Text>
      </View>
      <Pressable
        style={styles.checkoutbutton}
        onPress={() =>
          navigation.navigate("Checkout", {
            orderItems: newItems,
            totalPrice: sum,
          })
        }
      >
        <Text style={styles.chekouttext}>Proceed with checkout</Text>
      </Pressable>
    </View>
  );
};

export default OrderDeals;

const styles = StyleSheet.create({
  results: {
    backgroundColor: "#f8f8fb",
    borderRadius: 7,
    width: 360,
    height: 100,
    marginTop: 20,
    padding: 10,
    fontSize: 12,
  },
  restImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  listStyle: {
    fontSize: 12,
    color: "#4e5157",
  },
  textsStyle: {
    marginLeft: 10,
    lineHeight: 15,
  },
  nameValStyle: {
    fontWeight: "bold",
    color: "#4e5157",
    fontSize: 14,
    marginTop: 3,
  },
  priceStyle: {
    color: "#F7941D",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 6,
  },
  numericinput: {
    marginLeft: 60,
  },
  highlight: {
    flexDirection: "row",
    marginTop: 30,
  },
  morebutton: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
  },
  backIcon: {
    marginRight: 4,
  },
  moreText: {
    color: "#F7941D",
    marginEnd: 10,
    fontWeight: "bold",
    marginTop: 3,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  totalText: {
    fontWeight: "bold",
  },
  totalprice: {
    color: "#F7941D",
    fontWeight: "bold",
  },
  checkoutbutton: {
    height: 50,
    marginBottom: 100,
    backgroundColor: "#F7941D",
    borderRadius: 9,
    justifyContent: "center",
  },
  chekouttext: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
