import React from 'react'
import {View,Text,TouchableOpacity,Image,Linking} from 'react-native'
import {Icon} from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'
import Images from '../../constants/images'
import { BASE_IMAGE_URL } from '../../config'
import { ScrollView } from 'react-native-gesture-handler';

const Company = ({navigation}) =>{
   const company = navigation.state.params.item
   const  handleClick = (url) => {
     console.log(url)
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    }).catch(error=>{

    })
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
                <Text style={styles.eventTitle}>{company.name}</Text>
               <Text style={{opacity:0}}>page</Text>
            </View>
          
        </View>
        <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:20}}>
           <Image source={company.location !==null?{uri:BASE_IMAGE_URL+company.location}:Images.Map} style={{width:350,height:400}}/>
        </View>
        
        <TouchableOpacity
          style={styles.btn_container}
          // onPress={()=>NavigationService.navigate(Screens.ViewSocial,{item:{
          //   site:company.c_site,
          //   title:'Homepage'
          // }})}
          onPress={()=>handleClick(company.homepage)}
        >
                 <View style={styles.button1}>
                   <Text style={styles.buttonText}>Go to homepage</Text>
                  </View>
        </TouchableOpacity>
          
        <TouchableOpacity
          // onPress={()=>NavigationService.navigate(Screens.ViewSocial,{item:{
          //   site:company.c_linkedin,
          //   title:'Linkedin'
          // }})}
          onPress={()=>handleClick(company.linkedin)}

        >
                 <View style={styles.button2}>
                   <Text style={styles.buttonText}>Follow on Linkedin</Text>
                  </View>
        </TouchableOpacity>
    </View>  
    </ScrollView>
    </SafeAreaProvider>
    )

}
export default Company