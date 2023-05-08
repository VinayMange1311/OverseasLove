import React,{useState,useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import OnBoarding from './src/Screen/OnBoarding';
import SignIn from './src/Screen/SignIn';
import Forgotpassword from './src/Screen/ForgotPassword';
import SignUpStep1 from './src/Screen/SignUpStep1';
import SignUpStep2 from './src/Screen/SignUpStep2';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword}/> */}
          <Stack.Screen name="SignUpStep1" component={SignUpStep1}/>
          <Stack.Screen name="SignUpStep2" component={SignUpStep2}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
