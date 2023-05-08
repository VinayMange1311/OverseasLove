import React, {useState, useEffect} from 'react';
import {Text, Image, SafeAreaView, TouchableOpacity, TouchableHighlight} from 'react-native';
import { ImageBackground } from 'react-native'
import styles from './styles';
import * as Images from '../../Images/index'
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground source={Images.annete1} style={styles.backGroundImage}>
        <Text style={styles.backGroundImageText}>Find your love now!</Text>
      </ImageBackground>
      <Text style={styles.simpleText}>Our mission is to help people find love. Match the best variants for you!</Text>
      <TouchableHighlight style={styles.signInBtn} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableHighlight>
      <Text style={styles.signUpText}>Dont`t have an Account?<Text style={{color:'rgba(107, 24, 255, 1)'}}> Sign up</Text></Text>
    </SafeAreaView>
  );
};
export default OnBoarding;
