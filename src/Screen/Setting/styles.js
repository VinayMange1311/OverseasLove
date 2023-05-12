import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:'#F5F5F5'
  },
  logo:{
    height:28,
    width:152
  },
  backBtn:{
    height:15,
    width:15,
  },
  headerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    marginHorizontal:17
  },
  title:{
    fontWeight:'700',
    marginTop:30,
    marginLeft:15,
    color:'#24000B',
    fontSize:22,
  },
  userDesc:{
    fontSize:15,
    fontWeight:'100',
    marginLeft:15,
    color:'#000000'
  },
  dropDownContainer:{
    borderColor:'#24000B',
    borderWidth:0.5,
    height:57,
    marginHorizontal:15,
    borderRadius:10,
    marginTop:30
  },
  placeholder: {
    fontSize: 17,
    color: '#24000B',
    paddingLeft: 16,
    fontWeight: '100',
  },
  hobbies:{
    height:42,
    marginHorizontal:15,
    borderRadius:13,
    marginTop:20,
    borderWidth:1,
    shadowOffset: {width:5, height: 8},  
    shadowOpacity:0.3,  
    shadowColor: '#171717',  
    color:'black',
    paddingLeft:15
  },
  hobbyDesign: {
    backgroundColor: 'white',
    color: '#24000B',
    height: 43,
    width:151,
    paddingHorizontal: 26,
    paddingVertical: 9,
    borderRadius: 11,
    marginLeft: 15,
    marginTop:20,
    fontSize:17,
    fontWeight:'100'
  },
})