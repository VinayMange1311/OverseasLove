import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CandidateChat = () => {
    const [tasks, setTasks] = useState([]);
    const AddChat = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
      }
  return (
    <View style={styles.main}>
        <Image source={Images.Logo} style={styles.logo}/>
    <ScrollView>
    {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              
            </View>
          );
        })
      }
    </ScrollView>
    <TextInput style={styles.chatInput}/>
 </View>
  );
};
export default CandidateChat;
