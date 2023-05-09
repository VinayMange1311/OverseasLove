import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Image source={Images.Logo} style={styles.logo}></Image>
        <Image source={Images.Filter} style={styles.filter}></Image>
      </View>
      <ImageBackground source={Images.photo} style={styles.photo}>
          <Text>Kim, 26</Text>
          <Text>20km from you</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Home;
