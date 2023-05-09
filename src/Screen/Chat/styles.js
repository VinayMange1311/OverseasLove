import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:'#F5F5F5'
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
    color:'#000000',
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
    color:'#000000',
    fontSize:22,
    marginLeft:15,marginTop:20
  },
  names:{
    fontSize:19,
    fontWeight:'700',
    color:'#24000B',
    marginTop:22
  },
  desc:{
    fontSize:17,
    fontWeight:'100',
    color:'#000000'
  },
  chatMainView:{
    flexDirection:'row',
  }
});