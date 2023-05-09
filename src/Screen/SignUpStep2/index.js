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
import {Picker} from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {Dropdown} from 'react-native-element-dropdown';

const SignUpStep2 = () => {
  const navigation = useNavigation();
  const [value2, setValue2] = useState([]);
  const [isActive2, setisActive2] = useState(false);

  const months = [
    {id: 1, name: 'January'},
    {id: 2, name: 'February'},
    {id: 3, name: 'March'},
    {id: 4, name: 'April'},
    {id: 5, name: 'May'},
    {id: 6, name: 'June'},
    {id: 7, name: 'July'},
    {id: 8, name: 'August'},
    {id: 9, name: 'September'},
    {id: 10, name: 'October'},
    {id: 11, name: 'November'},
    {id: 12, name: 'December'},
  ];
  const days = Array.from({length: 31}, (_, i) => ({
    id: i + 1,
    name: `${i + 1}`,
  }));

  const years = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    name: `${i + 1980}`,
  }));
  console.log(years);
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
          placeholder="Days"
          placeholderStyle={styles.placeholder}
          // selectedTextStyle={styles.selectedTextStyle}
          data={days}
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
          style={styles.monthDropDownContainer}
          placeholder="months"
          placeholderStyle={styles.placeholder}
          // selectedTextStyle={styles.selectedTextStyle}
          data={months}
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
          placeholder="Days"
          placeholderStyle={styles.placeholder}
          // selectedTextStyle={styles.selectedTextStyle}
          data={years}
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
      </View>
      <TextInput
        style={styles.userChoiceDesc}
        placeholder="What are you looking for?"
        placeholderTextColor={'#FFFFFF'}></TextInput>
      <ImageBackground
        source={Images.BtnBackGround}
        resizeMode="center"
        style={styles.btnBackGrondLiner}>
        <TouchableHighlight
          style={styles.resetBtn}
          onPress={() => navigation.navigate('VarifyNumberS1')}>
          <Text style={styles.btntext}>Continue</Text>
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
export default SignUpStep2;
