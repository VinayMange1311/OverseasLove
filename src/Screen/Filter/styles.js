import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:Colors.screenBackground,
    
  },
  logo:{
    height:28,
    width:152
  },
  backBtn:{
    height:18,
    width:12,
    marginTop:6
  },
  headerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    marginHorizontal:17
  },
  simpleText:{
    color:Colors.BellaDona,
    fontWeight:'100',
    fontSize:17,
    marginTop:33,
    marginLeft:15
  },
  ageTitle:{
    color:Colors.BellaDona,
    fontWeight:'100',
    fontSize:17,
    marginTop:30,
  },
  dropDownContainer:{
    borderColor:Colors.BellaDona,
    borderWidth:0.5,
    height:57,
    marginHorizontal:15,
    borderRadius:10,
    marginTop:30,
    backgroundColor:Colors.screenBackground,
    color:Colors.BellaDona,
  },
  placeholder: {
    fontSize: 17,
    color:Colors.BellaDona,
    paddingLeft: 16,
    fontWeight: '100',
  },
  filterText:{
    fontSize:22,
    color:Colors.BellaDona,
    fontWeight:'700',
    marginTop:30,
    marginLeft:15
  },
  
})