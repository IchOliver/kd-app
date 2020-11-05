import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    scrollContainer:{
        backgroundColor:Colors.White,
        width:Dimension.deviceWidth,
        height:Dimension.deviceHeight
    },
    container:{
        backgroundColor:Colors.White,
        width:Dimension.deviceWidth,
        height:Dimension.deviceHeight
    },
    imageContainer:{
      paddingTop:20,
      paddingLeft:10,
      paddingRight:10
    },
    imageSize:{
      width:25,
      height:25
    },
    pinTitleContainer:{
      width:Dimension.deviceWidth,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    pinTitle:{
       fontSize:25,
       fontWeight:'bold',
       color:Colors.Black
    },
    contentTitle:{
      fontSize:14,
      color:Colors.Black,
      opacity: 0.5,
    },
    verificationCodeContainer: {
      marginTop: 30,
      padding:20
    },
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 60,
      height: 60,
      lineHeight: 60,
      fontSize: 24,
      borderWidth: 2,
      borderRadius: 15,
      textAlign: 'center',
    },
    logoSize:{
       width:50,
       height:50
    },
    symbolContainer:{
      width:'100%',
      marginTop:50,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    symbolContent:{
     fontSize:20,
     color:Colors.Black,
     opacity:0.5,
     marginLeft:5
    }, 
    footContainer:{
      marginTop:Dimension.pro30
    },
    privacyContainer:{
      width:'100%',
      marginTop:10,
      alignItems:'center'
    },
    privacyTitle:{
      color:Colors.Black
    },
    privacyContent:{
      color:Colors.Blue,
      textDecorationLine:'underline'
    },
    button1:{
        marginLeft:30,
        marginRight:30,
        height:50,
        marginTop:20,
        borderRadius:10,
        backgroundColor:Colors.Blue,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:15,
        color:Colors.White
    },
   
})

export default styles