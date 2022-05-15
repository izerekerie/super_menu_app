import React from 'react'
import SignUp from './screens/SignUp'

const App = () => {
  return (
   <View>
<SignUp/>

   </View>
  )
}

export default App


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import Navigation from './navigation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Login from './screens/Login';
// import SignUp from './screens/SignUp';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const stack= createStackNavigator();

//  function App() {
//   return (
//   < Stack.Navigator screenOptions={{headerShown:false}}>
//   <Stack.screen name="login" component={Login}/>
//   <Stack.screen name="signUp" component={SignUp}/>
//   </Stack.Navigator>
    
//   );
// }


// export default  () => {
//   return (
//     <NavigationContainer>
//       <App/>
//       </NavigationContainer>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
