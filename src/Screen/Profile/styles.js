import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backBtn: {
    marginLeft: 15,
    marginTop: 34,
  },
  logo: {
    width: 158,
    height: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 33,
  },
  profile: {
    height: 96,
    width: 96,
    marginTop: 32,
    marginLeft: 15,
  },
  profileframe: {
    height: 96,
    width: 96,
    marginTop: 3,
    marginLeft: 4,
  },
  profileName: {
    fontWeight: '700',
    color: '#24000B',
    fontSize: 22,
    marginTop: 57,
    marginLeft: 15,
  },
  heart: {
    width: 20,
    height: 20,
  },
  profileDesc: {
    color: '#000000',
    fontWeight: '100',
    fontSize: 15,
    marginLeft: 8,
  },
  descView: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 7,
  },
  instruction:{
    color:'#000000',
    fontWeight:'100',
    fontSize:17,
    textAlign:'center',
    marginTop:31,

  },
  premiumInstruction:{
    fontWeight:'700',
    fontSize:19,
    textAlign:'center',
    marginTop:20,
    color:'#000000',
    marginHorizontal:21
  },
  btnBackView:{
    height: 65,
    marginHorizontal: 14,
    borderColor: '#A819FD',
    borderWidth: 1,
    marginTop: 22,
    borderRadius: 27,
    transform: [{rotate: '-4.14deg'}],
},
 btn:{
  height:64,
  backgroundColor:'#A819FD',
  borderBottomLeftRadius:27,
  borderTopRightRadius:27,
},
btnText:{
  color:'#FFFFFF',
  fontSize:17,
  fontWeight:'600',
  textAlign:'center',
  paddingTop:17
},
  shareIcon:{
    height:50,
    width:50,
    marginLeft:20
  },
  shareView:{
    flexDirection:'row',
    marginTop:40,
  },
  shareDesc:{
    fontWeight:'100',
    fontSize:17,
    color:'#24000B',
    marginHorizontal:22,
    width:263
  }
});
