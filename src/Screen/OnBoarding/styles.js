import { StyleSheet } from "react-native"
import { Colors } from "../../Constant/color"

export default StyleSheet.create({
   main:{
    backgroundColor:Colors.White,
    flex:1,
   },
   backGroundImage:{
    height:354,
    width:347,
    marginRight:15,
   },
   backGroundImageFrame:{
      height:353,
      width:350,
      marginTop:8,
      marginLeft:5
     },
   backGroundImageText:{
      marginTop:24,
      textAlign:'center',
      color:Colors.White,
      fontSize:15,
      fontWeight:'100',
   },
   simpleText:{
      color:Colors.BellaDona,
      textAlign:'center',
      fontSize:17,
      marginHorizontal:30,
      marginTop:31,
      fontWeight:'100',
   },
   btn:{
      height:64,
      backgroundColor:Colors.lightPurple,
      borderBottomLeftRadius:27,
      borderTopRightRadius:27,
   },
   btnText:{
      color:Colors.White,
      fontSize:17,
      fontWeight:'600',
      textAlign:'center',
      paddingTop:17
   },
   signUpText:{
      color:Colors.BellaDona,
      textAlign:'center',
      marginTop:26,
      fontSize:15,
      fontWeight:'100'
   },
   signUpTextColor:{
      color:Colors.shadowPurple,
   },
   btnBackView:{
         height: 65,
         marginHorizontal: 14,   
         borderColor:Colors.lightPurple,
         borderWidth: 1,
         marginTop: 26,
         borderRadius: 27,
         transform: [{rotate: '-4.14deg'}],
   }
})