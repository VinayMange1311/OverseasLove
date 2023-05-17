import React, {useState, useEffect} from 'react';
import {Text, TextInput, StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Chat from '../Screen/Chat';
import Likes from '../Screen/likes';
import Profile from '../Screen/Profile';
import * as Images from '../Images/index';
 const TabNav = () => {
    const Tab = createBottomTabNavigator();
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
                  <Image
                    source={Images.ChatOutline}
                    style={styles.bottomChatImg}
                  />
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
                  <Image
                    source={Images.HeartOutline}
                    style={styles.bottomLikeImg}
                  />
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
                  <Image
                    source={Images.PersonOutline}
                    style={styles.bottomPersonOutline}
                  />
                ) : (
                  <Image source={Images.Person} style={styles.bottomPerson} />
                ),
            }}
          />
        </Tab.Group>
      </Tab.Navigator>
    );
  };
  export default TabNav;
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
    bottomPerson: {
      height: 33,
      width: 33,
    },
    bottomPersonOutline: {
      height: 25,
      width: 25,
    },
  });
  