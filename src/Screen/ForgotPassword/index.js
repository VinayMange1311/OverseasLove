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
import styles from './styles';
import * as Images from '../../Images/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Forgotpassword = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#6B18FF', '#AF18C6', '#FF1882']}
      style={styles.main}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 2}}
      locations={[0, 0.3, 0.7]}>
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <AntDesign
          name={'left'}
          size={18}
          color={'white'}
          style={styles.backBtn}
        />
      </Pressable>
      <Image source={Images.overseas} style={styles.overseas}></Image>
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      <Text style={styles.forgotPasswordDesc}>
        Forgot password? Please, enter your E-mail adress, to reset your
        password E-mail Reset
      </Text>
      <TextInput
        style={styles.emailInput}
        placeholder="E-mail"
        placeholderTextColor={'#FFFFFF'}></TextInput>
      <ImageBackground
        source={Images.BtnBackGround}
        resizeMode="center"
        style={styles.btnBackGrondLiner}>
        <TouchableHighlight style={styles.resetBtn}>
          <Text style={styles.btntext}>Reset</Text>
        </TouchableHighlight>
      </ImageBackground>
    </LinearGradient>
  );
};
export default Forgotpassword;
