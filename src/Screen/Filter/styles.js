import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:'#F5F5F5',
    
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
    color:'#24000B',
    fontWeight:'100',
    fontSize:17,
    marginTop:33,
    marginLeft:15
  },
  ageTitle:{
    color:'#24000B',
    fontWeight:'100',
    fontSize:17,
    marginTop:30,
  },
  dropDownContainer:{
    borderColor:'#24000B',
    borderWidth:0.5,
    height:57,
    marginHorizontal:15,
    borderRadius:10,
    marginTop:30,
    backgroundColor:'#F5F5F5',
    color:'#24000B',
  },
  placeholder: {
    fontSize: 17,
    color: '#24000B',
    paddingLeft: 16,
    fontWeight: '100',
  },
  filterText:{
    fontSize:22,
    color:'#24000B',
    fontWeight:'700',
    marginTop:30,
    marginLeft:15
  },
  
})