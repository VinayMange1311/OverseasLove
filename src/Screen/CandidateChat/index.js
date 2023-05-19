import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CandidateChat = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = value => {
    addTask(value);
    setTask(null);
  };
  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
    //Keyboard.dismiss();
  };
  return (
    <View style={styles.main}>
      <Image source={Images.Logo} style={styles.logo} />
      <View style={styles.chatHeader}>
        <View style={styles.chatHeaderScreen}>
          <Image source={Images.Backbtn2X} style={styles.backBtn}></Image>
          <Image source={Images.Img3} style={styles.candidateprofile}></Image>
          <Text style={styles.candidateName}>Anna</Text>
        </View>
        <View style={styles.chatHeaderScreen}>
          <Image
            source={Images.Translationicon}
            style={styles.translationIcon}></Image>
          <MaterialCommunityIcons
            name={'phone'}
            size={25}
            color={'#24000B'}
            style={styles.callIcon}></MaterialCommunityIcons>
          <MaterialCommunityIcons
            name={'video'}
            size={25}
            color={'#24000B'}></MaterialCommunityIcons>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.youLiked}>You liked Anna 5 days ago</Text>
        {tasks.map((task, index) => {
          return (
            <View>
              <LinearGradient
                colors={['#6B18FF', '#AF18C6', '#FF1882']}
                style={styles.gradientTextView}
                start={{x: 0, y: 0}}
                end={{x: 1.5, y: 2}}
                locations={[0, 0.3, 0.7]}>
                <Text style={styles.hobbyDesign}>{task}</Text>
              </LinearGradient>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.chatInput}>
        <ImageBackground source={Images.Circle} style={styles.camerabackGround}>
          <Image source={Images.camera} style={styles.cameraIcon}></Image>
        </ImageBackground>
        <TextInput
          style={styles.textInput}
          placeholder="Text Here..."
          placeholderTextColor={'#24000B'}
          onChangeText={text => setTask(text)}
          value={task}></TextInput>
        <Pressable onPress={() => handleAddTask(task)}>
          <FontAwesome
            name={'smile-o'}
            size={20}
            color={'#24000B'}
            style={styles.smileyIcon}></FontAwesome>
        </Pressable>
      </View>
    </View>
  );
};

export default CandidateChat;
