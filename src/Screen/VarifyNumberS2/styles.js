import {StyleSheet} from 'react-native';

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
    color: '#FFFFFF',
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
    color: '#78CC5A',
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
    borderColor:'#FFFFFF'
  },
  otpBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  resendCode:{
    marginTop:13,
    color:"#24000B",
    textAlign:'right',
    marginRight:15
  },
  btnBackView: {
    height: 65,
    marginHorizontal: 16,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 33,
    borderRadius: 27,
    transform: [{rotate: '-4.14deg'}],
  },
  btn: {
    height: 64,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 27,
    borderTopRightRadius: 27,
  },
  btnText: {
    color: '#24000B',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 17,
  },
});
