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
    color: Colors.White,
    marginLeft: 16,
    fontWeight: '700',
  },
  varifyDesc: {
    marginTop: 20,
    marginHorizontal: 15,
    fontSize: 17,
    fontWeight: '100',
  },
  dropNumberView: {
    flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 20,
  },
  flagDropDown: {
    height: 57,
    width: 84,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Colors.White,
    padding: 10,
  },
  textInput: {
    borderColor:Colors.White,
    borderWidth: 1,
    height: 57,
    borderRadius: 10,
    marginLeft: 15,
    paddingLeft: 30,
    width: 225,
  },
  flagDropIcon: {
    tintColor:Colors.White,
    height: 8,
    width: 14,
    marginLeft: 12,
  },
  btnBackView: {
    height: 65,
    marginHorizontal: 16,
    borderColor:Colors.White,
    borderWidth: 1,
    marginTop: 33,
    borderRadius: 27,
    transform: [{rotate: '-4.14deg'}],
  },
  btn: {
    height: 64,
    backgroundColor: Colors.White,
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
});
