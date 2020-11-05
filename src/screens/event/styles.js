import Dimension from '../../constants/dimensions.js'
import Colors from '../../constants/color.js'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    scrollContainer:{
        backgroundColor:Colors.Grey,
        width:Dimension.deviceWidth,
        height:Dimension.deviceHeight
    },
    container:{
        backgroundColor:Colors.Grey,
        width:Dimension.deviceWidth,
        height:Dimension.pro100
    },
    eventContainer:{
        backgroundColor:Colors.Blue,
        width:Dimension.deviceWidth,
        height:Dimension.pro15,
        alignItems:'center',
        justifyContent: 'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        zIndex:100
    },
    eventContainer1:{
        width:Dimension.deviceWidth,
        height:Dimension.pro80,
    },
    eventFooter:{
        width:Dimension.deviceWidth,
        height:Dimension.pro10,
    },
    eventTitle:{
        marginTop:40,
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold',
        color:Colors.White,
        // marginTop:10
    },
    fBar:{
       width:Dimension.deviceWidth,
       height:100,
       backgroundColor:'black'
    },

    // event item styls....
    eventItemContainer:{
     padding:20,
     backgroundColor:Colors.White,
     marginBottom:20,
     borderRadius:10
    },
    imageSize:{
       width:40,
       height:40
    },
    eventContentContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    eventLogoContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold',
        color:Colors.Black
    },
    bellContainer:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:Colors.Blue,
        justifyContent:'center',
        alignItems:'center'
    },
    contentContainer:{
        paddingTop:15,
        paddingBottom:15,
        borderBottomColor:Colors.Grey,
        borderBottomWidth:2
    },
    content:{
        fontSize:18,
        fontWeight:'bold'
    },
    scheduleContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingTop:15,
    },
    s1:{
        color:Colors.Black
    },
    s2:{
        color:Colors.Black,
        fontWeight:'600'
    }



})

export default styles