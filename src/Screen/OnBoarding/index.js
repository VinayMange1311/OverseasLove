import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  View
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
          source={Images.rectangleFrame}
          style={styles.backGroundImageFrame}>
          <Text style={styles.backGroundImageText}>Find your love now!</Text>
        </ImageBackground>
      </ImageBackground>
      <Text style={styles.simpleText}>
        Our mission is to help people find love. Match the best variants for
        you!
      </Text>
      <View style={{height:65,marginHorizontal:14,borderWidth:1,marginTop:40,transform:[{ rotate:'-4.14deg'}]}}>
      <TouchableOpacity
        style={[styles.signInBtn,{transform:[{ rotate:'4.14deg'}],}]}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.signUpText}>
        Dont`t have an Account?
        <Text style={{color: 'rgba(107, 24, 255, 1)'}}> Sign up</Text>
      </Text>
    </SafeAreaView>
  );
};
export default OnBoarding;
