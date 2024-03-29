import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  backBtn: {
    marginLeft: 17,
    marginTop: 35,
  },
  overseas: {
    marginHorizontal:20,
    alignSelf:'center',
  },
  forgotPasswordText: {
    fontWeight: '700',
    fontSize: 22,
    marginTop: 33,
    marginLeft: 17,
    color:Colors.White,
  },
  forgotPasswordDesc: {
    marginHorizontal: 15,
    marginTop: 20,
    fontWeight: '100',
    fontSize: 17,
    lineHeight: 25,
    color:Colors.White,
  },
  emailInput: {
    borderColor:Colors.White,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 30,
    fontSize: 17,
    paddingLeft: 30,
    fontWeight: '100',
    height: 57,
    color:Colors.White,
  },
  btnBackView: {
    height: 65,
    marginHorizontal: 14,
    borderColor:Colors.White,
    borderWidth: 1,
    marginTop: 22,
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
  heartGroup:{
    height:32.21,
    width:30.21,
    alignSelf:'flex-end',
    marginRight:14,
    marginTop:65,
  },
});
