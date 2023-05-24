import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:Colors.screenBackground,
  },
  logo: {
    width: 158,
    height: 32,
    marginTop: 32,
    marginLeft: 17,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 17,
    marginTop: 32,
  },
  chatHeaderScreen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    height: 18,
    width: 12,
  },
  candidateprofile: {
    height: 60,
    width: 60,
    marginLeft: 17,
  },
  candidateName: {
    color:Colors.black,
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 11,
  },
  translationIcon: {
    height: 25,
    width: 25,
    marginRight: 26,
  },
  callIcon: {
    marginRight: 26,
  },
  chatInput: {
    borderColor:Colors.black,
    marginHorizontal: 15,
    borderRadius: 13,
    marginBottom: 30,
    backgroundColor:Colors.White,
    color:Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hobbyDesign: {
    color:Colors.White,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal:10,
    paddingVertical:10
  },
  camerabackGround: {
    height: 30,
    width: 30,
    marginLeft: 17,
  },
  cameraIcon: {
    height: 20,
    width: 20,
    marginLeft: 5,
    marginTop: 5,
  },
  textInput: {
    width: 270,
    marginLeft: 17,
    color:Colors.black
  },
  smileyIcon: {
    marginRight: 16,
  },
  gradientTextView: {
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 18,
    marginLeft: 15,
    width:180,
    maxWidth:400,
    minWidth:100,
  },
  youLiked: {
    marginTop: 30,
    textAlign: 'center',
    color: Colors.BellaDona,
    fontWeight: '100',
    fontSize: 17,
  },
});
