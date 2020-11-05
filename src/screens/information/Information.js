import React from 'react'
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {ActionCreators} from '../../store/action'
import {bindActionCreators} from 'redux'
import {InfoList} from './information-list'
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'
import { BASE_IMAGE_URL } from '../../config'
import Images from '../../constants/images'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const InfoItem = ({Item}) =>{
    return(
        <TouchableOpacity
         onPress={()=>NavigationService.navigate(Screens.Page,{item:{
          title:Item.g_title,
          location:Item.g_location,
          view_map:Item.g_view_map
         }})}
        >
         <View style={styles.eventItemContainer}>
            <View style={styles.infoContainer}>
                <Image source={Item.g_logo !==null?{uri:BASE_IMAGE_URL+Item.g_logo}:Images.Logo} style={styles.imageSize}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{Item.g_title}</Text>
                    <Text style={styles.desc}>{Item.g_description}</Text>
                </View>
            </View>
            <View style={styles.arrowContainer}>
             <Icon type="AntDesign" name="arrowright" style={{fontSize:20,color:'white'}}/>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const Information = ({Auth,Informs}) =>{
   const [newInformStudents,setNewInformStudents] =React.useState([]);
   const [newInformCompany,setNewInformCompany] =React.useState([]);
  //  console.log("array",newInformStudents)
   React.useEffect(()=>{
       const Infoes=Informs.infoes;
       let infostudents=[];
       let infocompaines=[];
       for(var i=0;i<Infoes.length;i++){
       
         if(Infoes[i].role === 's'){
            infostudents.push(Infoes[i]);
         }
         else{
            infocompaines.push(Infoes[i]);
         }
       }
       setNewInformCompany(infocompaines);
       setNewInformStudents(infostudents);
   },[])
  return(
    <SafeAreaProvider>
    <View style={styles.container}>
        <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>Information</Text>
        </View>
        <FlatList
            horizontal={false}
            data={Auth.role ==='s'?newInformStudents:newInformCompany}
            style={{padding:20,width:'100%'}}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <InfoItem Item={item}/>
            }
         />
    </View>  
    </SafeAreaProvider>
  )
}
const mapStateToProps =({auth,informs})=>{
    return{
      Auth:auth,
      Informs:informs
    }
  }
  
  const mapDispatchToProps =dispatch=>{
    return bindActionCreators(ActionCreators,dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(Information)