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
import * as Images from '../../Images/index';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const VarifyNumberStep2 = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#6B18FF', '#AF18C6', '#FF1882']}
      style={styles.main}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 2}}
      locations={[0, 0.3, 0.7]}>
      <Pressable onPress={() => navigation.navigate('SignUpStep1')}>
        <AntDesign
          name={'left'}
          size={18}
          color={'white'}
          style={styles.backBtn}
        />
      </Pressable>
      <Image source={Images.HeartGroup} style={styles.HeartGroup}></Image>
      <Image source={Images.overseas} style={styles.overseasImg}></Image>
      <Text style={styles.varfyTitle}>Verification code</Text>
      <Text style={styles.varifyDesc}>
        Please, enter code, sent to{' '}
        <Text style={styles.numberDesc}>0996547716</Text>
      </Text>
      <View style={styles.otpBox}>
        <TextInput
          style={styles.otpNo}
          maxLength={1}
          keyboardType={'numeric'}></TextInput>
        <TextInput
          style={styles.otpNo}
          maxLength={1}
          keyboardType={'numeric'}></TextInput>
        <TextInput
          style={styles.otpNo}
          maxLength={1}
          keyboardType={'numeric'}></TextInput>
        <TextInput
          style={styles.otpNo}
          maxLength={1}
          keyboardType={'numeric'}></TextInput>
      </View>
      <ImageBackground
        source={Images.BtnBackGround}
        resizeMode="center"
        style={styles.btnBackGrondLiner}>
        <TouchableHighlight
          style={styles.resetBtn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btntext}>Verify</Text>
        </TouchableHighlight>
      </ImageBackground>
      <Text style={styles.resendCode}>Resend code</Text>
    </LinearGradient>
  );
};
export default VarifyNumberStep2;
