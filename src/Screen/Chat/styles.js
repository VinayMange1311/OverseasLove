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
  contactsImage:{
    height:59,
    width:59,
    borderRadius:30,
    marginHorizontal:15,
    marginTop:20
  },
  chat:{
    fontWeight:'700',
    color:Colors.black,
    fontSize:22,
    marginLeft:15,marginTop:20
  },
  names:{
    fontSize:19,
    fontWeight:'700',
    color:Colors.BellaDona,
    marginTop:22
  },
  desc:{
    fontSize:17,
    fontWeight:'100',
    color:Colors.black,
  },
  chatMainView:{
    flexDirection:'row',
  }
});