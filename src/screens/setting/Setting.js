import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Storage from '../../utils/storage'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'
import styles from './styles'
const Setting = () =>{

  const onRole =()=>{
    Storage.removeItem('role');
    NavigationService.navigate(Screens.SignIn)
  }
  return(
    <SafeAreaProvider>
    <View style={styles.container}>
        <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>Setting</Text>
        </View>
        <TouchableOpacity
          style={styles.btn_container}
          onPress={()=>onRole()}
        >
                 <View style={styles.button1}>
                   <Text style={styles.buttonText}>Change user role</Text>
                  </View>
        </TouchableOpacity>
    </View>  
    </SafeAreaProvider>
  )
}

export default Setting