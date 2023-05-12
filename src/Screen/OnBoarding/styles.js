import { StyleSheet } from "react-native"

export default StyleSheet.create({
   main:{
    backgroundColor:'white',
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
      color:'#FFFFFF',
      fontSize:15,
      fontWeight:'100',
   },
   simpleText:{
      color:'#24000B',
      textAlign:'center',
      fontSize:17,
      marginHorizontal:30,
      marginTop:31,
      fontWeight:'100',
   },
   btn:{
      height:64,
      backgroundColor:'#A819FD',
      borderBottomLeftRadius:27,
      borderTopRightRadius:27,
   },
   btnText:{
      color:'#FFFFFF',
      fontSize:17,
      fontWeight:'600',
      textAlign:'center',
      paddingTop:17
   },
   signUpText:{
      color:'#24000B',
      textAlign:'center',
      marginTop:26,
      fontSize:15,
      fontWeight:'100'
   },
   signUpTextColor:{
      color: 'rgba(107, 24, 255, 1)'
   },
   btnBackView:{
         height: 65,
         marginHorizontal: 14,
         borderColor: '#A819FD',
         borderWidth: 1,
         marginTop: 26,
         borderRadius: 27,
         transform: [{rotate: '-4.14deg'}],
   }
})