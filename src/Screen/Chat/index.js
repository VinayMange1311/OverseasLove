import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Chat = () => {
  const navigation = useNavigation();
  const contacts = [
    {
      id: 1,
      image: Images.Img1,
      name: 'Anna',
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      image: Images.Img2,
      name: 'Helen',
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      image: Images.harsh1,
      name: 'Victoria',
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 4,
      image: Images.Img3,
      name: 'Liza',
      desc: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 5,
      image: Images.harsh1,
      name: 'Alison',
      desc: 'Lorem ipsum dolor sit amet',
    },
  ];
  const Items = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={styles.contactsImage}></Image>
      </View>
    );
  };

  const ChatItems = ({item}) => {
    return (
      <View style={styles.chatMainView}>
        <Image source={item.image} style={styles.contactsImage}></Image>
        <View>
          <Pressable onPress={() => navigation.navigate('CandidateChat')}>
            <Text style={styles.names}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.main}>
      <Image source={Images.Logo} style={styles.logo}></Image>
      <Text style={styles.contacts}>Contacts</Text>
      <View>
        <FlatList
          alwaysBounceVertical={true}
          horizontal={true}
          data={contacts}
          renderItem={({item}) => <Items item={item} />}
        />
      </View>
      <Text style={styles.chat}>Chat</Text>
      <FlatList
        alwaysBounceVertical={true}
        data={contacts}
        renderItem={({item}) => <ChatItems item={item} />}
      />
    </SafeAreaView>
  );
};
export default Chat;
