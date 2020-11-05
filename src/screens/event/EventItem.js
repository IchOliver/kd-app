import React from 'react'
import {View,Text,Image,TouchableOpacity,Alert} from 'react-native'
import Images from '../../constants/images'
import {BASE_IMAGE_URL} from '../../config/index'
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'

const EventItem = ({Item}) =>{
   
    const onPermission = () =>{
        Alert.alert(
            'Permission',
            'KDUiA wants to send you a push notification before the event starts.Is this ok?',
              [
                {text: 'Allow', onPress: () => console.log('Ask me later pressed')},
                {text: 'Do not allow', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              
              ]
          )
    }
    return(
        <TouchableOpacity
         onPress={()=>NavigationService.navigate(Screens.Page,{item:{
           title:Item.title,
           location:Item.location_image,
           view_map:Item.view_map
         }})}
        >
       <View style={styles.eventItemContainer}>
           <View style={styles.eventContentContainer}>
               <View style={styles.eventLogoContainer}>
                 <Image source={Item.logo !==null?{uri:BASE_IMAGE_URL+Item.logo}:Images.Logo} style={styles.imageSize}/>
                 <Text style={styles.title}>{Item.title}</Text>
               </View>
               <TouchableOpacity
                 onPress={()=>onPermission()}
               >
               <View style={styles.bellContainer}>
                   <Icon type="EvilIcons" name="bell" style={{fontSize:24,color:'white'}}/>
               </View>
               </TouchableOpacity>
            
            </View>
               <View style={styles.contentContainer}>
                 <Text style={styles.content}>{Item.description}</Text>
               </View>
               <View style={styles.scheduleContainer}>
                   <View>
                       <Text style={styles.s1}>Time:</Text>
                       <Text style={styles.s2}>kl.10:30</Text>
                   </View>
                   <View>
                       <Text style={styles.s1}>Room:</Text>
                        <Text style={styles.s2}>{Item.room}</Text>
                   </View>
                   <View>
                       <Text style={styles.s1}>Duration:</Text>
                       <Text style={styles.s2}>45min</Text>
                   </View>
               </View>
       </View>
       </TouchableOpacity>
    )

}

export default EventItem