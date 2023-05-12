import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
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
      <Image source={Images.HeartGroup} style={styles.heartGroup} />
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
      <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, {transform: [{rotate: '4.14deg'}]}]}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default Forgotpassword;
