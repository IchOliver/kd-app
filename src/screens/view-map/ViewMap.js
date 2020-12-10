import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import { WebView } from 'react-native-webview';
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'
import Images from '../../constants/images'

const ViewMap = ({navigation}) =>{
   const view_url = navigation.state.params.item;
    return(
        
    <View style={styles.container}>
        <View style={styles.eventContainer}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                <TouchableOpacity
                 onPress={()=>NavigationService.goBack()}
                >
                  <Icon type="MaterialIcons" name="keyboard-arrow-left" style={{color:'white'}}/>
                </TouchableOpacity>
               <Text style={styles.eventTitle}>Map</Text>
               <Text style={{opacity:0}}>page</Text>
            </View>
          
        </View>
           <WebView useWebKit={true} source={{ uri: view_url }} />

    </View>  
    )

}
export default ViewMap