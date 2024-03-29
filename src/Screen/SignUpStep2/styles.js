import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  backBtn: {
    marginLeft: 17,
    marginTop: 38,
    flexBasis: 'auto',
  },
  signUpHead: {
    color: Colors.White,
    fontWeight: '700',
    fontSize: 22,
    marginTop: 31,
    flexBasis: 320,
    textAlign: 'center',
  },
  circleBackGround: {
    height: 203,
    width: 203,
    alignSelf: 'center',
    backgroundColor:Colors.White 
  },
  cameraIcon: {
    width: 124,
    height: 110,
    marginTop: 50,
    marginHorizontal: 40,
  },
  addIcon: {
    height: 46,
    width: 46,
    marginLeft:160,
  },
  plusIcon: {
    width: 13,
    height: 15,
    marginHorizontal: 16,
    marginVertical: 15,
  },
  userChoiceDesc: {
    borderColor: Colors.White,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 20,
    fontSize: 17,
    paddingLeft: 30,
    fontWeight: '100',
    height: 57,
    color: Colors.White,
  },
  dayDropDownContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Colors.White,
    height: 57,
    width: 84,
    fontSize: 16,
    marginTop: 20,
    paddingLeft:1
  },
  monthDropDownContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.White,
    height: 57,
    width: 108,
    fontSize: 16,
    marginTop: 20,
    paddingLeft:15
  },
  yearDropDownContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Colors.White,
    height: 57,
    width: 94,
    fontSize: 16,
    marginTop: 20,
    paddingLeft:4
  },
  placeholder: {
    fontSize: 17,
    color:Colors.White,
    paddingLeft: 15,
    fontWeight: '100',
  },
  dropDownView: {
    flexDirection: 'row',
    marginHorizontal: 18,
    justifyContent: 'space-between',
  },
  mainDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 31,
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
  instaIcon: {
    height: 35,
    width: 35,
    marginTop: 3,
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
  btnBackView: {
    height: 65,
    marginHorizontal: 14,
    borderColor:Colors.White,
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
    color: Colors.BellaDona,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 17,
  },
  dropDownContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Colors.White,
    height: 57,
    width: 150,
    fontSize: 16,
    marginTop:33,
  },
});
