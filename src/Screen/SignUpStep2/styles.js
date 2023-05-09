import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    main: {
        flex: 1,
      },
      backBtn: {
        marginLeft: 17,
        marginTop: 38,
      },
      signUpHead: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 22,
        marginTop: 31,
        marginLeft: 114,
      },
      circleBackGround:{
        height:203,
        width:203,
        alignSelf:'center',
        marginTop:30
      },
      cameraIcon:{
        width:124,
        height:110,
        marginTop:50,
        marginHorizontal:40,
      },
      addIcon:{
        height:46,
        width:46,
        marginLeft:140,
      },
      plusIcon:{
        width:13,
        height:15,
        marginHorizontal:16,
        marginVertical:15
      },
      userChoiceDesc: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 16,
        marginTop:20,
        fontSize: 17,
        paddingLeft: 30,
        fontWeight: '100',
        height: 57,
        color: '#FFFFFF',
      },
      dayDropDownContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        height: 57,
        width: 84,
        fontSize: 16,
        marginTop: 20,
      },
      placeholder: {
        fontSize: 17,
        color: 'white',
        paddingLeft: 15,
        fontWeight: '100',
      },
      monthDropDownContainer:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        height: 57,
        width: 108,
        fontSize: 16,
        marginTop: 20,
      },
      yearDropDownContainer:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        height: 57,
        width: 94,
        fontSize: 16,
        marginTop: 20,
      },
      dropDownView:{
        flexDirection:'row',
        marginHorizontal:18,
        justifyContent:'space-between'
      },
      btnBackGrondLiner: {
        height: 85,
        marginHorizontal: 16,
        marginTop:30,
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
      mainDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 56,
        // position: 'absolute',
        // left: 0,
        // bottom: 0,
        // right: 0,
      },
      divider: {
        flex: 1,
        height: 0.5,
        backgroundColor: 'white',
      },
      dividerText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '100',
        marginHorizontal: 20,
      },
      socialContent: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-evenly',
      },
});
