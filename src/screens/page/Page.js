import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'
import Images from '../../constants/images'
import { BASE_IMAGE_URL } from '../../config'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const Page = ({navigation}) =>{
   const event = navigation.state.params.item;

   const goToMap =(viewMap)=>{

      NavigationService.navigate(Screens.ViewMap,{item:viewMap})
   }
    return(
      <SafeAreaProvider>
        <ScrollView>
     
    <View style={styles.container}>
        <View style={styles.eventContainer}>
            <View style={{marginTop:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                <TouchableOpacity
                 onPress={()=>NavigationService.goBack()}
                >
                  <Icon type="MaterialIcons" name="keyboard-arrow-left" style={{color:'white'}}/>
                </TouchableOpacity>
               <Text style={styles.eventTitle}>{event.title}</Text>
               <Text style={{opacity:0}}>page</Text>
            </View>
          
        </View>
        <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:20}}>
           <Image source={event.location !==null?{uri:BASE_IMAGE_URL+event.location}:Images.Map} style={{width:350,height:400}}/>
        </View>
        
        <TouchableOpacity
          style={styles.btn_container}
          onPress={()=>goToMap(event.view_map)}
        >
                 <View style={styles.button1}>
                   <Text style={styles.buttonText}>View on MazeMap</Text>
                  </View>
        </TouchableOpacity>
    </View>  
         
    </ScrollView>
    </SafeAreaProvider>
    )

}
export default Page