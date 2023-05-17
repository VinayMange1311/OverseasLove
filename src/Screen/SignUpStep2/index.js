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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {Dropdown} from 'react-native-element-dropdown';

const SignUpStep2 = () => {
  const navigation = useNavigation();
  const [value1, setValue1] = useState([]);
  const [isActive1, setisActive1] = useState(false);

  const [value2, setValue2] = useState([]);
  const [isActive2, setisActive2] = useState(false);

  const [value3, setValue3] = useState([]);
  const [isActive3, setisActive3] = useState(false);

  const [choice, setChoice] = useState('');

  const months = [
    {value: 1, label: 'January'},
    {value: 2, label: 'February'},
    {value: 3, label: 'March'},
    {value: 4, label: 'April'},
    {value: 5, label: 'May'},
    {value: 6, label: 'June'},
    {value: 7, label: 'July'},
    {value: 8, label: 'August'},
    {value: 9, label: 'September'},
    {value: 10, label: 'October'},
    {value: 11, label: 'November'},
    {value: 12, label: 'December'},
  ];
  const days = Array.from({length: 31}, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const years = Array.from({length: 100}, (_, i) => ({
    value: i + 1,
    label: `${i + 2000}`,
  }));
  // console.log(years);

  return (
    <LinearGradient
      colors={['#6B18FF', '#AF18C6', '#FF1882']}
      style={styles.main}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 2}}
      locations={[0, 0.3, 0.7]}>
      <View style={{flexDirection: 'row'}}>
        <Pressable onPress={() => navigation.navigate('SignUpStep1')}>
          <AntDesign
            name={'left'}
            size={18}
            color={'white'}
            style={styles.backBtn}
          />
        </Pressable>
        <Text style={styles.signUpHead}>Sign up</Text>
      </View>
      <ImageBackground source={Images.Circle} style={styles.circleBackGround}>
        <Image source={Images.camera} style={styles.cameraIcon}></Image>
        <ImageBackground source={Images.AddCircle} style={styles.addIcon}>
          <ImageBackground
            source={Images.Add}
            style={styles.plusIcon}></ImageBackground>
        </ImageBackground>
      </ImageBackground>
      <View style={styles.dropDownView}>
        <Dropdown
          style={styles.dayDropDownContainer}
          placeholder="days"
          itemTextStyle={{color: 'black'}}
          placeholderStyle={styles.placeholder}
          data={days}
          setSelected={setValue1}
          renderRightIcon={() => (
            <Feather
              color={'#FFFFFF'}
              size={26}
              style={{marginRight: 5}}
              name={isActive1 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value1}
          onChange={item => {
            setValue1(item.value);
          }}
          onFocus={() => setisActive1(true)}
          onBlur={() => setisActive1(false)}
        />
        <Dropdown
          style={styles.monthDropDownContainer}
          placeholder="months"
          itemTextStyle={{color: 'black'}}
          data={months}
          autoScroll={false}
          setSelected={setValue2}
          renderRightIcon={() => (
            <Feather
              color={'#FFFFFF'}
              size={26}
              style={{marginRight: 5}}
              name={isActive2 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
          onFocus={() => setisActive2(true)}
          onBlur={() => setisActive2(false)}
        />

        <Dropdown
          style={styles.yearDropDownContainer}
          placeholder="Years"
          itemTextStyle={{color: 'black'}}
          placeholderStyle={styles.placeholder}
          data={years}
          setSelected={setValue3}
          renderRightIcon={() => (
            <Feather
              color={'#FFFFFF'}
              size={26}
              style={{marginRight: 5}}
              name={isActive3 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value3}
          onChange={item => {
            setValue3(item.value);
          }}
          onFocus={() => setisActive3(true)}
          onBlur={() => setisActive3(false)}
        />
      </View>
      <TextInput
        style={styles.userChoiceDesc}
        placeholder="What are you looking for?"
        placeholderTextColor={'#FFFFFF'}
        onChangeText={choice => setChoice(choice)}></TextInput>
      <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, {transform: [{rotate: '4.14deg'}]}]}
          onPress={() => navigation.navigate('VarifyNumberS1')}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainDivider}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or log in with</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialContent}>
        <AntDesign name={'apple1'} size={40} color={'white'} />
        <MaterialCommunityIcons name={'facebook'} size={40} color={'white'} />
        <Image source={Images.Instagram} style={styles.instaIcon}></Image>
        <FontAwesome name={'google-plus-circle'} size={40} color={'white'} />
      </View>
    </LinearGradient>
  );
};
export default SignUpStep2;
