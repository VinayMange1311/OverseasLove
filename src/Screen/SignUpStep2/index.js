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
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker'
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
const SignUpStep2 = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [filePath, setFilePath] = useState({});
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
          <ImageBackground source={Images.Add} style={styles.plusIcon}></ImageBackground>
        </ImageBackground>
      </ImageBackground>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TextInput
        style={styles.userChoiceDesc}
        placeholder="What are you looking for?"
        placeholderTextColor={'#FFFFFF'}></TextInput>
    </LinearGradient>
  );
};
export default SignUpStep2;
