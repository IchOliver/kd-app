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
      
        width:Dimension.deviceWidth,
        height:Dimension.deviceHeight
    },
    eventContainer:{
        backgroundColor:Colors.Blue,
        width:Dimension.deviceWidth,
        height:Dimension.pro15,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        zIndex:100,
        alignItems:'center',
        justifyContent: 'center',
    },
    eventTitle:{
        marginTop:40,
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold',
        color:Colors.White
    },
    eventItemContainer:{
        padding:20,
        backgroundColor:Colors.White,
        marginBottom:20,
        borderRadius:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
       },
       imageSize:{
          width:40,
          height:40
       },
       infoContainer:{
         flexDirection:'row',
         alignItems:'center'
       },
       contentContainer:{
           marginLeft:10
       },
       title:{
           fontSize:16,
           fontWeight:'bold',
           color:Colors.Black
       },
       desc:{
           fontSize:14,
           marginTop:5,
           color:Colors.Black
       },
       arrowContainer:{
           width:40,
           height:40,
           borderRadius:20,
           backgroundColor:Colors.Blue,
           justifyContent: 'center',
           alignItems:'center'
       }
})

export default styles