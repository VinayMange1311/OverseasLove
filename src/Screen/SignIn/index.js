import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Images from '../../Images/index';
const SignIn = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#6B18FF', '#AF18C6', '#FF1882']}
      style={styles.linearGradient}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 2}}
      locations={[0, 0.3, 0.7]}>
      <View style={styles.headerView}>
        <Pressable onPress={() => navigation.navigate('OnBoarding')}>
          <AntDesign name={'left'} size={18} color={'white'} />
        </Pressable>
      </View>
      <Image source={Images.overseas} style={styles.overseasImg}></Image>
      <Text style={styles.signInText}>Sign in</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="E-mail"
        placeholderTextColor={'#FFFFFF'}></TextInput>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        placeholderTextColor={'#FFFFFF'}
        secureTextEntry={true}></TextInput>
      <Text
        style={styles.forgotPassText}
        onPress={() => navigation.navigate('Forgotpassword')}>
        Forgot password?
      </Text>
      <ImageBackground
        source={Images.BtnBackGround}
        resizeMode="center"
        style={styles.btnBackGrondLiner}>
        <TouchableHighlight style={styles.signInBtn} onPress={()=> navigation.navigate('SignUpStep1')}>
          <Text style={styles.btntext}>Sign in</Text>
        </TouchableHighlight>
      </ImageBackground>
      <View style={styles.mainDivider}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or log in with</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialContent}>
        <AntDesign name={'apple1'} size={40} color={'white'} />
        <MaterialCommunityIcons name={'facebook'} size={40} color={'white'} />
        <Image
          source={Images.Instagram}
          style={{height: 35, width: 35, marginTop: 3}}></Image>
        <FontAwesome name={'google-plus-circle'} size={40} color={'white'} />
      </View>
    </LinearGradient>
  );
};
export default SignIn;
