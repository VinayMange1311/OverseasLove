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
  btnBackGrondLiner: {
    height: 85,
    marginHorizontal: 16,
    marginTop:20,
  },
  resetBtn: {
    height: 65,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
  },
  btntext: {
    color: '#24000B',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 22,
  },
  resendCode:{
    marginTop:13,
    color:"#24000B",
    textAlign:'right',
    marginRight:15
  }
});
