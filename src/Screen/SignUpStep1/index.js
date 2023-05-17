import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-datepicker';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';

const SignUpStep1 = () => {
  const navigation = useNavigation();
  const [value2, setValue2] = useState([]);
  const [isActive2, setisActive2] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Other', value: '3'},
  ];
  return (
    <LinearGradient
      colors={['#6B18FF', '#AF18C6', '#FF1882']}
      style={styles.main}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 2}}
      locations={[0, 0.3, 0.7]}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate('OnBoarding')}>
            <AntDesign
              name={'left'}
              size={18}
              color={'white'}
              style={styles.backBtn}
            />
          </Pressable>
          <Text style={styles.signUpHead}>Sign up</Text>
        </View>
        <TextInput
          style={styles.signUpTextInput}
          placeholder="Full name"
          placeholderTextColor={'#FFFFFF'}
          onChangeText={name => setName(name)}></TextInput>
        <TextInput
          style={styles.emailInput}
          placeholder="example@example.com"
          placeholderTextColor={'#FFFFFF'}
          onChangeText={email => setEmail(email)}></TextInput>
        <TextInput
          style={styles.signUpTextInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'#FFFFFF'}
          onChangeText={password => setPassword(password)}></TextInput>
        <View style={styles.dropdownView}>
          <Dropdown
            style={styles.dropDownContainer}
            placeholder="Gender"
            placeholderStyle={styles.placeholder}
            itemTextStyle={{color:'black'}}
            data={data}
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
            style={styles.dropDownContainer}
            placeholder="Location"
            itemTextStyle={{color:'black',}}
            placeholderStyle={styles.placeholder}
            data={data}
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
        <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, {transform: [{rotate: '4.14deg'}]}]}
          onPress={() => navigation.navigate('SignUpStep2')}>
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
          <Image
            source={Images.Instagram}
            style={styles.instaIcon}></Image>
          <FontAwesome name={'google-plus-circle'} size={40} color={'white'} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
export default SignUpStep1;
