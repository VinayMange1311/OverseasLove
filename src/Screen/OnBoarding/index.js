import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {ImageBackground} from 'react-native';
import styles from './styles';
import * as Images from '../../Images/index';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground source={Images.annete1} style={styles.backGroundImage}>
        <ImageBackground
          source={Images.MainFrame}
          style={styles.backGroundImageFrame}>
          <Text style={styles.backGroundImageText}>Find your love now!</Text>
        </ImageBackground>
      </ImageBackground>
      <Text style={styles.simpleText}>
        Our mission is to help people find love. Match the best variants for
        you!
      </Text>
      <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.btn,{transform: [{rotate: '4.14deg'}]}]}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('SignUpStep1')}>
        Dont`t have an Account?
        <Text style={styles.signUpTextColor}> Sign up</Text>
      </Text>
    </SafeAreaView>
  );
};
export default OnBoarding;
