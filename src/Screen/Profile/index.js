import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Image source={Images.Logo} style={styles.logo}></Image>
        <Pressable onPress={()=>navigation.navigate("Setting")}>
        <AntDesign name={'setting'} color={'#24000B'} size={30} />
        </Pressable>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ImageBackground source={Images.Profile} style={styles.profile}>
          <Image source={Images.ProfileFrame} style={styles.profileframe} />
        </ImageBackground>
        <View>
          <Text style={styles.profileName}>David, 29</Text>
          <View style={styles.descView}>
            <Image source={Images.grp3} style={styles.heart}></Image>
            <Text style={styles.profileDesc}>looking for a girlfriend</Text>
          </View>
        </View>
      </View>
      <Text style={styles.instruction}>
        For now you can send only 2 messages
      </Text>
      <Text style={styles.premiumInstruction}>
        Upgrade to <Text style={{color: '#6B18FF'}}>PREMIUM</Text> account and
        send as much messages as you want
      </Text>
      <View style={styles.btnBackView}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.btn, {transform: [{rotate: '4.14deg'}]}]}>
          <Text style={styles.btnText}>Upgrade</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shareView}>
        <Image source={Images.Share} style={styles.shareIcon}></Image>
        <Text style={styles.shareDesc}>
          Share this app and help people to find love
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
