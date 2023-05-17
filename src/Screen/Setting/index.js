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
      <View style={{flexDirection: 'row',marginHorizontal:15,justifyContent:'space-evenly'}}>
        <ImageBackground
          source={Images.mainImg}
          style={styles.mainImg}>
          <Image
            source={Images.mainImgFrame}
            style={styles.mainImgFrame}
          />
        </ImageBackground>
        <View style={{marginTop: 35}}>
          <Image
            source={Images.reactangle27}
            style={styles.selectedImg}></Image>
          <Image
            source={Images.reactangle26}
            style={styles.selectedImg}></Image>
        </View>
      </View>
      <View style={styles.imageView}>
        <Image
          source={Images.reactangle23}
          style={styles.selectedImg}></Image>
        <Image
          source={Images.reactangle24}
          style={styles.selectedImg}></Image>
        <ImageBackground
          source={Images.reactangle25}
          style={styles.selectedImg}>
            <Image source={Images.cameraAdd} style={styles.cameraIcon}/>
          </ImageBackground>
      </View>
      <Text style={styles.title}>David, 29</Text>
      <Text style={styles.userDesc}>man, LA</Text>
      <Text style={styles.title}>What are you looking for</Text>
      <Text style={styles.userDesc}>looking for: girlfriend</Text>
      <Dropdown
        style={styles.dropDownContainer}
        placeholder="Smoking"
        itemTextStyle={{color:'black'}}
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
        itemTextStyle={{color:'black'}}
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
        itemTextStyle={{color:'black'}}
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
        itemTextStyle={{color:'black'}}
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
        itemTextStyle={{color:'black'}}
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
        itemTextStyle={{color:'black'}}
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
        itemTextStyle={{color:'black'}}
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
