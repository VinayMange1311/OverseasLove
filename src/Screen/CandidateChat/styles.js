import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 158,
    height: 32,
    marginTop: 32,
    marginLeft: 17,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 17,
    marginTop: 32,
  },
  chatHeaderScreen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    height: 18,
    width: 12,
  },
  candidateprofile: {
    height: 60,
    width: 60,
    marginLeft: 17,
  },
  candidateName: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 11,
  },
  translationIcon:{
    height: 25, width: 25, marginRight: 26
  },
  callIcon:{
    marginRight: 26
  },
  chatInput: {
    borderColor: 'black',
    marginHorizontal: 15,
    borderRadius: 13,
    marginBottom: 30,
    backgroundColor: 'white',
    color:'black',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  hobbyDesign: {
   color:'white',
   marginLeft:20,
   fontSize:16,
   fontWeight:"bold",
  },
  camerabackGround:{
    height: 30, width: 30, marginLeft: 17
  },
  cameraIcon:{
    height: 20,
    width: 20,
    marginLeft: 5,
    marginTop: 5,
  },
  textInput:{
    width: 270, marginLeft: 17
  },
  smileyIcon:{
    marginRight:16
  },
  gradientTextView:{
    paddingLeft: 10, height: 40, marginTop: 20, width: 200,borderRadius:18,marginLeft:15
  },
  youLiked:{
    marginTop:30,
    textAlign:'center',
    color:'#24000B',
    fontWeight:'100',
    fontSize:17,
  },
});
