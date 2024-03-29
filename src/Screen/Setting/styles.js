import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:Colors.screenBackground,
  },
  logo: {
    height: 28,
    width: 152,
  },
  backBtn: {
    height: 18,
    width: 12,
  },
  mainImg: {
    height: 215,
    width: 215,
    marginTop: 33,
  },
  mainImgFrame: {
    height: 200,
    width: 200,
    marginTop: 8,
    marginLeft: 10,
  },
  selectedImg: {
    height: 100,
    width: 100,
  },
  imageView:{
    flexDirection:'row',
    marginHorizontal:15,
    justifyContent:'space-evenly',
    marginTop:11
  },
  cameraIcon: {
    height: 43,
    width: 48,
    margin: 26,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 17,
  },
  title: {
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 15,
    color:Colors.BellaDona,
    fontSize: 22,
  },
  userDesc: {
    fontSize: 15,
    fontWeight: '100',
    marginLeft: 15,
    color:Colors.black,
  },
  dropDownContainer: {
    borderColor:Colors.BellaDona,
    borderWidth: 0.5,
    height: 57,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 30,
    paddingLeft:16,

  },
  placeholder: {
    fontSize: 17,
    color:Colors.BellaDona,
    paddingLeft: 16,
    fontWeight: '100',
  },
  hobbies: {
    height: 42,
    marginHorizontal: 15,
    borderRadius: 13,
    marginTop: 20,
    shadowColor:Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 9,
    shadowOpacity: 10.0,
    color:Colors.black,
    paddingLeft: 15,
    backgroundColor:Colors.White,
  },
  hobbyDesign: {
    backgroundColor:Colors.White,
    color:Colors.BellaDona,
    height: 43,
    width: 151,
    paddingHorizontal: 26,
    paddingVertical: 9,
    borderRadius: 11,
    marginLeft: 15,
    marginTop: 20,
    fontSize: 17,
    fontWeight: '100',
  },
});
