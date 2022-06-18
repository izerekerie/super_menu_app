import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Constants from "expo-constants";

const countInterval = useRef(null);
const [count, setCount] = useState(0);

useEffect(() => {
  countInterval.current = setInterval(() => setCount((old) => old + 5), 1000);
  return () => {
    clearInterval(countInterval); //when user exits, clear this interval.
  };
}, []);

const loaderValue = useRef(new Animated.Value(0)).current;
const load = (count) => {
  Animated.timing(loaderValue, {
    toValue: count, //final value
    duration: 500, //update value in 500 milliseconds
    useNativeDriver: true,
  }).start();
};

const width = animation.current.interpolate({
  inputRange: [0, 100],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp",
});

useEffect(() => {
  load(count);
  if (count >= 100) {
    setCount(100);
    clearInterval(countInterval);
  }
}, [count]);

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Loading.....</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#8BED4F", width },
          ]}
        />
      </View>
      <Text>{`${width}%`}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: "column", //column direction
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
