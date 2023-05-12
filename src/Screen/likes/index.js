import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Touchable,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Likes = () => {
  const data = [
    {
      id: 1,
      image: Images.likeImg1,
    },
    {
      id: 2,
      image: Images.likeImg2,
    },
    {
      id: 3,
      image: Images.likeImg3,
    },
    {
      id: 4,
      image: Images.likeImg4,
    },
  ];
  const Items = ({item}) => {
    return (
      <View style={styles.imageContain}>
        <ImageBackground source={item.image} style={styles.image}>
          <Image source={Images.Likeframe} style={styles.imageframe}></Image>
        </ImageBackground>
        <View style={styles.btnContainer}>
          <Image source={Images.passBtn} style={styles.passImg}></Image>
          <Image source={Images.likeBtn} style={styles.likeImg}></Image>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Image source={Images.Logo} style={styles.logo}></Image>
      <Text style={styles.contacts}>They like you</Text>
      <View>
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={({item}) => <Items item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default Likes;
