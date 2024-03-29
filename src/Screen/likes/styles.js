import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:Colors.screenBackground,
  },
  backBtn: {
    marginLeft: 15,
    marginTop: 34,
  },
  logo:{
    width:158,
    height:32,
    marginTop:33,
    marginLeft:17,
  },
  contacts:{
    color:Colors.black,
    fontWeight:'700',
    fontSize:22,
    marginTop:33,
    marginLeft:15
  },
  image:{
    width:145,
    height:195,
  },
  imageContain:{
    marginTop:30,
    marginHorizontal:25,
  },
  imageframe:{
    width:145,
    height:174,
    marginLeft:5,
    marginTop:13
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  passImg:{
    height:45,
    width:45,
  },
  likeImg:{
    height:45,
    width:45,
  }
});