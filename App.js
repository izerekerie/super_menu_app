import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import authReducer from "./store/reducer/auth";
import serviceProvider from "./store/reducer/serviceProvider";
import menuReducer from "./store/reducer/menu";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  auth: authReducer,
  serviceProvider:serviceProvider,
 menuReducer:menuReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    borderColor: '#000',
  },
});