import React, {useState, useEffect} from 'react';
import {Text, TextInput, StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import OnBoarding from './src/Screen/OnBoarding';
import SignIn from './src/Screen/SignIn';
import Forgotpassword from './src/Screen/ForgotPassword';
import SignUpStep1 from './src/Screen/SignUpStep1';
import SignUpStep2 from './src/Screen/SignUpStep2';
import VarifyNumberStep1 from './src/Screen/VarifyNumberS1';
import VarifyNumberStep2 from './src/Screen/VarifyNumberS2';
import Home from './src/Screen/Home';
import Chat from './src/Screen/Chat';
import Likes from './src/Screen/likes';
import * as Images from './src/Images/index';
import Profile from './src/Screen/Profile';

const Tab = createBottomTabNavigator();
const TabNav = () =>  {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 86,
          paddingBottom: 15,
        },
      }}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#6B18FF',
      }}>
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={Images.Home} style={styles.bottomChatImg} />
              ) : (
                <Image source={Images.Home} style={styles.bottomChatImg} />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={Images.ChatOutline} style={styles.bottomChatImg} />
              ) : (
                <Image source={Images.Chat} style={styles.bottomChatImg} />
              ),
          }}
        />
        <Tab.Screen
          component={Likes}
          name="Likes"
          options={{
            tabBarLabel: 'Likes',
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={Images.HeartOutline} style={styles.bottomLikeImg} />
              ) : (
                <Image source={Images.Homeheart} style={styles.bottomLikeImg} />
              ),
          }}
        />
        <Tab.Screen
          component={Profile}
          name="Profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image source={Images.PersonOutline} style={styles.bottomPersonOutline} />
              ) : (
                <Image source={Images.Person} style={styles.bottomPerson} />
              ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword}/>
          <Stack.Screen name="SignUpStep1" component={SignUpStep1}/>
          <Stack.Screen name="SignUpStep2" component={SignUpStep2}/>
        <Stack.Screen name="VarifyNumberS1" component={VarifyNumberStep1} />
        <Stack.Screen name="VarifyNumberS2" component={VarifyNumberStep2} />
        <Stack.Screen name="Home" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  bottomHomeImg: {
    height: 33,
    width: 33,
  },
  bottomLikeImg: {
    height: 33,
    width: 33,
  },
  bottomChatImg: {
    height: 33,
    width: 33,
  },
  bottomPerson:{
    height:33,
    width:33,
  },
  bottomPersonOutline:{
    height:25,
    width:25,
  }
});
