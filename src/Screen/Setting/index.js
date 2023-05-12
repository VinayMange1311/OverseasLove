import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {Dropdown} from 'react-native-element-dropdown';
const Setting = () => {
  const navigation = useNavigation();
  const [value2, setValue2] = useState([]);
  const [isActive2, setisActive2] = useState(false);
  const data = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Other', value: '3'},
  ];
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 30}}>
      <View style={styles.headerView}>
        <Image source={Images.Logo} style={styles.logo}></Image>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={Images.backFillBtn} style={styles.backBtn}></Image>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ImageBackground
          source={Images.mainImg}
          style={{height: 215, width: 215, marginTop: 33, marginLeft: 15}}>
          <Image
            source={Images.mainImgFrame}
            style={{height: 200, width: 200, marginTop: 8, marginLeft: 10}}
          />
        </ImageBackground>
        <View style={{marginTop: 33}}>
          <Image
            source={Images.reactangle27}
            style={{height: 110, width: 110}}></Image>
          <Image
            source={Images.reactangle27}
            style={{height: 110, width: 110}}></Image>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={Images.reactangle27}
          style={{height: 110, width: 110}}></Image>
        <Image
          source={Images.reactangle27}
          style={{height: 110, width: 110}}></Image>
        <Image
          source={Images.reactangle27}
          style={{height: 110, width: 110}}></Image>
      </View>
      <Text style={styles.title}>David, 29</Text>
      <Text style={styles.userDesc}>man, LA</Text>
      <Text style={styles.title}>What are you looking for</Text>
      <Text style={styles.userDesc}>looking for: girlfriend</Text>
      <Dropdown
        style={styles.dropDownContainer}
        placeholder="Smoking"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
        style={styles.dropDownContainer}
        placeholder="Orientation"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
        style={styles.dropDownContainer}
        placeholder="Cildren"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
        style={styles.dropDownContainer}
        placeholder="Intentions"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
        style={styles.dropDownContainer}
        placeholder="Family status"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
        style={styles.dropDownContainer}
        placeholder="Attitude to alcohol"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
        style={styles.dropDownContainer}
        placeholder="Religion"
        placeholderStyle={styles.placeholder}
        data={data}
        setSelected={setValue2}
        renderRightIcon={() => (
          <Feather
            color={'#24000B'}
            size={26}
            style={{marginRight: 24}}
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
      <Text style={styles.title}>Hobby</Text>
      <TextInput
        style={styles.hobbies}
        placeholder="Your hobby..."
        placeholderTextColor={'#24000B'}>
        {' '}
      </TextInput>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.hobbyDesign}>Drawing</Text>
        <Text style={styles.hobbyDesign}>Photography</Text>
      </View>
      <Text style={styles.hobbyDesign}>Protestant</Text>
    </ScrollView>
  );
};

export default Setting;
