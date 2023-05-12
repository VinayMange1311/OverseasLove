import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  headerView: {
    marginHorizontal: 14,
    marginTop: 34,
  },
  heartGroup:{
    height:32.21,
    width:30.21,
    alignSelf:'flex-end',
    marginRight:14,
  },
  overseasImg: {
    marginLeft:17
  },
  signInText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 16,
    marginTop: 33,
  },
  signInTextInput: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    height:57,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop:29,
    fontSize: 17,
    paddingLeft: 30,
    fontWeight: '100',
  },
  forgotPassText: {
    color: '#24000B',
    marginTop:6,
    textAlign: 'right',
    marginRight: 15,
    fontSize: 15,
    fontWeight: '300',
  },
  btnBackView:{
    height: 65,
    marginHorizontal: 14,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 22,
    borderRadius: 27,
    transform: [{rotate: '-4.14deg'}],
},
 btn:{
  height:64,
  backgroundColor:'#FFFFFF',
  borderBottomLeftRadius:27,
  borderTopRightRadius:27,
},
btnText:{
  color:'#24000B',
  fontSize:17,
  fontWeight:'600',
  textAlign:'center',
  paddingTop:17
},
  mainDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:43,
  },
  divider: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'white',
  },
  dividerText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '100',
    marginHorizontal: 20,
  },
  socialContent: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
  },
});
