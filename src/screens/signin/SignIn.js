import React,{useEffect} from 'react'
import {View,Text,TouchableOpacity,ScrollView,SafeAreaView,StatusBar} from 'react-native'
import NavigationService from '../../navigation/NavigationService';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {connect} from 'react-redux'
import {ActionCreators} from '.././../store/action'
import { bindActionCreators } from 'redux';
import Screens from '../../utils/screen';
import Storage from '../../utils/storage'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const SignIn = ({Auth,signIn,getEvents,getStands,getInformations}) =>{
    
    
    useEffect(()=>{
      // const role = Storage.getItem('role');
  
      AsyncStorage.getItem('role').then((value)=>{
       const role = JSON.parse(value);
       console.log('role',role)
        if(role !==null){
        NavigationService.navigate(Screens.Home);
        }
      });     
      getEvents();
      getStands();
      getInformations();
    },[]);
     
    
    const onGotoHomepage = () =>{
       signIn('s')
    }
    return(
      <SafeAreaProvider>
        <ScrollView style={styles.scrollContainer}>
            <SafeAreaView>
         <View style={styles.container}>
           <View style={styles.circleContainer}>
              <View style={styles.circle1}>
                  <View style={styles.circle2}>
                      <View style={styles.circle3}>

                      </View>
                  </View>
              </View>
           </View>
         
           <View style={styles.textContainer}>
               <Text style={styles.text1}>Welcome to</Text>
               <Text style={styles.text2}>KD2021</Text>
           </View>
           <View style={styles.content}>
               <Text style={styles.contentTitle}>Please select which user you are</Text>
           </View>
           <View>
               <TouchableOpacity
                 onPress={()=>onGotoHomepage()} 
               
               >
                 <View style={styles.button1}>
                   <Text style={styles.buttonText}>Student</Text>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity
                 onPress={()=>NavigationService.navigate(Screens.CompanyPin)} 
               >
                 <View style={styles.button2}>
                   <Text style={styles.buttonText}>Company</Text>
                  </View>
               </TouchableOpacity>
            
           </View>

          </View>
          </SafeAreaView>
          </ScrollView>
          </SafeAreaProvider>
    )
   

}

const mapStateToProps =({auth})=>{
  return{
     Auth:auth
  }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)