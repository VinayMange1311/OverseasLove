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
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountryPicker from 'rn-country-picker';

const VarifyNumberStep1 = () => {
  const [countryCode, setCountryCode] = useState("");
  const [number, setNumber] = useState("");
  const navigation = useNavigation();

  const selectedValue = value => {
    setCountryCode(value);
  };
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
      <Text style={styles.varifyDesc}>
        Please, enter your country phone number
      </Text>
      <View style={styles.dropNumberView}>
        <CountryPicker
          hideCountryCode={true}
          containerStyle={styles.flagDropDown}
          dropDownImageStyle={styles.flagDropIcon}
          selectedValue={(code)=>selectedValue(code)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone number"
          placeholderTextColor={'white'}
          onChangeText={number => setNumber(number)}></TextInput>
      </View>
      <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, {transform: [{rotate: '4.14deg'}]}]}
          onPress={() => navigation.navigate('VarifyNumberS2')}>
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default VarifyNumberStep1;
