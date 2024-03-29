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
    marginTop:32,
  },
  filter:{
    width:25,
    height:16,
    marginTop:42
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:17
  },
  photo:{
    marginTop:32,
    marginHorizontal:16,
    width:329,
    height:400,
    alignSelf:'center',
  },
  rectangle11:{
    width:303,
    height:406,
    alignSelf:'center',
    marginTop:43,

  },
  rectangle12:{
    width:303,
    height:406,
    alignSelf:'center',
    marginTop:54,

  },
  name:{
    fontWeight:'700',
    color:Colors.White,
    fontSize:22,
    marginLeft:19,
    marginTop:334
  },
  disatnce:{
    fontWeight:'100',
    color:Colors.White,
    marginLeft:19,
    fontSize:14
  },
  passBtn:{
    height:45,
    width:45,
    alignSelf:'baseline',
    marginLeft:20
  },
  btnViewContainer:{
    flexDirection: 'row',
    marginTop: 337, 
    marginRight: 23,
  },
  candidateName:{
    fontWeight:'700',
    fontSize:19,
    color:Colors.BellaDona,
    marginLeft:15,
    marginTop:30
  },
  candidateOccupation:{
    fontWeight:'100',
    fontSize:17,
    color:Colors.BellaDona,
    marginLeft:15
  },
  title:{
    marginTop:30,
    fontSize:19,
    fontWeight:'700',
    color:Colors.BellaDona,
    marginLeft:15
  },
  candidateAbout:{
    fontWeight:'100',
    fontSize:17,
    color:Colors.BellaDona,
    marginHorizontal:15,
    marginTop:20
  },

})