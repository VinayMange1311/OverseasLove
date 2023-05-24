import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  header:{
    flexDirection: 'row',
  },
  backBtn: {
    marginLeft: 17,
    marginTop: 38,
    flexBasis:'auto'
  },
  signUpHead: {
    color:Colors.White,
    fontWeight: '700',
    fontSize: 22,
    marginTop: 31,
    textAlign:'center',
    flexBasis:320
  },
  signUpTextInput: {
    borderColor:Colors.White,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 33,
    fontSize: 17,
    paddingLeft: 30,
    fontWeight: '100',
    height: 57,
    color: Colors.White,
  },
  emailInput: {
    borderColor:Colors.White,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 33,
    fontSize: 17,
    paddingLeft: 30,
    fontWeight: '200',
    height: 57,
    color:Colors.White,
  },
  mainDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:42,
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
  divider: {
    flex: 1,
    height: 0.5,
    backgroundColor:Colors.White,
  },
  dividerText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '100',
    marginHorizontal: 20,
  },
  socialContent: {
    flexDirection: 'row',
    marginTop: 33,
    justifyContent: 'space-evenly',
  },
  instaIcon:{
    height: 35, width: 35, marginTop: 3
  },
  dropdownView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  dropDownContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Colors.White,
    height: 57,
    width: 150,
    fontSize: 16,
    marginTop:33,
    paddingLeft:15
  },
  placeholder: {
    fontSize: 17,
    color:Colors.White,
    paddingLeft: 15,
    fontWeight: '100',
  },
  btnBackView:{
    height: 65,
    marginHorizontal: 14,
    borderColor: Colors.White,
    borderWidth: 1,
    marginTop:33,
    borderRadius: 27,
    transform: [{rotate: '-4.14deg'}],
},
 btn:{
  height:64,
  backgroundColor:Colors.White,
  borderBottomLeftRadius:27,
  borderTopRightRadius:27,
},
btnText:{
  color:Colors.BellaDona,
  fontSize:17,
  fontWeight:'600',
  textAlign:'center',
  paddingTop:17
},
});
