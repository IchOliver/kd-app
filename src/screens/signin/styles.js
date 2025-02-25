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
    circleContainer:{
        width:Dimension.deviceWidth,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:50
    },
    circle1:{
        width:220,
        height:220,
        borderRadius:110,
        borderWidth:0.3,
        borderColor:Colors.Blue,
        justifyContent:'center',
        alignItems:'center'
    },
    circle2:{
        width:150,
        height:150,
        borderRadius:75,
        borderWidth:1,
        borderColor:Colors.Blue,
        opacity:0.8,
        justifyContent:'center',
        alignItems:'center'
    },
    circle3:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:Colors.Blue
    },
    textContainer:{
        width:Dimension.deviceWidth,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    text1:{
        fontSize:20,
    },
    text2:{
        fontSize:25,
        marginTop:5,
        fontWeight:'bold'
    },
    content:{
        width:Dimension.deviceWidth,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:50
    },
    contentTitle:{
        color:Colors.Black,
        opacity:0.5
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
    button2:{
        marginLeft:30,
        marginRight:30,
        height:50,
        marginTop:20,
        borderRadius:10,
        backgroundColor:Colors.Black,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles