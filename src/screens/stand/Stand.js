import React from 'react'
import {View,Text,FlatList,Image,TextInput,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {ActionCreators} from '../../store/action'
import {bindActionCreators} from 'redux'
import {Icon} from 'native-base'
import {StandList} from './stand-list'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../utils/screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const StandItem = ({Item}) =>{
    return(
       <SafeAreaProvider>
         <View style={styles.eventItemContainer}>
            <View style={styles.infoContainer}>
                {/* <Image source={Item.image} style={styles.imageSize}/> */}
                 <View style={styles.rectContainer}>
                   <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>{Item.name}.</Text>
                 </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{Item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                       <Text style={styles.desc}>Plass:</Text>
                       <Text style={[styles.desc,{fontWeight:'600'}]}>35</Text>
                    </View>
                    
                </View>
            </View>
            <TouchableOpacity
             onPress={()=>NavigationService.navigate(Screens.Company,{item:{
              name:Item.name,
              location:Item.c_location,
              homepage:Item.c_site,
              linkedin:Item.c_linkedin
             }
             })}
            >
            <View style={styles.arrowContainer}>
             <Icon type="AntDesign" name="arrowright" style={{fontSize:20,color:'white'}}/>
            </View>
            </TouchableOpacity>
        </View>
        </SafeAreaProvider>
      
    )
}

const Stand = ({Auth,Stands,searchStand,getStands}) =>{

  const onSearchText =(text)=>{
    if(text !==''){
      searchStand(text);
    }
    else{
      getStands();
    }
    
  }

  return(
    <View style={styles.container}>
         <View style={styles.eventContainer}>
           <Text style={styles.eventTitle}>Stand</Text>
           <View style={styles.standSearchContainer}>
            <View style={styles.searchContainer}>
               <Icon type="EvilIcons" name="search" style={{fontSize:25,color:'white',color:'gray'}}/>
               <TextInput
                 style={styles.searchText}
                 placeholder="Search for companies"
                 onChangeText={(text)=>onSearchText(text)}
               />
             </View>
           </View>
        
        </View>
        <FlatList
          horizontal={false}
          data={Stands.stands}
          style={{padding:20,width:'100%'}}
          keyExtractor={item=>item.id}
          renderItem={({item})=>
          <StandItem Item={item}/>
          }
        />
    </View>    
  )
}

const mapStateToProps =({auth,stands})=>{
  return{
    Auth:auth,
    Stands:stands
  }
}

const mapDispatchToProps =dispatch=>{
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Stand)