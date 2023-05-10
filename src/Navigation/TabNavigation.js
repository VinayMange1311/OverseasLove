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

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'Home' : '';
            } else if (rn === likesScreen) {
              iconName = focused ? 'Chat' : '';
            } else if (rn === chatScreen) {
              iconName = focused ? 'Homeheart' : '';
            }
            return <Image source={Images.iconName} />;
          },
        })}>
        <Tab.Group>
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={chatScreen} component={Chat} />
          <Tab.Screen name={likesScreen} component={Likes} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigation;
