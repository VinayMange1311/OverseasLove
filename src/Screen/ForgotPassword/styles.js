import { StyleSheet } from "react-native"

export default StyleSheet.create({
   main:{
    flex:1,
   },
   backBtn:{
    marginLeft:17,
    marginTop:35,
   },
   overseas:{
    marginTop:100,
    width: 316,
    height: 58,
    alignSelf: 'center',
   },
   forgotPasswordText:{
    fontWeight:'700',
    fontSize:22,
    marginTop:33,
    marginLeft:17
   },
   forgotPasswordDesc:{
    marginHorizontal:15,
    marginTop:20,
    fontWeight:'100',
    fontSize:17,
    lineHeight:25,
   },
   emailInput: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 30,
    fontSize: 17,
    paddingLeft: 30,
    fontWeight: '100',
    height:57,
    color:'#FFFFFF',
  },
  btnBackGrondLiner: {
    height: 85,
    marginHorizontal: 16,
    marginTop: 25,
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
});