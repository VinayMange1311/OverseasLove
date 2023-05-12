import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Images from '../../Images/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-phone-number-input';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CandidateProfile from '../CandidateProfile';

const Home = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonPress = () => {
    setIsVisible(!isVisible);
  }
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Image source={Images.Logo} style={styles.logo}></Image>
        <TouchableOpacity
          onPress={() => navigation.navigate('Filter')}
          activeOpacity={0.9}>
          <Image source={Images.Filter} style={styles.filter}></Image>
        </TouchableOpacity>
      </View>
      <ImageBackground source={Images.photo} style={styles.photo}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.name}>Kim, 26</Text>
            <Text style={styles.disatnce}>20km from you</Text>
          </View>
          <View style={styles.btnViewContainer}>
            <Image source={Images.passBtn} style={styles.passBtn} />
            <Pressable onPress={()=> handleButtonPress()}>
            <Image source={Images.likeBtn} style={styles.passBtn} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      {isVisible && <CandidateProfile/>}
    </ScrollView>
  );
};
export default Home;
