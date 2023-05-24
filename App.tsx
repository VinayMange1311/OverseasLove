import React, {useState, useEffect} from 'react';
import {Text, TextInput, StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import OnBoarding from './src/Screen/OnBoarding';
import SignIn from './src/Screen/SignIn';
import Forgotpassword from './src/Screen/ForgotPassword';
import SignUpStep1 from './src/Screen/SignUpStep1';
import SignUpStep2 from './src/Screen/SignUpStep2';
import VarifyNumberStep1 from './src/Screen/VarifyNumberS1';
import VarifyNumberStep2 from './src/Screen/VarifyNumberS2';
import Filter from './src/Screen/Filter';
import CandidateChat from './src/Screen/CandidateChat';
import Setting from './src/Screen/Setting';
import TabNav from './src/Navigation/TabNavigation';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="SignUpStep1" component={SignUpStep1} />
        <Stack.Screen name="SignUpStep2" component={SignUpStep2} />
        <Stack.Screen name="VarifyNumberS1" component={VarifyNumberStep1} />
        <Stack.Screen name="VarifyNumberS2" component={VarifyNumberStep2} />
        <Stack.Screen name="Home" component={TabNav} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="CandidateChat" component={CandidateChat} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

