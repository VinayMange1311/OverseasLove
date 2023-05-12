import React from 'react';
import * as Images from '../Images/index';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Chat from '../Screen/Chat/index.js';
import Home from '../Screen/Home/index.js';
import Likes from '../Screen/likes/index.js';

//screen Names
const homeName = 'Home';
const likesScreen = 'Likes';
const chatScreen = 'Chat';

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
export default TabNav;
