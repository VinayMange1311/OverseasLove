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

const CandidateProfile = () => {
  return (
    <ScrollView style={{paddingBottom:30}}>
     
      <Text style={styles.candidateName}>Amanda, 22</Text>
      <Text style={styles.candidateOccupation}>Lawyer</Text>
      <Text style={styles.title}>About</Text>
      <Text style={styles.candidateAbout}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies
        sed egestas dui elementum venenatis diam penatibus nam. Congue egestas
        ut laoreet tincidunt in aliquam.
      </Text>
      <Text style={styles.title}>Hobby</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.hobbyDesign}>Drawing</Text>
        <Text style={styles.hobbyDesign}>Photography</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.hobbyDesign}>Cooking</Text>
        <Text style={styles.hobbyDesign}>Climing</Text>
      </View>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.candidateLocation}>New-York</Text>
      <Text style={styles.title}>More information</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.hobbyDesign}>Free</Text>
        <Text style={styles.hobbyDesign}>Hetero</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.hobbyDesign}>Smoking</Text>
        <Text style={styles.hobbyDesign}>Protestant</Text>
      </View>
    </ScrollView>
  );
};
export default CandidateProfile;
