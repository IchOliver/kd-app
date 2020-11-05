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
    eventContainer:{
        backgroundColor:Colors.Blue,
        width:Dimension.deviceWidth,
        height:Dimension.pro15,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        zIndex:100,
        justifyContent:'space-between',
        alignItems:'center'
    }, 
    eventTitle:{
      
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
        color:Colors.White
    },
    btn_container:{
      marginTop:20
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
    button2:{
        marginLeft:30,
        marginRight:30,
        height:50,
        marginTop:10,
        borderRadius:10,
        backgroundColor:Colors.Purple,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:15,
        color:Colors.White
    },
})

export default styles