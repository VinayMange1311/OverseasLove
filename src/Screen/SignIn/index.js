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
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Images from '../../Images/index';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const signInpress = ()=>{

  if (email==="Vinay" && password==="1234") {
    navigation.navigate("Home");
  } else {
    alert("username and password not matched")
  }
}
  return (
    <LinearGradient
      colors={['#6B18FF', '#AF18C6', '#FF1882']}
      style={styles.linearGradient}
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 2}}
      locations={[0, 0.3, 0.7]}>
      <Pressable
        onPress={() => navigation.navigate('OnBoarding')}
        style={styles.headerView}>
        <AntDesign name={'left'} size={18} color={'white'} />
      </Pressable>
      <Image source={Images.HeartGroup} style={styles.heartGroup} />
      <Image source={Images.overseas} style={styles.overseasImg}></Image>
      <Text style={styles.signInText}>Sign in</Text>
      <TextInput
        style={styles.signInTextInput}
        placeholder="E-mail"
        placeholderTextColor={'#FFFFFF'}
        onChangeText={email => setEmail(email)}></TextInput>
        
      <TextInput
        style={styles.signInTextInput}
        placeholder="Password"
        placeholderTextColor={'#FFFFFF'}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}></TextInput>
      <Text
        style={styles.forgotPassText}
        onPress={() => navigation.navigate('Forgotpassword')}>
        Forgot password?
      </Text>
      <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, {transform: [{rotate: '4.14deg'}]}]}
          onPress={() => signInpress()}>
          <Text style={styles.btnText}>Sign in</Text>
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
          style={{height: 35, width: 35, marginTop: 3}}></Image>
        <FontAwesome name={'google-plus-circle'} size={40} color={'white'} />
      </View>
    </LinearGradient>
  );
};
export default SignIn;
