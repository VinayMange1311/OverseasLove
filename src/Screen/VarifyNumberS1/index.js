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
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input'
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal'
const VarifyNumberStep1 = () => {
    const [withFlag, setWithFlag] = useState(true)
    const [value, setValue] = useState()
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
      <Text style={styles.varfyTitle}>Verify your phone number</Text>
      <Text style={styles.varifyDesc}>Please, enter your country phone number</Text>
      <ImageBackground
        source={Images.BtnBackGround}
        resizeMode="center"
        style={styles.btnBackGrondLiner}>
        <TouchableHighlight
          style={styles.resetBtn}
          onPress={() => navigation.navigate('VarifyNumberS2')}>
          <Text style={styles.btntext}>Verify</Text>
        </TouchableHighlight>
        </ImageBackground>
    </LinearGradient>
  );
};
export default VarifyNumberStep1;
