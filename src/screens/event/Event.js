import React from 'react'
import {View,Text,FlatList} from 'react-native'
import {connect} from 'react-redux'
import {ActionCreators} from '../../store/action'
import {bindActionCreators} from 'redux'
import EventItem from './EventItem'
import styles from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Event = ({Auth,Events}) =>{

  console.log("event role=>",Events)

  return(
    <SafeAreaProvider>

   
      <View style={styles.container}>
          <View style={styles.eventContainer}>
             <Text style={styles.eventTitle}>Events</Text>
          </View>
          <View style={styles.eventContainer1}>
            <FlatList
            horizontal={false}
            data={Events.events}
            style={{padding:20,width:'100%'}}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <EventItem Item={item}/>
            }
            />
          </View>
          <View style={styles.eventFooter}>

          </View>
      </View>
      </SafeAreaProvider>
  )
}

const mapStateToProps = ({auth,events}) =>{
 
  return{
     Auth:auth,
     Events:events
  }

}

const mapDispatchToProps = dispatch =>{

  return bindActionCreators(ActionCreators,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Event)