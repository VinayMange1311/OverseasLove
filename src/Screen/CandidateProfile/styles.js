import {StyleSheet} from 'react-native';
import { Colors } from '../../Constant/color';

export default StyleSheet.create({
  candidateName: {
    fontWeight: '700',
    fontSize: 19,
    color: Colors.BellaDona,
    marginLeft: 15,
    marginTop: 30,
  },
  candidateOccupation: {
    fontWeight: '100',
    fontSize: 17,
    color: Colors.BellaDona,
    marginLeft: 15,
  },
  title: {
    marginTop: 30,
    fontSize: 19,
    fontWeight: '700',
    color: Colors.BellaDona,
    marginLeft: 15,
  },
  candidateAbout: {
    fontWeight: '100',
    fontSize: 17,
    color: Colors.BellaDona,
    marginHorizontal: 15,
    marginTop: 20,
  },
  hobbyDesign: {
    backgroundColor: Colors.background,
    color: Colors.BellaDona,
    height: 43,
    paddingHorizontal: 26,
    paddingVertical: 9,
    borderRadius: 11,
    marginLeft: 15,
    marginTop:20,
    fontSize:17,
    fontWeight:'100'
  },
  candidateLocation:{
    color:Colors.black,
    fontSize:17,
    marginTop:20,
    marginLeft:15,
    fontWeight:'100',
  }
});
