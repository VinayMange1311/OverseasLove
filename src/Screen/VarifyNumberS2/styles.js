import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  backBtn: {
    marginLeft: 15,
    marginTop: 34,
  },
  HeartGroup: {
    height: 32,
    width: 30,
    marginTop: 66,
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  overseasImg: {
    width: 316,
    height: 58,
    alignSelf: 'center',
  },
  varfyTitle: {
    marginTop: 33,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.White,
    marginLeft: 16,
  },
  varifyDesc: {
    marginTop: 20,
    marginHorizontal: 20,
    fontWeight: '600',
    fontSize: 17,
    marginBottom:20,
  },
  numberDesc: {
    fontWeight: '400',
    fontSize: 17,
    color:Colors.lightGreen,
  },
  otpNo: {
    flexDirection: 'row',
    width:63,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
    borderBottomWidth:1,
    fontWeight:'700',
    borderColor:Colors.White
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  resendCode:{
    marginTop:13,
    color:Colors.BellaDona,
    textAlign:'right',
    marginRight:15
  },
  btnBackView: {
    height: 65,
    marginHorizontal: 16,
    borderColor: Colors.White,
    borderWidth: 1,
    marginTop: 33,
    borderRadius: 27,
    transform: [{rotate: '-4.14deg'}],
  },
  btn: {
    height: 64,
    backgroundColor:Colors.White,
    borderBottomLeftRadius: 27,
    borderTopRightRadius: 27,
  },
  btnText: {
    color:Colors.BellaDona,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 17,
  },
});
